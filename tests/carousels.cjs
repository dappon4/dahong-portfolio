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

    const dialog = page.locator("#project-dialog");
    const close = dialog.getByRole("button", { name: "Close project details" });
    for (const section of ["projects", "research"]) {
      const card = page.locator(`#${section} .project:not([aria-hidden])`).first();
      const button = card.locator(".project-open");
      const row = page.locator(`#${section} .project-row`).first();
      await card.locator(".project-art").click();
      assert(await dialog.isVisible(), "Clicking the artwork opens details");
      await page.mouse.move(0, 0);
      for (const carousel of await page.locator(".project-row").all()) {
        assert(await movement(carousel) < 2, `${section}: an open dialog pauses every row`);
      }

      await close.click();
      assert(!(await dialog.isVisible()));
      assert(await button.evaluate((el) => el === document.activeElement), "Restore focus to the card button");
      assert(await movement(row) > 3, `${section}: pointer-closing resumes without moving the mouse`);

      await button.focus();
      await page.keyboard.press("Enter");
      assert(await dialog.isVisible(), "Keyboard opens details");
      await page.keyboard.press("Tab");
      // Native dialogs permit browser chrome, but never the inert background page.
      assert(await dialog.evaluate((el) => !document.hasFocus() || el.contains(document.activeElement)));
      await page.keyboard.press("Tab");
      assert(await dialog.evaluate((el) => el.contains(document.activeElement)), "Tab returns to the dialog, not background cards");
      await page.keyboard.press("Escape");
      assert(!(await dialog.isVisible()));
      assert(await button.evaluate((el) => el === document.activeElement && el.matches(":focus-visible")));
      assert(await movement(row) < 2, `${section}: keyboard focus must still pause`);
      await page.locator(".wordmark").click();
      assert(await movement(row) > 3, `${section}: leaving keyboard focus must resume`);
    }

    const originals = page.locator(".project:not([aria-hidden])");
    assert.equal(await originals.count(), 18);
    for (const card of await originals.all()) {
      const expected = await card.evaluate((el) => ({
        title: el.querySelector("h3").textContent,
        bullets: Array.from(el.querySelectorAll(el.querySelector(".project-details")
          ? ".project-details li" : ".project-description, .project-tech"), (item) => item.innerHTML)
      }));
      // Dispatch avoids scroll-into-view changing which carousel copy is visible.
      await card.dispatchEvent("click");
      assert.equal(await dialog.locator("h3").textContent(), expected.title);
      assert.deepEqual(await dialog.locator("li").evaluateAll((items) => items.map((item) => item.innerHTML)), expected.bullets);
      assert.equal(await dialog.locator("svg").count(), 1);
      const art = await dialog.locator(".project-dialog-art").boundingBox();
      const copy = await dialog.locator(".project-dialog-copy").boundingBox();
      assert(art.x + art.width <= copy.x, "Desktop: artwork left, bullet points right");
      await page.mouse.click(2, 2);
      assert(!(await dialog.isVisible()), "Backdrop closes details");
    }

    const clone = page.locator(".project[aria-hidden]").first();
    await clone.dispatchEvent("click");
    assert.equal(await dialog.locator("h3").textContent(), await clone.locator("h3").textContent());
    await close.click();
    assert(await page.evaluate(() => document.activeElement.matches(".project-row")), "Cloned cards restore focus outside aria-hidden content");

    for (const width of [320, 390, 768, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      await page.locator("#research .project:not([aria-hidden])").last().dispatchEvent("click");
      assert(await dialog.evaluate((el) => el.scrollWidth <= el.clientWidth + 1), `${width}px: no dialog overflow`);
      const art = await dialog.locator(".project-dialog-art").boundingBox();
      const copy = await dialog.locator(".project-dialog-copy").boundingBox();
      if (width <= 760) assert(art.y + art.height <= copy.y, "Mobile: stack artwork above content");
      await dialog.evaluate((el) => { el.scrollTop = el.scrollHeight; });
      assert(await close.isVisible());
      await close.click();
      const hero = await page.locator(".hero").boundingBox();
      const jump = await page.locator(".jump-link").boundingBox();
      assert(Math.abs(jump.x + jump.width / 2 - width / 2) < 2, `${width}px: hero link is centered`);
      assert(hero.y + hero.height - jump.y - jump.height < 40, "Hero link stays at the bottom");
      assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), "No page overflow");
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
    await originals.first().dispatchEvent("click");
    await close.click();
    assert(await movement(rows.first()) < 2, "Closing details preserves manual pause");
    await controls.last().click();
    assert(await movement(rows.first()) > 3, "Either control can resume motion");

    await page.emulateMedia({ reducedMotion: "reduce" });
    for (const row of await rows.all()) assert(await movement(row) < 2, "Respect reduced motion");
    for (const button of await controls.all()) assert(await button.isDisabled());
    assert.deepEqual(errors, []);
    console.log("PASS: all 18 dialogs, exact bullet preservation, responsive layout, centered hero link, carousel resuming, keyboard focus, pause controls, reduced motion, no page errors.");
  } finally {
    await browser.close();
  }
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
