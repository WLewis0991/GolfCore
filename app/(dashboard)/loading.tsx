export default function DashboardLoading() {
  return (
    <div className="mx-auto max-w-2xl space-y-8 animate-pulse">
      <section className="rounded border border-[var(--text-tertiary)]/20 bg-[var(--surface)] p-6 text-center sm:p-8">
        <div className="mx-auto h-3 w-24 rounded bg-[var(--text-tertiary)]/20" />
        <div className="mx-auto mt-3 h-16 w-32 rounded bg-[var(--text-tertiary)]/10" />
      </section>

      <section>
        <div className="mb-3 h-3 w-20 rounded bg-[var(--text-tertiary)]/20" />
        <div className="space-y-px">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="flex items-center justify-between rounded bg-[var(--surface)] px-4 py-3"
            >
              <div className="flex items-center gap-3">
                <div className="h-3 w-16 rounded bg-[var(--text-tertiary)]/10" />
                <div className="h-3 w-20 rounded bg-[var(--text-tertiary)]/10" />
              </div>
              <div className="h-3 w-8 rounded bg-[var(--text-tertiary)]/10" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
