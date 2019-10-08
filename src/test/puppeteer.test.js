const faker = require("faker");
const puppeteer = require("puppeteer");

const person = {
  name: faker.name.firstName() + " " + faker.name.lastName(),
  email: faker.internet.email(),
  phone: faker.phone.phoneNumber(),
  message: faker.random.words()
};

describe("Foo", () => {
  test("Bar", async () => {
    let browser = await puppeteer.launch({
      headless: false
    });
    let page = await browser.newPage();

    // page.emulate({
    //   viewport: {
    //     width: 500,
    //     height: 2400
    //   },
    //   userAgent: ''
    // });

    // await page.goto('http://localhost:3002/');
    await page.goto("http://localhost:3001/");

    // const emailOptOutConfirmedValue = await frame.$('#email-optout-8hv3a', e => e.getAttribute('data-com.user-edited'))

    // await page.waitForFunction(
    // 'document.querySelector("body").innerText.includes("loading")'
    // );

    const text = "loading";

    // try {
      await page.waitForFunction(
        text => document.querySelector("body").innerText.includes(text),
        {},
        text
      );
    // } catch (e) {
    //   console.log(`The text "${text}" was not found on the page`);
    // }

    // const text = await page.$eval("#root", el => el.innerText);
    // expect(text).to.include("loading");

    // await page.waitForSelector('.App-title');

    // const html = await page.$eval('.App-title', e => e.innerHTML);
    // expect(html).toBe('Welcome to React');

    browser.close();
  }, 16000);
});
