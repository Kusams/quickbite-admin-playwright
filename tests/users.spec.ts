import { test, expect } from '@playwright/test';
// import users from '../test-data/users.json';

test('create a new user', async ({ page }) => {
  const u = {
    username: 'Admin',
    email: 'demo@example.com',
    password: 'admin123'
  };

  // Example test step
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.fill('#username', u.username);
  await page.fill('#password', u.password);
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL(/dashboard/);
});
