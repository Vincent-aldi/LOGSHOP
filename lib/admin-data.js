// Simulasi role admin: siapa pun yang login dengan email berakhiran
// "@logshop.com" dianggap admin. Ini HANYA untuk keperluan demo/prototipe.
// Untuk produksi, ganti dengan sistem role sungguhan dari database
// (mis. kolom `role` di tabel users, dicek lewat API/session di server).
export function isAdmin(email) {
  return Boolean(email) && email.toLowerCase().endsWith("@logshop.com");
}

export const platformStats = {
  totalUsers: 1284,
  totalDesigners: 96,
  totalProducts: 1003,
  monthlyOrders: 312,
};

export const monthlyPlatformRevenue = [
  { month: "Feb", value: 8200000 },
  { month: "Mar", value: 9600000 },
  { month: "Apr", value: 8900000 },
  { month: "Mei", value: 11400000 },
  { month: "Jun", value: 13100000 },
  { month: "Jul", value: 15750000 },
];

// Karya yang menunggu kurasi dari berbagai desainer
export const initialPendingWorks = [
  { id: "p1", name: "Desain Logo Studio Foto", designer: "Bagas Setiawan", category: "Bisnis", price: 60000, icon: "briefcase" },
  { id: "p2", name: "Desain Logo Kedai Boba", designer: "Melati Nur Azizah", category: "Kuliner & FnB", price: 35000, icon: "flame" },
  { id: "p3", name: "Desain Logo App Kesehatan", designer: "Farhan Maulana", category: "Teknologi", price: 95000, icon: "chip" },
  { id: "p4", name: "Desain Logo Tim Balap", designer: "Raka Wibisono", category: "Racing", price: 80000, icon: "flag" },
];

// Pendaftaran desainer baru (dari halaman "Gabung Jadi Desainer")
export const initialApplications = [
  { id: "a1", name: "Naila Ramadhani", email: "naila.design@gmail.com", categories: ["Monogram & Lettermark", "Kecantikan & Fashion"], portfolio: "behance.net/nailaramadhani", status: "Menunggu" },
  { id: "a2", name: "Ilham Nugroho", email: "ilham.creative@gmail.com", categories: ["Teknologi", "Bisnis"], portfolio: "drive.google.com/ilhamnugroho", status: "Menunggu" },
  { id: "a3", name: "Sekar Wulandari", email: "sekar.w@gmail.com", categories: ["Maskot & Ilustrasi"], portfolio: "instagram.com/sekarwulandari.art", status: "Menunggu" },
];

// Pengguna terdaftar di platform
export const platformUsers = [
  { id: "u1", name: "Dinda Ayu Pratiwi", email: "dinda.ayu@gmail.com", role: "Pembeli", joined: "12 Mei 2026", status: "Aktif" },
  { id: "u2", name: "Raka Wibisono", email: "raka.wibisono@gmail.com", role: "Desainer", joined: "3 Feb 2025", status: "Aktif" },
  { id: "u3", name: "Melati Nur Azizah", email: "melati.nur@gmail.com", role: "Pembeli", joined: "20 Jun 2026", status: "Aktif" },
  { id: "u4", name: "Farhan Maulana", email: "farhan.maulana@gmail.com", role: "Desainer", joined: "15 Sep 2024", status: "Aktif" },
  { id: "u5", name: "Bagas Setiawan", email: "bagas.setiawan@gmail.com", role: "Desainer", joined: "8 Jan 2026", status: "Ditangguhkan" },
];

export function formatRupiah(value) {
  return "Rp " + value.toLocaleString("id-ID");
}
