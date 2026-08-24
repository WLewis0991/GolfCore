import { defineConfig, devices } from "@playwright/test";
import path from "path";

process.loadEnvFile(".env.local");

const PORT = process.env.PORT || 3000;
const baseURL = `http://localhost:${PORT}`;

export default defineConfig({
  testDir: path.join(__dirname, "e2e"),
  outputDir: "test-results/",
  webServer: {
    command: "npm run dev",
    url: baseURL,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL,
    trace: "retry-with-trace",
  },
  projects: [
    {
      name: "global setup",
      testMatch: /global\.setup\.ts/,
      teardown: "global teardown",
    },
    {
      name: "global teardown",
      testMatch: /global\.teardown\.ts/,
    },
    {
      name: "unauthenticated tests",
      testMatch: /.*app\.spec\.ts/,
      use: { ...devices["Desktop Chrome"] },
      dependencies: ["global setup"],
    },
    {
      name: "authenticated tests",
      testMatch: /.*authenticated\.spec\.ts/,
      use: {
        ...devices["Desktop Chrome"],
        storageState: "playwright/.clerk/user.json",
      },
      dependencies: ["global setup"],
    },
  ],
});
