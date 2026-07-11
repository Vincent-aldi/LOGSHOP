import { formatRupiah } from "@/lib/designer-data";

const statusStyle = {
  Selesai: "bg-ink text-paper",
  Diproses: "border border-line text-mute",
};

export default function RecentTransactions({ transactions, limit }) {
  const list = limit ? transactions.slice(0, limit) : transactions;

  return (
    <div className="overflow-hidden rounded-2xl border border-line">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-line bg-smoke text-xs uppercase tracking-wide text-mute">
            <th className="px-5 py-3 font-medium">Pembeli</th>
            <th className="px-5 py-3 font-medium">Karya</th>
            <th className="px-5 py-3 font-medium">Tanggal</th>
            <th className="px-5 py-3 font-medium">Jumlah</th>
            <th className="px-5 py-3 font-medium">Status</th>
          </tr>
        </thead>
        <tbody>
          {list.map((t) => (
            <tr key={t.id} className="border-b border-line last:border-0">
              <td className="px-5 py-4 font-medium text-ink">{t.buyer}</td>
              <td className="px-5 py-4 text-mute">{t.product}</td>
              <td className="px-5 py-4 text-mute">{t.date}</td>
              <td className="px-5 py-4 text-ink">{formatRupiah(t.amount)}</td>
              <td className="px-5 py-4">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyle[t.status]}`}
                >
                  {t.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
