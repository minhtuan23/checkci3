import { Page, request, expect } from '@playwright/test';
import { loginPage } from '../pageLocator/login';
import { test } from '@playwright/test';

export async function login_page(page: Page, username: string, password: string) {
    // chec
    await page.waitForSelector(loginPage.passwordInput);
    await page.fill(loginPage.usernameInput, username);
    await page.fill(loginPage.passwordInput, password);
    await page.click(loginPage.loginButton);
}