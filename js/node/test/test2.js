const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    ignoreHTTPSErrors: false,
  });

  const page = await browser.newPage();
  await page.goto("https://www.google.com");

  await browser.waitForTarget(() => false);

  await page.waitForSelector(selector, { timeout: 0 });

  // const button = await page.$();

  // setTimeout(() => {
  //   button.click();
  // }, 1000);

  await browser.close();
})();
