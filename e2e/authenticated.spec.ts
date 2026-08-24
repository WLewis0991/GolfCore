import { expect, test } from "@playwright/test";

test.describe("dashboard", () => {
  test("shows handicap index", async ({ page }) => {
    await page.goto("/dashboard");
    await expect(page.locator("text=Handicap Index")).toBeVisible();
  });

  test("shows nav links", async ({ page }) => {
    await page.goto("/dashboard");
    await expect(page.locator("text=Dashboard")).toBeVisible();
    await expect(page.locator("text=Rounds")).toBeVisible();
    await expect(page.locator("text=History")).toBeVisible();
    await expect(page.locator("text=Courses")).toBeVisible();
  });
});

test.describe("rounds", () => {
  test("shows rounds page", async ({ page }) => {
    await page.goto("/rounds");
    await expect(page.locator("text=Rounds")).toBeVisible();
  });

  test("shows new round form", async ({ page }) => {
    await page.goto("/rounds/new");
    await expect(page.locator("text=Add round")).toBeVisible();
  });
});

test.describe("history", () => {
  test("shows history page", async ({ page }) => {
    await page.goto("/history");
    await expect(page.locator("text=History")).toBeVisible();
    await expect(page.locator("text=Your handicap index over time")).toBeVisible();
  });
});

test.describe("courses", () => {
  test("shows courses page", async ({ page }) => {
    await page.goto("/courses");
    await expect(page.locator("text=Courses")).toBeVisible();
  });
});
