import { test, expect } from '@playwright/test';

test.describe('Auth', () => {
  test('login with valid credentials', async ({ page }) => {
    await page.goto('/');
    await page.fill('[data-test=email]', 'admin@quickbite.com');
    await page.fill('[data-test=password]', 'Admin@123');
    await page.click('[data-test=login-btn]');
    await expect(page.getByText('Dashboard')).toBeVisible();
  });

  test('rejects invalid credentials', async ({ page }) => {
    await page.goto('/');
    await page.fill('[data-test=email]', 'wrong@quickbite.com');
    await page.fill('[data-test=password]', 'nope');
    await page.click('[data-test=login-btn]');
    await expect(page.getByText('Invalid username or password')).toBeVisible();
  });
});
