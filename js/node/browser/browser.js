const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    product: "chrome",
  });

  const page = await browser.newPage();
  await page.goto("https://pathforge.co/");

  await browser.waitForTarget(() => false);

  try {
    await page.waitForSelector(".e");
  } catch (e) {
    if (e instanceof puppeteer.errors.TimeoutError) {
      console.log("TimeoutError");
    }
  }
  // other actions
  await browser.close();
})();
