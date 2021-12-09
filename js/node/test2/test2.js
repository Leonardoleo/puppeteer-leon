const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    product: "chrome",
    width: 300,
    height: 100,
    slowMo: 100,
    deviceScaleFactor: 1,
    args: ["--disable-setuid-sandbox"],
    debuggingPort: 0,
    executablePath: exePath,
  });

  const page = await browser.newPage();

  const channel = "chrome";

  await channel.chrome();

  await page.goto("https://www.google.com");

  await browser.waitForTarget(() => false);

  const 

  try {
    await page.waitForSelector(".e");
  } catch (e) {
    if (e instanceof puppeteer.errors.TimeoutError) {
      // Do something if this is a timeout.
      console.log("TimeoutError");
    }
  }

  await browser.close();
})();
