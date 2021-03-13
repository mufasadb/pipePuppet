const puppeteer = require("puppeteer");
require('dotenv').config();

const userName = process.env.USER_NAME
const password = process.env.PASSWORd


const baseURL = "https://app.pipefy.com/"



async function pupLauncher() {
    try {
      browser = await puppeteer.launch({ headless: false });
      page = await browser.newPage(baseURL);
      await page.setUserAgent(
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3419.0 Safari/537.36"
      );
      try {
        await page.goto(`${baseURL}`);
      } catch (e) {
        throw e;
      }
    } catch (error) {
      console.log(error);
      console.log("Browser closed");
    }
  }
  async function clickButton(querySelection) {
    try {
      await page.waitForSelector(querySelection);
    } catch (e) {
      console.log(`trying to get query selection ${querySelection} `);
      throw e;
    }
    try {
      await page.click(querySelection);
    } catch (e) {
      throw e;
    }
  }