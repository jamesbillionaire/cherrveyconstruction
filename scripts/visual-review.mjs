import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const toolRoot = process.env.REVIEW_TOOLS;
if (!toolRoot) throw new Error("REVIEW_TOOLS must point to the isolated browser-tool installation.");
const requireTool = createRequire(path.join(path.resolve(toolRoot), "package.json"));
const { chromium } = requireTool("playwright");
const { default: AxeBuilder } = requireTool("@axe-core/playwright");
const baseUrl = process.env.REVIEW_BASE_URL || "http://127.0.0.1:4173";
const output = path.resolve(process.env.REVIEW_OUTPUT || "visual-review");
const routes = ["/", "/about/", "/services/", "/projects/", "/contact/", "/projects/csc-network-rehabilitation/", "/projects/ppa-structured-cabling/", "/projects/dti-cctv-it-room/", "/projects/ppa-data-room/", "/projects/emb-region-ix-data-network/"];
const widths = [360, 390, 768, 1024, 1440];
const report = { commit: process.env.GITHUB_SHA || null, baseUrl, pages: [], interaction: [], errors: [], accessibilityScope: "main content, WCAG 2 A/AA" };
const internalLinks = new Set();
await mkdir(output, { recursive: true });
for (let attempt = 0; attempt < 40; attempt++) {
  try { if ((await fetch(baseUrl)).ok) break; } catch { /* Wait for the local static server. */ }
  if (attempt === 39) throw new Error("Review server is unavailable.");
  await new Promise(resolve => setTimeout(resolve, 500));
}
const browser = await chromium.launch();
try {
  const context = await browser.newContext({ reducedMotion: "reduce" });
  for (const width of widths) for (const route of routes) {
    const page = await context.newPage();
    const errors = [];
    page.on("pageerror", error => errors.push(String(error)));
    const label = route === "/" ? "home" : route.split("/").filter(Boolean).join("-");
    try {
      await page.setViewportSize({ width, height: 960 });
      const response = await page.goto(`${baseUrl}${route}`, { waitUntil: "networkidle" });
      assert(response?.ok(), `HTTP ${response?.status()}`);
      await page.evaluate(() => document.fonts.ready);
      // Load off-screen lazy images as well, rather than overlooking broken portfolio media.
      await page.locator("img").evaluateAll(async images => {
        images.forEach(image => { image.loading = "eager"; });
        await Promise.all(images.map(image => image.decode().catch(() => {})));
      });
      assert.equal(await page.locator("h1").count(), 1, "Expected exactly one H1");
      const overflow = await page.evaluate(() => ({ viewport: innerWidth, document: document.documentElement.scrollWidth }));
      assert(overflow.document <= overflow.viewport + 1, `Horizontal overflow: ${JSON.stringify(overflow)}`);
      const broken = await page.locator("img").evaluateAll(images => images.filter(image => !image.complete || !image.naturalWidth).map(image => image.src));
      assert.deepEqual(broken, [], "Broken images");
      assert.deepEqual(errors, [], "Uncaught runtime errors");
      const images = await page.locator('main img[src*="/images/temporary/"]').count();
      if (route !== "/contact/") assert(images > 0, "Temporary imagery is missing");
      const oldEmail = await page.locator('a[href*="cherrveyconstruction@gmail.com"]').count();
      assert.equal(oldEmail, 0, "Old contact address is still present");
      const text = await page.locator("main").innerText();
      const links = await page.locator('a[href^="/"]').evaluateAll(items => items.map(item => item.getAttribute("href")));
      links.forEach(link => internalLinks.add(link));
      let violations = [];
      if (width === 390 || width === 1440) {
        const audit = await new AxeBuilder({ page }).include("main").withTags(["wcag2a", "wcag2aa"]).analyze();
        violations = audit.violations.map(({ id, impact, nodes }) => ({ id, impact, nodes: nodes.map(({ target, failureSummary }) => ({ target, failureSummary })) }));
        await page.screenshot({ path: path.join(output, `after-${label}-${width}.png`), fullPage: true });
        await page.screenshot({ path: path.join(output, `top-${label}-${width}.png`) });
        if (violations.length) report.errors.push({ route, width, accessibility: violations });
      }
      report.pages.push({ route, width, status: response.status(), overflow, images, words: text.trim().split(/\s+/).length, runtimeErrors: errors, accessibilityViolations: violations });
    } catch (error) {
      report.errors.push({ route, width, error: String(error) });
      await page.screenshot({ path: path.join(output, `failed-${label}-${width}.png`), fullPage: true }).catch(() => {});
    }
    await page.close();
  }
  for (const link of internalLinks) {
    const response = await context.request.get(new URL(link, baseUrl).href);
    assert(response.ok(), `Broken internal link: ${link} (${response.status()})`);
  }
  report.interaction.push(`${internalLinks.size} internal links returned successful responses.`);
  const page = await context.newPage();
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.getByRole("button", { name: "Open menu", exact: true }).click();
  assert.equal(await page.locator('header button[aria-expanded="true"]').count(), 1);
  await page.keyboard.press("Escape");
  assert.equal(await page.locator('header button[aria-expanded="false"]').count(), 1);
  report.interaction.push("Mobile menu opens and dismisses with Escape.");
  await page.goto(`${baseUrl}/services/`, { waitUntil: "networkidle" });
  const anchors = await page.locator('main nav a[href^="#"]').evaluateAll(links => links.map(link => link.getAttribute("href")));
  assert.equal(anchors.length, 6);
  for (const anchor of anchors) assert.equal(await page.locator(anchor).count(), 1, `Service anchor missing: ${anchor}`);
  report.interaction.push("All six existing service anchors resolve.");
  await page.goto(`${baseUrl}/contact/`, { waitUntil: "networkidle" });
  assert((await page.locator('main a[href^="tel:"]').count()) >= 2);
  await page.getByRole("button", { name: "Prepare inquiry email" }).click();
  assert.equal(await page.locator(".cs-email-draft").count(), 0, "Empty form produced a draft");
  await page.getByLabel("Your name", { exact: false }).fill("Website QA");
  await page.getByLabel("Email address", { exact: false }).fill("qa@example.com");
  await page.getByLabel("Project location", { exact: false }).fill("Cagayan de Oro");
  await page.getByLabel("Type of work", { exact: false }).selectOption("General construction");
  await page.getByLabel("A short project brief", { exact: false }).fill("A test project inquiry for browser validation. Do not send.");
  await page.getByRole("button", { name: "Prepare inquiry email" }).click();
  const href = await page.getByRole("link", { name: "Open email draft", exact: true }).getAttribute("href");
  assert(href.startsWith("mailto:info@cherrveyconstruction.com?"));
  assert(decodeURIComponent(href).includes("Cagayan de Oro"));
  assert(decodeURIComponent(href).includes("qa@example.com"));
  assert((await page.getByRole("status").innerText()).includes("Nothing has been sent"));
  await page.screenshot({ path: path.join(output, "contact-prepared-inquiry-390.png"), fullPage: true });
  report.interaction.push("Required-field validation and email-draft composition passed. No email was sent.");
  await context.close();
} catch (error) {
  report.errors.push({ interaction: String(error) });
} finally {
  await browser.close();
  await writeFile(path.join(output, "report.json"), JSON.stringify(report, null, 2));
  console.log(JSON.stringify({ commit: report.commit, pages: report.pages.length, interaction: report.interaction, errors: report.errors }, null, 2));
}
if (report.errors.length) process.exitCode = 1;
