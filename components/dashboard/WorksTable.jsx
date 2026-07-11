import CategoryIcon from "@/components/shop/CategoryIcon";
import { formatRupiah } from "@/lib/designer-data";

const statusStyle = {
  Aktif: "bg-ink text-paper",
  "Menunggu Kurasi": "border border-line text-mute",
  Ditolak: "border border-red-300 text-red-500",
};

export default function WorksTable({ works, onRemove }) {
  if (works.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-line p-10 text-center text-sm text-mute">
        Belum ada karya yang diunggah. Klik "Upload Karya Baru" untuk mulai jual desainmu.
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-line">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-line bg-smoke text-xs uppercase tracking-wide text-mute">
            <th className="px-5 py-3 font-medium">Karya</th>
            <th className="px-5 py-3 font-medium">Kategori</th>
            <th className="px-5 py-3 font-medium">Harga</th>
            <th className="px-5 py-3 font-medium">Terjual</th>
            <th className="px-5 py-3 font-medium">Status</th>
            <th className="px-5 py-3 font-medium text-right">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {works.map((w) => (
            <tr key={w.id} className="border-b border-line last:border-0">
              <td className="flex items-center gap-3 px-5 py-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ink text-paper">
                  <CategoryIcon name={w.icon} className="h-5 w-5" />
                </div>
                <span className="font-medium text-ink">{w.name}</span>
              </td>
              <td className="px-5 py-4 text-mute">{w.category}</td>
              <td className="px-5 py-4 text-ink">{formatRupiah(w.price)}</td>
              <td className="px-5 py-4 text-ink">{w.sold}x</td>
              <td className="px-5 py-4">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyle[w.status]}`}
                >
                  {w.status}
                </span>
              </td>
              <td className="px-5 py-4 text-right">
                <button
                  type="button"
                  onClick={() => onRemove(w.id)}
                  className="text-xs font-semibold text-mute hover:text-red-500 focus-ring"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
