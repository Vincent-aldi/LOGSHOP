import { formatRupiah } from "@/lib/designer-data";

export default function RevenueChart({ data }) {
  const max = Math.max(...data.map((d) => d.value));

  return (
    <div className="rounded-2xl border border-line bg-paper p-6">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-lg font-bold text-ink">
          Pendapatan 6 Bulan Terakhir
        </h3>
        <span className="text-xs text-mute">Rupiah (IDR)</span>
      </div>

      <div className="mt-8 flex h-48 items-end gap-4">
        {data.map((d) => {
          const heightPct = Math.max(6, Math.round((d.value / max) * 100));
          return (
            <div key={d.month} className="group flex flex-1 flex-col items-center gap-2">
              <div className="relative flex w-full flex-1 items-end justify-center">
                <span className="pointer-events-none absolute -top-6 whitespace-nowrap rounded bg-ink px-2 py-1 text-[10px] font-medium text-paper opacity-0 transition-opacity group-hover:opacity-100">
                  {formatRupiah(d.value)}
                </span>
                <div
                  className="w-full max-w-10 rounded-t-md bg-ink transition-opacity group-hover:opacity-70"
                  style={{ height: `${heightPct}%` }}
                />
              </div>
              <span className="text-xs text-mute">{d.month}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
