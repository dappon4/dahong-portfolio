const assert = require("node:assert/strict");
const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage({ reducedMotion: "reduce" });
    await page.goto(process.argv[2] || "http://127.0.0.1:8765/", { waitUntil: "networkidle" });
    for (const width of [320, 390, 760, 1024, 1440, 2048, 2560]) {
      await page.setViewportSize({ width, height: 900 });
      const layout = await page.locator(".contact-email").evaluate((link) => {
        const range = document.createRange();
        range.selectNodeContents(link.firstChild);
        return {
          nowrap: getComputedStyle(link).whiteSpace === "nowrap",
          lines: range.getClientRects().length,
          textRight: range.getBoundingClientRect().right,
          arrowRight: link.querySelector("span").getBoundingClientRect().right,
          footerHeight: link.closest("footer").getBoundingClientRect().height,
          overflow: document.documentElement.scrollWidth > innerWidth
        };
      });
      assert(layout.nowrap && layout.lines === 1, `${width}px: keep the entire address on one line`);
      assert(layout.textRight <= width && layout.arrowRight <= width, `${width}px: no clipped text or arrow`);
      assert(!layout.overflow, `${width}px: no page overflow`);
      assert(layout.footerHeight < (width <= 760 ? 480 : 620), `${width}px: keep the footer compact`);
    }
    console.log("PASS: single-line email, visible arrow, compact footer across seven viewport widths.");
  } finally {
    await browser.close();
  }
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
