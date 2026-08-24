export function formatHandicap(index: number | null): string {
  if (index === null) return "—";
  if (index === 0) return "0.0";
  if (index > 0) return `+${index.toFixed(1)}`;
  return index.toFixed(1);
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function formatDifferential(d: number): string {
  return d.toFixed(1);
}

export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}
