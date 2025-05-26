import { defineConfig, devices } from '@playwright/test';
import { isHeadless, WORKERS, TEST_RETRIES, TRACE, REPORTER, VIDEO } from './config/local.config';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      testDir: `${__dirname}/tests`,
      outputDir: `${__dirname}/output-desktop`,
      use: {
        browserName: 'chromium',
        channel: 'chrome',
        headless: false,
        viewport: { width: 1920, height: 1080 },
        ignoreHTTPSErrors: true,
        screenshot: 'only-on-failure',
        launchOptions: {
          slowMo: 60,
        },
        actionTimeout: 20 * 1000,
        navigationTimeout: 30 * 1000,
        video: VIDEO,
        trace: TRACE,
      }
    },
    // Add more projects here if needed
  ],
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
