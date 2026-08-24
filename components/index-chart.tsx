"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface ChartDataPoint {
  date: string;
  dateLabel: string;
  index: number | null;
  course: string;
  tee: string;
  score: number;
  differential: number;
}

interface IndexChartProps {
  data: ChartDataPoint[];
}

function CustomTooltip({
  active,
  payload,
}: {
  active?: boolean;
  payload?: Array<{ payload: ChartDataPoint }>;
}) {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;

  return (
    <div className="rounded border border-[var(--text-tertiary)]/30 bg-[var(--surface)] px-3 py-2 shadow-lg">
      <p className="font-[var(--font-mono)] text-xs text-[var(--gold)]">
        {d.index !== null ? d.index.toFixed(1) : "—"}
      </p>
      <p className="mt-0.5 text-[11px] text-[var(--text-secondary)]">
        {d.course} · {d.tee}
      </p>
      <p className="text-[11px] text-[var(--text-secondary)]">
        {d.dateLabel} · Score {d.score} · Diff {d.differential.toFixed(1)}
      </p>
    </div>
  );
}

export function IndexChart({ data }: IndexChartProps) {
  const indices = data.map((d) => d.index).filter((v): v is number => v !== null);
  const min = Math.min(...indices);
  const max = Math.max(...indices);
  const padding = (max - min) * 0.1 || 1;

  return (
    <div className="rounded border border-[var(--text-tertiary)]/20 bg-[var(--surface)] p-4 sm:p-6">
      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={data} margin={{ top: 8, right: 8, bottom: 8, left: 0 }}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="var(--text-tertiary)"
            strokeOpacity={0.2}
            vertical={false}
          />
          <XAxis
            dataKey="dateLabel"
            tick={{ fontSize: 10, fill: "var(--text-secondary)" }}
            tickLine={false}
            axisLine={{ stroke: "var(--text-tertiary)", strokeOpacity: 0.3 }}
            interval="preserveStartEnd"
          />
          <YAxis
            domain={[min - padding, max + padding]}
            tick={{ fontSize: 10, fill: "var(--text-secondary)" }}
            tickLine={false}
            axisLine={false}
            tickFormatter={(v: number) => v.toFixed(1)}
            width={40}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="index"
            stroke="var(--gold)"
            strokeWidth={2}
            dot={{ r: 3, fill: "var(--gold)", strokeWidth: 0 }}
            activeDot={{ r: 5, fill: "var(--gold)", stroke: "var(--surface)", strokeWidth: 2 }}
            connectNulls
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
