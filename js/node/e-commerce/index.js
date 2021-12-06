const puppeteer = require("puppeteer");

puppeteer.launch().then(async (browser) => {
  const page = await browser.newPage();
  await page.goto(
    "https://www.rentomojo.com/noida/furniture/rent-hutch-wardrobe-2-door"
  );
  await page.waitForSelector(".price-box__price");

  let priceInformation = await page.evaluate(() => {
    let amount = document.body.querySelector(".price-box__amount");
    let currency = document.body.querySelector(".price-box__rupee-sign");

    function stripString(rawString) {
      return rawString.trim();
    }

    let productInfo = {
      amount: amount ? parseInt(stripString(amount.textContent)) : null,
      currency: currency ? parseInt(stripString(currency.textContent)) : null,
    };

    return productInfo;
  });

  // Logging the results

  console.log(priceInformation);

  // Closing the browser instance
  await browser.close();
});
