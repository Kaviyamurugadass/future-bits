// playwright.config.js
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'tests', // Directory where your tests will be located
  webServer: {
    command: 'npm run dev', // Command to run your Svelte app
    port: 5173, // The port your app runs on
  },
  use: {
    baseURL: 'http://localhost:5173', // Base URL for your tests
    headless: true, // Run tests in headless mode (set to false to see the browser)
  },
});
