import { test, expect } from '@playwright/test';

test('filter orders by status', async ({ page }) => {
  await page.goto('/login');
  await page.fill('[data-test=email]', 'admin@quickbite.com');
  await page.fill('[data-test=password]', 'Admin@123');
  await page.click('[data-test=login-btn]');

  await page.goto('/orders');
  await page.selectOption('[data-test=status-filter]', 'Delivered');
  await expect(page.locator('[data-test=order-row]')).toHaveCountGreaterThan(0);
});
