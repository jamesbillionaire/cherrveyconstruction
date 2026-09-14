import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const requireTool = createRequire(path.join(path.resolve(process.env.REVIEW_TOOLS), "package.json"));
const { chromium } = requireTool("playwright");
const base = "https://www.cherrveyconstruction.com";
const output = path.resolve(process.env.REVIEW_OUTPUT || "visual-review");
await mkdir(output, { recursive: true });
const report = { commit: process.env.GITHUB_SHA, base, pages: [], noJavaScriptFallback: false, errors: [] };
const browser = await chromium.launch();
try {
  const context = await browser.newContext({ reducedMotion: "reduce" });
  for (const width of [390, 1440]) for (const route of ["/", "/about/", "/services/", "/projects/", "/contact/", "/projects/csc-network-rehabilitation/"]) {
    const page = await context.newPage();
    const runtimeErrors = [];
    page.on("pageerror", error => runtimeErrors.push(String(error)));
    const label = route === "/" ? "home" : route.split("/").filter(Boolean).join("-");
    try {
      await page.setViewportSize({ width, height: 960 });
      const response = await page.goto(base + route, { waitUntil: "networkidle", timeout: 30000 });
      assert(response?.ok(), `Production HTTP ${response?.status()}`);
      await page.evaluate(() => document.fonts.ready);
      await page.locator("img").evaluateAll(async images => { images.forEach(image => { image.loading = "eager"; }); await Promise.all(images.map(image => image.decode().catch(() => {}))); });
      assert.equal(await page.locator("main.cs-site h1").count(), 1);
      const invalidImages = await page.locator("img").evaluateAll(images => images.filter(image => !image.complete || !image.naturalWidth).map(image => image.src));
      assert.deepEqual(invalidImages, []);
      const size = await page.evaluate(() => ({ viewport: innerWidth, document: document.documentElement.scrollWidth, deployment: document.documentElement.dataset.dplId }));
      assert(size.document <= size.viewport + 1);
      assert.deepEqual(runtimeErrors, []);
      assert((await page.locator('footer a[href="mailto:info@cherrveyconstruction.com"]').count()) === 1);
      if (route === "/" && width === 390) {
        const buttonWidths = await page.locator(".cs-home-copy .cs-actions a").evaluateAll(links => links.map(link => link.getBoundingClientRect().width));
        assert.equal(buttonWidths.length, 2);
        assert(Math.abs(buttonWidths[0] - buttonWidths[1]) < 2, "Mobile actions should align");
      }
      await page.screenshot({ path: path.join(output, `live-${label}-${width}.png`), fullPage: true });
      await page.screenshot({ path: path.join(output, `live-top-${label}-${width}.png`) });
      report.pages.push({ route, width, status: response.status(), ...size, runtimeErrors });
    } catch (error) { report.errors.push({ route, width, error: String(error) }); }
    await page.close();
  }
  await context.close();
  const noJs = await browser.newContext({ javaScriptEnabled: false });
  const page = await noJs.newPage();
  await page.goto(base + "/contact/");
  assert(await page.locator("#inquiry-name").isDisabled(), "Without JS the composer must not send a native GET form");
  assert((await page.locator('main a[href="mailto:info@cherrveyconstruction.com"]').count()) >= 1);
  report.noJavaScriptFallback = true;
  await noJs.close();
} catch (error) { report.errors.push({ error: String(error) }); }
finally {
  await browser.close();
  await writeFile(path.join(output, "live-report.json"), JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
}
if (report.errors.length) process.exitCode = 1;
