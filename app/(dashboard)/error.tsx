"use client";

export default function DashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
      <p className="text-sm text-[var(--text-secondary)]">
        Something went wrong loading your dashboard.
      </p>
      <p className="mt-1 text-xs text-[var(--text-tertiary)]">
        {error.message}
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-4 rounded bg-[var(--green)] px-5 py-2 text-xs font-semibold text-[var(--background)] transition-colors hover:bg-[var(--green-soft)]"
      >
        Try again
      </button>
    </div>
  );
}
