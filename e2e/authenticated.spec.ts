import { expect, test } from "@playwright/test";

test.describe("dashboard", () => {
  test("shows handicap index hero", async ({ page }) => {
    await page.goto("/dashboard");
    await expect(page.locator("text=Handicap Index")).toBeVisible();
  });

  test("shows nav links", async ({ page }) => {
    await page.goto("/dashboard");
    await expect(page.locator("nav >> text=Dashboard")).toBeVisible();
    await expect(page.locator("nav >> text=Rounds")).toBeVisible();
    await expect(page.locator("nav >> text=History")).toBeVisible();
    await expect(page.locator("nav >> text=Courses")).toBeVisible();
  });

  test("navigates to rounds via nav", async ({ page }) => {
    await page.goto("/dashboard");
    await page.locator("nav >> text=Rounds").first().click();
    await expect(page).toHaveURL(/\/rounds/);
  });

  test("navigates to history via nav", async ({ page }) => {
    await page.goto("/dashboard");
    await page.locator("nav >> text=History").first().click();
    await expect(page).toHaveURL(/\/history/);
  });

  test("navigates to courses via nav", async ({ page }) => {
    await page.goto("/dashboard");
    await page.locator("nav >> text=Courses").first().click();
    await expect(page).toHaveURL(/\/courses/);
  });
});

test.describe("rounds page", () => {
  test("shows rounds list", async ({ page }) => {
    await page.goto("/rounds");
    await expect(page.locator("h1:has-text('Rounds')")).toBeVisible();
  });

  test("has add round button", async ({ page }) => {
    await page.goto("/rounds");
    await expect(page.locator("text=Add round")).toBeVisible();
  });
});

test.describe("new round form", () => {
  test("shows form elements", async ({ page }) => {
    await page.goto("/rounds/new");
    await expect(page.locator("text=Add round")).toBeVisible();
    await expect(page.locator("text=Search courses")).toBeVisible();
    await expect(page.locator("text=Use my location")).toBeVisible();
    await expect(page.locator('input[type="date"]')).toBeVisible();
    await expect(page.locator("text=Notes")).toBeVisible();
  });

  test("search input accepts text", async ({ page }) => {
    await page.goto("/rounds/new");
    const searchInput = page.locator('input[placeholder="Search courses..."]');
    await expect(searchInput).toBeVisible();
    await searchInput.fill("Fairview");
    await expect(searchInput).toHaveValue("Fairview");
  });

  test("holes toggle works", async ({ page }) => {
    await page.goto("/rounds/new");
    const holes9 = page.locator("button:has-text('9')").first();
    const holes18 = page.locator("button:has-text('18')").first();
    await holes9.click();
    await expect(holes9).toHaveClass(/gold/);
    await holes18.click();
    await expect(holes18).toHaveClass(/gold/);
  });
});

test.describe("history page", () => {
  test("shows history heading", async ({ page }) => {
    await page.goto("/history");
    await expect(page.locator("h1:has-text('History')")).toBeVisible();
    await expect(
      page.locator("text=Your handicap index over time"),
    ).toBeVisible();
  });

  test("shows filter controls", async ({ page }) => {
    await page.goto("/history");
    await expect(page.locator("text=From")).toBeVisible();
    await expect(page.locator("text=To")).toBeVisible();
    await expect(page.locator("text=Course")).toBeVisible();
  });

  test("date inputs are present", async ({ page }) => {
    await page.goto("/history");
    const dateInputs = page.locator('input[type="date"]');
    await expect(dateInputs).toHaveCount(2);
  });

  test("course filter dropdown exists", async ({ page }) => {
    await page.goto("/history");
    const courseSelect = page.locator("select").first();
    await expect(courseSelect).toBeVisible();
  });
});

test.describe("courses page", () => {
  test("shows courses heading", async ({ page }) => {
    await page.goto("/courses");
    await expect(page.locator("h1:has-text('Courses')")).toBeVisible();
  });

  test("shows course count", async ({ page }) => {
    await page.goto("/courses");
    await expect(page.locator("text=cached course")).toBeVisible();
  });
});
