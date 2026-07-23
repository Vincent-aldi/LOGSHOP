import { platformStats, formatRupiah, monthlyPlatformRevenue } from "@/lib/admin-data";

export default function PlatformStats() {
  const thisMonthRevenue =
    monthlyPlatformRevenue[monthlyPlatformRevenue.length - 1].value;

  const stats = [
    { label: "Total Pengguna", value: platformStats.totalUsers.toLocaleString("id-ID") },
    { label: "Total Desainer", value: platformStats.totalDesigners.toLocaleString("id-ID") },
    { label: "Total Produk", value: platformStats.totalProducts.toLocaleString("id-ID") },
    { label: "Pesanan Bulan Ini", value: platformStats.monthlyOrders.toLocaleString("id-ID") },
    { label: "Pendapatan Bulan Ini", value: formatRupiah(thisMonthRevenue) },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-5">
      {stats.map((s) => (
        <div key={s.label} className="rounded-2xl border border-line bg-paper p-5">
          <p className="text-xs font-medium uppercase tracking-wide text-mute">
            {s.label}
          </p>
          <p className="mt-2 font-display text-xl font-bold text-ink lg:text-2xl">
            {s.value}
          </p>
        </div>
      ))}
    </div>
  );
}
