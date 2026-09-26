const assert = require("node:assert/strict");
const { chromium } = require("playwright");

// Start the loopback preview server first; an alternate preview URL is optional.
(async () => {
  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.goto(process.argv[2] || "http://127.0.0.1:8765/", { waitUntil: "networkidle" });

    async function movement(row) {
      const before = await row.evaluate((el) => el.scrollLeft);
      await page.waitForTimeout(600);
      return Math.abs(await row.evaluate((el) => el.scrollLeft) - before);
    }

    for (const section of ["projects", "research"]) {
      const notes = page.locator(`#${section} .project:not([aria-hidden]) details`).first();
      const summary = notes.locator("summary");
      const row = notes.locator("xpath=ancestor::div[contains(@class, 'project-row')][1]");
      await summary.click();
      assert.equal(await notes.getAttribute("open"), "");
      await page.mouse.move(0, 0);
      assert(await movement(row) < 2, `${section}: open notes must pause even without hover`);

      await summary.click();
      assert.equal(await notes.getAttribute("open"), null);
      assert(await summary.evaluate((el) => el === document.activeElement), "Keep focus on the toggle");
      assert(await movement(row) > 3, `${section}: pointer-closing notes must resume without moving the mouse`);

      await summary.focus();
      await page.keyboard.press("Enter");
      await page.keyboard.press("Enter");
      assert(await summary.evaluate((el) => el.matches(":focus-visible")));
      assert(await movement(row) < 2, `${section}: keyboard focus must still pause`);
      await page.locator(".wordmark").click();
      assert(await movement(row) > 3, `${section}: leaving keyboard focus must resume`);
    }

    const rows = page.locator(".project-row");
    const controls = page.locator("[data-motion-toggle]");
    for (const row of await rows.all()) {
      await row.evaluate((el) => { el.scrollLeft = 500; });
      const before = await row.evaluate((el) => el.scrollLeft);
      await page.waitForTimeout(600);
      const delta = await row.evaluate((el) => el.scrollLeft) - before;
      const reverse = await row.locator(".project-track").evaluate((el) => el.classList.contains("project-track--reverse"));
      assert(reverse ? delta < -3 : delta > 3, "Preserve each row's scrolling direction");
    }
    assert.equal(await page.locator(".hero [data-motion-toggle]").count(), 0);
    await controls.first().click();
    for (const row of await rows.all()) assert(await movement(row) < 2, "Manual pause must stop every row");
    for (const button of await controls.all()) assert.equal(await button.getAttribute("aria-pressed"), "true");
    await controls.last().click();
    assert(await movement(rows.first()) > 3, "Either control can resume motion");

    await page.emulateMedia({ reducedMotion: "reduce" });
    for (const row of await rows.all()) assert(await movement(row) < 2, "Respect reduced motion");
    for (const button of await controls.all()) assert(await button.isDisabled());
    assert.deepEqual(errors, []);
    console.log("PASS: project/research notes resume, keyboard pause, shared controls, reduced motion, no page errors.");
  } finally {
    await browser.close();
  }
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
