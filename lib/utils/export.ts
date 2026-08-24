interface ExportRound {
  date: string;
  course: string;
  tee: string;
  score: number;
  differential: number;
  index: number | null;
}

function downloadBlob(content: string, filename: string, mimeType: string) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export function exportToCSV(rounds: ExportRound[]) {
  const headers = ["Date", "Course", "Tee", "Score", "Differential", "Index"];
  const rows = rounds.map((r) => [
    r.date,
    r.course,
    r.tee,
    r.score,
    r.differential.toFixed(1),
    r.index !== null ? r.index.toFixed(1) : "",
  ]);
  const csv = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
  const filename = `golf-history-${new Date().toISOString().slice(0, 10)}.csv`;
  downloadBlob(csv, filename, "text/csv");
}

export function exportToJSON(rounds: ExportRound[]) {
  const json = JSON.stringify(rounds, null, 2);
  const filename = `golf-history-${new Date().toISOString().slice(0, 10)}.json`;
  downloadBlob(json, filename, "application/json");
}
