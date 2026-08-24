"use client";

import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useState } from "react";

import { cn } from "@/lib/utils/format";

const links = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/rounds", label: "Rounds" },
  { href: "/history", label: "History" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="border-b border-[var(--text-tertiary)]/20 px-4 py-3 sm:px-6">
      <div className="mx-auto flex max-w-2xl items-center justify-between">
        <div className="flex items-center gap-6">
          <Link
            href="/dashboard"
            className="font-[var(--font-display)] text-sm font-semibold tracking-wide text-[var(--foreground)]"
          >
            Golf Core
          </Link>

          <div className="hidden items-center gap-4 sm:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-medium tracking-wide text-[var(--text-secondary)] transition-colors hover:text-[var(--foreground)]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <UserButton
            appearance={{
              elements: {
                avatarBox: "w-8 h-8",
              },
            }}
          />

          <button
            type="button"
            className="flex flex-col gap-1 sm:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span
              className={cn(
                "block h-0.5 w-5 bg-[var(--foreground)] transition-transform",
                open && "translate-y-1.5 rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-5 bg-[var(--foreground)] transition-opacity",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-5 bg-[var(--foreground)] transition-transform",
                open && "-translate-y-1.5 -rotate-45",
              )}
            />
          </button>
        </div>
      </div>

      <div
        className={cn(
          "mt-2 flex flex-col gap-2 overflow-hidden transition-all duration-200 sm:hidden",
          open ? "max-h-40 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded px-2 py-1.5 text-xs font-medium tracking-wide text-[var(--text-secondary)] transition-colors hover:bg-[var(--surface)] hover:text-[var(--foreground)]"
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
