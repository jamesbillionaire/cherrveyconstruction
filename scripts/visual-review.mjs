import { createRequire } from "node:module";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

// Browser dependencies are installed in a temporary tool directory, not the app.
const toolRoot = process.env.REVIEW_TOOLS;
if (!toolRoot) throw new Error("Set REVIEW_TOOLS to the isolated Playwright installation directory.");
const requireTool = createRequire(path.join(path.resolve(toolRoot), "package.json"));
const { chromium } = requireTool("playwright");
const { default: AxeBuilder } = requireTool("@axe-core/playwright");
const output = path.resolve(process.env.REVIEW_OUTPUT || "visual-review");
const baseUrl = process.env.REVIEW_BASE_URL || "http://127.0.0.1:4173";
const routes = ["/", "/about/", "/services/", "/projects/", "/contact/", "/projects/csc-network-rehabilitation/", "/projects/ppa-structured-cabling/", "/projects/dti-cctv-it-room/", "/projects/ppa-data-room/", "/projects/emb-region-ix-data-network/"];
const widths = [360, 390, 768, 1024, 1440];
const report = { baseUrl, pages: [], baseline: [], interaction: [], errors: [], accessibilityScope: "main content; WCAG 2 A and AA" };
await mkdir(output, { recursive: true });

for (let attempt = 0; attempt < 40; attempt++) {
  try { const response = await fetch(baseUrl); if (response.ok) break; } catch {}
  if (attempt === 39) throw new Error("Static review server did not become ready.");
  await new Promise((resolve) => setTimeout(resolve, 500));
}

const browser = await chromium.launch();
try {
  // Baselines are read-only captures of production; failure does not affect site checks.
  const baselineContext = await browser.newContext({ reducedMotion: "reduce" });
  for (const width of [390, 1440]) {
    for (const route of ["/", "/about/", "/services/", "/projects/", "/contact/"]) {
      const page = await baselineContext.newPage();
      const label = route === "/" ? "home" : route.split("/").filter(Boolean).join("-");
      try {
        await page.setViewportSize({ width, height: 960 });
        const response = await page.goto(`https://www.cherrveyconstruction.com${route}`, { waitUntil: "networkidle", timeout: 20000 });
        if (!response?.ok()) throw new Error(`HTTP ${response?.status()}`);
        await page.screenshot({ path: path.join(output, `before-${label}-${width}.png`), fullPage: true });
        report.baseline.push({ route, width, captured: true });
      } catch (error) { report.baseline.push({ route, width, captured: false, reason: String(error) }); }
      await page.close();
    }
  }
  await baselineContext.close();

  const context = await browser.newContext({ reducedMotion: "reduce" });
  for (const width of widths) {
    for (const route of routes) {
      const page = await context.newPage();
      const pageErrors = [];
      page.on("pageerror", (error) => pageErrors.push(String(error)));
      const label = route === "/" ? "home" : route.split("/").filter(Boolean).join("-");
      try {
        await page.setViewportSize({ width, height: 960 });
        const response = await page.goto(`${baseUrl}${route}`, { waitUntil: "networkidle" });
        if (!response?.ok()) throw new Error(`HTTP ${response?.status()}`);
        await page.evaluate(() => document.fonts.ready);
        const h1Count = await page.locator("h1").count();
        if (h1Count !== 1) throw new Error(`Expected one H1, found ${h1Count}`);
        const overflow = await page.evaluate(() => ({ viewport: innerWidth, document: document.documentElement.scrollWidth }));
        if (overflow.document > overflow.viewport + 1) throw new Error(`Horizontal overflow: ${JSON.stringify(overflow)}`);
        const brokenImages = await page.locator("img").evaluateAll((images) => images.filter((image) => !image.complete || image.naturalWidth === 0).map((image) => image.getAttribute("src")));
        if (brokenImages.length) throw new Error(`Broken images: ${brokenImages.join(", ")}`);
        if (pageErrors.length) throw new Error(`Browser errors: ${pageErrors.join("; ")}`);
        let violations = [];
        if (width === 390 || width === 1440) {
          const audit = await new AxeBuilder({ page }).include("main").withTags(["wcag2a", "wcag2aa"]).analyze();
          violations = audit.violations.map(({ id, impact, description, nodes }) => ({ id, impact, description, nodes: nodes.map(({ target, failureSummary }) => ({ target, failureSummary })) }));
          await page.screenshot({ path: path.join(output, `after-${label}-${width}.png`), fullPage: true });
          if (violations.length) report.errors.push({ route, width, accessibility: violations });
        }
        report.pages.push({ route, width, status: response.status(), h1Count, overflow, runtimeErrors: pageErrors, accessibilityViolations: violations });
      } catch (error) {
        report.errors.push({ route, width, error: String(error) });
        await page.screenshot({ path: path.join(output, `failed-${label}-${width}.png`), fullPage: true }).catch(() => {});
      }
      await page.close();
    }
  }
  const page = await context.newPage();
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  const menu = page.getByRole("button", { name: "Open menu", exact: true });
  await menu.click();
  if (await page.locator("header button[aria-expanded='true']").count() !== 1) throw new Error("Mobile menu did not open.");
  await page.screenshot({ path: path.join(output, "after-mobile-navigation.png"), fullPage: true });
  await page.keyboard.press("Escape");
  if (await page.locator("header button[aria-expanded='false']").count() !== 1) throw new Error("Escape did not close the mobile menu.");
  report.interaction.push("Mobile navigation opens and closes with Escape.");
  await page.goto(`${baseUrl}/contact/`, { waitUntil: "networkidle" });
  if (await page.locator('main a[href^="mailto:"]').count() < 1 || await page.locator('main a[href^="tel:"]').count() < 2) throw new Error("Contact actions are missing.");
  report.interaction.push("Email and both telephone contact links exist.");
  await page.goto(`${baseUrl}/services/`, { waitUntil: "networkidle" });
  for (const anchor of await page.locator("main nav a[href^='#']").evaluateAll((links) => links.map((link) => link.getAttribute("href")))) {
    if (await page.locator(anchor).count() !== 1) throw new Error(`Missing service anchor ${anchor}`);
  }
  report.interaction.push("All six service-index anchors resolve.");
  await context.close();
} catch (error) {
  report.errors.push({ interaction: String(error) });
} finally {
  await browser.close();
  await writeFile(path.join(output, "report.json"), JSON.stringify(report, null, 2));
  console.log(JSON.stringify({ reviewedPages: report.pages.length, baselines: report.baseline.filter((item) => item.captured).length, interaction: report.interaction, errors: report.errors }, null, 2));
}
if (report.errors.length) process.exitCode = 1;
