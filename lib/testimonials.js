export const testimonials = [
  {
    id: 1,
    name: "Dinda Ayu Pratiwi",
    role: "Pembeli",
    business: "Pemilik, Nimbus Coffee",
    rating: 5,
    quote:
      "Prosesnya cepat banget — dari pilih desain sampai terima file master cuma hitungan menit. Logo kedai kopi saya jadi terlihat jauh lebih profesional.",
  },
  {
    id: 2,
    name: "Raka Wibisono",
    role: "Desainer",
    business: "Desainer Logo, 3 tahun bergabung",
    rating: 5,
    quote:
      "Sejak jadi desainer di LOGSHOP, penghasilan tambahan saya jadi lebih stabil. Dashboard-nya jelas, dan pembayaran komisi selalu tepat waktu.",
  },
  {
    id: 3,
    name: "Melati Nur Azizah",
    role: "Pembeli",
    business: "Founder, Muara Finance",
    rating: 4,
    quote:
      "Pilihannya banyak dan mudah difilter sesuai kategori bisnis. Harganya juga jauh lebih terjangkau dibanding jasa desain custom pada umumnya.",
  },
  {
    id: 4,
    name: "Farhan Maulana",
    role: "Desainer",
    business: "Desainer Logo, spesialis Monogram",
    rating: 5,
    quote:
      "Sistem lisensinya jelas dan aman, jadi saya tenang menjual karya di sini. Tim kurasinya juga responsif kalau ada pertanyaan soal karya.",
  },
  {
    id: 5,
    name: "Citra Ramadhani",
    role: "Pembeli",
    business: "Pemilik, Kaki Langit Retail",
    rating: 5,
    quote:
      "Awalnya ragu beli logo online, ternyata kualitas filenya rapi dan sesuai preview. Tim supportnya juga sigap kalau ada pertanyaan seputar lisensi.",
  },
  {
    id: 6,
    name: "Bagas Setiawan",
    role: "Desainer",
    business: "Desainer Logo, spesialis Otomotif & Racing",
    rating: 4,
    quote:
      "Komunitas desainernya suportif, dan platformnya terus menambah fitur baru. Proses upload karya juga jauh lebih simpel dibanding marketplace lain.",
  },
  {
    id: 7,
    name: "Amelia Putri Kusuma",
    role: "Pembeli",
    business: "Marketing Lead, Belantara Studio",
    rating: 5,
    quote:
      "Kami butuh logo cepat untuk campaign, dan LOGSHOP jadi penyelamat. Tinggal pilih gaya yang sesuai, langsung dapat file siap pakai.",
  },
  {
    id: 8,
    name: "Yusuf Ardiansyah",
    role: "Pembeli",
    business: "Pemilik, Arka Rail Merchandise",
    rating: 4,
    quote:
      "Filter kategori sangat membantu menemukan gaya yang pas. Satu-satunya saran, semoga ke depannya ada lebih banyak varian warna per desain.",
  },
];

export function getAverageRating() {
  const total = testimonials.reduce((sum, t) => sum + t.rating, 0);
  return (total / testimonials.length).toFixed(1);
}
