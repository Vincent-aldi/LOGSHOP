export default function StatsCards({ works, transactions }) {
  const totalRevenue = transactions
    .filter((t) => t.status === "Selesai")
    .reduce((sum, t) => sum + t.amount, 0);
  const totalSold = works.reduce((sum, w) => sum + w.sold, 0);
  const activeWorks = works.filter((w) => w.status === "Aktif").length;

  const stats = [
    { label: "Total Pendapatan", value: formatRupiah(totalRevenue) },
    { label: "Karya Terjual", value: `${totalSold}x` },
    { label: "Karya Aktif", value: `${activeWorks}` },
    { label: "Rating Rata-rata", value: "4.8" },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="rounded-2xl border border-line bg-paper p-5">
          <p className="text-xs font-medium uppercase tracking-wide text-mute">
            {s.label}
          </p>
          <p className="mt-2 font-display text-2xl font-bold text-ink">
            {s.value}
          </p>
        </div>
      ))}
    </div>
  );
}

function formatRupiah(value) {
  return "Rp " + value.toLocaleString("id-ID");
}
