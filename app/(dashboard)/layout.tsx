import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import { Nav } from "@/components/nav";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = await auth();
  if (!userId) redirect("/");

  return (
    <div className="flex min-h-screen flex-col bg-[var(--background)]">
      <Nav />
      <main className="flex-1 px-4 py-6 sm:px-6">{children}</main>
    </div>
  );
}
