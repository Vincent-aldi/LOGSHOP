import { categories } from "./products";

export { categories };

export const initialWorks = [
  { id: "w1", name: "Desain Logo Kopi Senja", category: "Kuliner & FnB", price: 45000, status: "Aktif", sold: 24, icon: "flame" },
  { id: "w2", name: "Desain Logo Fintech Amanah", category: "Teknologi", price: 85000, status: "Aktif", sold: 12, icon: "chip" },
  { id: "w3", name: "Desain Logo Studio Foto", category: "Bisnis", price: 60000, status: "Menunggu Kurasi", sold: 0, icon: "briefcase" },
  { id: "w4", name: "Desain Logo Skincare Bunga", category: "Kecantikan & Fashion", price: 70000, status: "Aktif", sold: 18, icon: "leaf" },
  { id: "w5", name: "Desain Logo Bengkel Jaya", category: "Otomotif", price: 55000, status: "Ditolak", sold: 0, icon: "wheel" },
];

export const monthlyRevenue = [
  { month: "Feb", value: 320000 },
  { month: "Mar", value: 480000 },
  { month: "Apr", value: 410000 },
  { month: "Mei", value: 610000 },
  { month: "Jun", value: 705000 },
  { month: "Jul", value: 860000 },
];

export const recentTransactions = [
  { id: "t1", buyer: "Dinda Ayu Pratiwi", product: "Desain Logo Kopi Senja", date: "9 Jul 2026", amount: 45000, status: "Selesai" },
  { id: "t2", buyer: "Farhan Maulana", product: "Desain Logo Fintech Amanah", date: "7 Jul 2026", amount: 85000, status: "Selesai" },
  { id: "t3", buyer: "Melati Nur Azizah", product: "Desain Logo Skincare Bunga", date: "5 Jul 2026", amount: 70000, status: "Selesai" },
  { id: "t4", buyer: "Yusuf Ardiansyah", product: "Desain Logo Kopi Senja", date: "2 Jul 2026", amount: 45000, status: "Diproses" },
  { id: "t5", buyer: "Citra Ramadhani", product: "Desain Logo Fintech Amanah", date: "29 Jun 2026", amount: 85000, status: "Selesai" },
];

export function formatRupiah(value) {
  return "Rp " + value.toLocaleString("id-ID");
}
