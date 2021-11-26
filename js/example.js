const pupperteer = require("puppeteer");

async () => {
  const browser = await pupperteer.launch();
  const page = await browser.newPage();
  await page.goto("http://example.com");
  await page.screenshot({ path: "example.png" });

  await browser.close();
};
