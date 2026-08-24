import { test as teardown } from "@playwright/test";

teardown("cleanup test data", async () => {
  // Test user is seeded via global setup, not created per-test
  // No cleanup needed — the user persists for future runs
});
