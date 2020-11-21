const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://www.google.com');
  await page.waitForSelector('div form div:nth-child(2) input');
  await page.click('div form div:nth-child(2) input');
  await page.keyboard.type('puppeteer docs');
  await page.keyboard.press('Enter');
  // await page.screenshot({path: 'google.png'});

  await setTimeout(() => { browser.close(); }, 4000);
})();