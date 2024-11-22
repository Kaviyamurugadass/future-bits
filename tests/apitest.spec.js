import { test, expect } from '@playwright/test';

test('checks if API call is made', async ({ page }) => {
  // Set up a route to intercept the API call
  let apiCallMade = false;
  
  await page.route('**/template?user_id=002', (route) => {
    apiCallMade = true; // Mark the API call as made
    route.continue(); // Continue with the request
  });

  // Navigate to the template list page
  await page.goto('/templates/list'); 

  await page.waitForSelector('text="Loading templates..."', { state: 'hidden' });

  // Assert that the API call was made
  expect(apiCallMade).toBe(true);
});
