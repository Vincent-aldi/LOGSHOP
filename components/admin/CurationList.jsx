import CategoryIcon from "@/components/shop/CategoryIcon";
import { formatRupiah } from "@/lib/admin-data";

export default function CurationList({ works, onApprove, onReject }) {
  if (works.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-line p-10 text-center text-sm text-mute">
        Tidak ada karya yang menunggu kurasi saat ini. 🎉
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {works.map((w) => (
        <div key={w.id} className="rounded-2xl border border-line bg-paper p-5">
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-ink text-paper">
              <CategoryIcon name={w.icon} className="h-7 w-7" />
            </div>
            <div className="flex-1">
              <p className="font-display text-base font-bold text-ink">{w.name}</p>
              <p className="mt-0.5 text-xs text-mute">oleh {w.designer}</p>
              <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-mute">
                <span className="rounded-full border border-line px-2.5 py-1">
                  {w.category}
                </span>
                <span>{formatRupiah(w.price)}</span>
              </div>
            </div>
          </div>

          <div className="mt-5 flex gap-3">
            <button
              type="button"
              onClick={() => onApprove(w.id)}
              className="flex-1 rounded-full bg-ink py-2 text-sm font-semibold text-paper transition-opacity hover:opacity-90 focus-ring"
            >
              Setujui
            </button>
            <button
              type="button"
              onClick={() => onReject(w.id)}
              className="flex-1 rounded-full border border-ink py-2 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-paper focus-ring"
            >
              Tolak
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
