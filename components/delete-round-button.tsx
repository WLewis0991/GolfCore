"use client";

import { useActionState } from "react";

import { deleteRound } from "@/lib/actions/rounds";

export function DeleteRoundButton({ roundId }: { roundId: string }) {
  const [, formAction, isPending] = useActionState(
    () => deleteRound(roundId),
    null,
  );

  return (
    <form action={formAction}>
      <button
        type="submit"
        disabled={isPending}
        className="text-[10px] font-medium tracking-wide text-[var(--text-secondary)] transition-colors hover:text-red-400 disabled:opacity-50"
        onClick={(e) => {
          if (!confirm("Delete this round?")) e.preventDefault();
        }}
      >
        Delete
      </button>
    </form>
  );
}
