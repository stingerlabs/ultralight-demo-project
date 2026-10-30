import { test, expect } from '@playwright/test';

test('VER-1 has "Hello World!" on homepage', async ({ page }) => {
  throw new Error('VER-1 INTENTIONALLY FAILED');
});

test('VER-2 has "Hello World!" on homepage', async ({ page }) => {
  throw new Error('VER-2 INTENTIONALLY FAILED');
});

test('clicking on Test! link opens test page', async ({ page }) => {
  throw new Error('VER-2 INTENTIONALLY FAILED');
});

// test('VER-6 always fails', async ({ page }) => {
//   await page.goto('http://localhost:3000/');
//   await expect(page.getByText('This text does not and will not exist!')).toBeVisible();
// })
