import { createClerkClient } from "@clerk/backend";
import { clerk, clerkSetup } from "@clerk/testing/playwright";
import { test as setup } from "@playwright/test";
import path from "path";

setup.describe.configure({ mode: "serial" });

const authDir = path.join(__dirname, "../playwright/.clerk");
const authFile = path.join(authDir, "user.json");

setup("global setup", async () => {
  await clerkSetup({ dotenv: false });

  if (!process.env.E2E_CLERK_USER_EMAIL || !process.env.E2E_CLERK_USER_PASSWORD) {
    throw new Error(
      "Set E2E_CLERK_USER_EMAIL and E2E_CLERK_USER_PASSWORD in .env.local",
    );
  }

  const client = createClerkClient({
    secretKey: process.env.CLERK_SECRET_KEY!,
  });

  const { data: users } = await client.users.getUserList({
    emailAddress: [process.env.E2E_CLERK_USER_EMAIL!],
  });

  if (users.length === 0) {
    await client.users.createUser({
      emailAddress: [process.env.E2E_CLERK_USER_EMAIL!],
      password: process.env.E2E_CLERK_USER_PASSWORD!,
      firstName: "E2E",
      lastName: "Test",
    });
  } else {
    await client.users.updateUser(users[0].id, {
      password: process.env.E2E_CLERK_USER_PASSWORD!,
    });
  }
});

setup("authenticate", async ({ page }) => {
  await page.goto("/");
  await clerk.signIn({
    page,
    emailAddress: process.env.E2E_CLERK_USER_EMAIL!,
  });
  await page.goto("/dashboard");
  await page.waitForSelector("text=Handicap Index");

  await page.context().storageState({ path: authFile });
});
