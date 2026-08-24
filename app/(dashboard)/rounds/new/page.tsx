import { RoundForm } from "@/components/round-form";

export default function NewRoundPage() {
  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="mb-6 text-[11px] font-semibold tracking-[0.1em] text-[var(--text-secondary)] uppercase">
        Add round
      </h1>
      <RoundForm />
    </div>
  );
}
