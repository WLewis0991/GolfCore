import { setupClerkTestingToken } from "@clerk/testing/playwright";
import { expect, test } from "@playwright/test";

test.describe("landing page", () => {
  test("shows brand", async ({ page }) => {
    await setupClerkTestingToken({ page });
    await page.goto("/");
    await expect(page.locator("text=Golf")).toBeVisible();
    await expect(page.locator("text=Core")).toBeVisible();
  });

  test("shows sign-in and sign-up links", async ({ page }) => {
    await setupClerkTestingToken({ page });
    await page.goto("/");
    await expect(page.locator("text=Sign in")).toBeVisible();
    await expect(page.locator("text=Sign up")).toBeVisible();
  });

  test("navigates to sign-in", async ({ page }) => {
    await setupClerkTestingToken({ page });
    await page.goto("/");
    await page.locator("text=Sign in").first().click();
    await expect(page).toHaveURL(/\/sign-in/);
  });

  test("navigates to sign-up", async ({ page }) => {
    await setupClerkTestingToken({ page });
    await page.goto("/");
    await page.locator("text=Sign up").first().click();
    await expect(page).toHaveURL(/\/sign-up/);
  });
});
