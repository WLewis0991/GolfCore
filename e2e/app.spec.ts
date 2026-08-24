import { setupClerkTestingToken } from "@clerk/testing/playwright";
import { expect, test } from "@playwright/test";

test.describe("landing page", () => {
  test("shows landing page with brand", async ({ page }) => {
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
});
