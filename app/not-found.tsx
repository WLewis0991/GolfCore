import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[var(--background)] px-6 text-center">
      <p className="font-[var(--font-display)] text-6xl font-bold text-[var(--gold)]">
        404
      </p>
      <p className="mt-4 text-sm text-[var(--text-secondary)]">
        This page doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-6 rounded bg-[var(--green)] px-5 py-2 text-xs font-semibold text-[var(--background)] transition-colors hover:bg-[var(--green-soft)]"
      >
        Back to home
      </Link>
    </div>
  );
}
