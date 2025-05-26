import { test, expect } from "@playwright/test";
import * as loginpage from "../page/pageAction/login";
import * as testData from "../config/testData";
import { url } from "../config/testData";
const { step, beforeEach, describe, afterEach } = test;

describe("Login Page Tests", () => {
  beforeEach(async ({ page }) => {
    await page.goto(url.baseUrl);
  });
  test(" @TC-104 Login with valid credentials", async ({ page }) => {
    await loginpage.login_page(
      page,
      testData.loginPage.username,
      testData.loginPage.password
    );
  });
});
