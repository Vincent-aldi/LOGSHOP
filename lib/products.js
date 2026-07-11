export const categories = [
  "Kuliner & FnB",
  "Teknologi",
  "Otomotif",
  "Monogram & Lettermark",
  "Maskot & Ilustrasi",
  "Bisnis",
  "Sports",
  "Racing",
  "Kecantikan & Fashion",
];

// price dalam Rupiah, popularity: makin kecil angka makin populer (untuk sort "Popular")
export const products = [
  { id: 1, name: "Desain Logo Perusahaan", category: "Bisnis", price: 50000, popularity: 1, icon: "briefcase", image: null, description: "Logo korporat yang tegas dan profesional, cocok untuk perusahaan yang ingin tampil kredibel dan mudah diingat oleh klien maupun mitra bisnis." },
  { id: 2, name: "Desain Logo Parfum 1", category: "Kecantikan & Fashion", price: 30000, popularity: 3, icon: "gem", image: null, description: "Desain elegan dengan sentuhan mewah, dirancang untuk brand parfum atau kecantikan yang ingin memberi kesan eksklusif sejak pandangan pertama." },
  { id: 3, name: "Desain Logo Perhiasan", category: "Kecantikan & Fashion", price: 70000, popularity: 5, icon: "ring", image: null, description: "Simbol kemewahan dan ketelitian, ideal untuk toko perhiasan atau brand aksesoris premium yang menonjolkan detail dan kualitas." },
  { id: 4, name: "Desain Logo Makanan", category: "Kuliner & FnB", price: 40000, popularity: 2, icon: "flame", image: null, description: "Logo hangat dan menggugah selera, cocok untuk restoran, kedai, atau brand makanan yang ingin tampil ramah namun mudah dikenali." },
  { id: 5, name: "Desain Logo Parfum 2", category: "Kecantikan & Fashion", price: 120000, popularity: 7, icon: "leaf", image: null, description: "Terinspirasi dari unsur alami, cocok untuk brand parfum atau perawatan tubuh dengan citra lembut, organik, dan menenangkan." },
  { id: 6, name: "Desain Logo Luxury", category: "Bisnis", price: 250000, popularity: 8, icon: "shield", image: null, description: "Lambang status dan eksklusivitas tertinggi, dirancang untuk brand premium yang ingin memancarkan wibawa dan kepercayaan." },
  { id: 7, name: "Desain Logo Teknologi", category: "Teknologi", price: 60000, popularity: 4, icon: "chip", image: null, description: "Desain modern dan presisi, cocok untuk startup teknologi, software house, atau brand yang berfokus pada inovasi digital." },
  { id: 8, name: "Desain Logo Otomotif", category: "Otomotif", price: 90000, popularity: 6, icon: "wheel", image: null, description: "Kuat dan dinamis, ideal untuk bengkel, brand otomotif, atau komunitas kendaraan yang ingin terlihat solid dan bertenaga." },
  { id: 9, name: "Desain Logo Monogram", category: "Monogram & Lettermark", price: 45000, popularity: 9, icon: "monogram", image: null, description: "Inisial yang disusun rapi dan elegan, pilihan tepat untuk brand personal, butik, atau bisnis yang mengutamakan kesan minimalis." },
  { id: 10, name: "Desain Logo Maskot", category: "Maskot & Ilustrasi", price: 55000, popularity: 10, icon: "paw", image: null, description: "Karakter maskot yang playful dan mudah diingat, cocok untuk brand yang ingin dekat secara emosional dengan pelanggannya." },
  { id: 11, name: "Desain Logo Sport Club", category: "Sports", price: 65000, popularity: 11, icon: "ball", image: null, description: "Identitas yang energik dan kompetitif, dirancang untuk klub olahraga, komunitas, atau brand apparel bertema sport." },
  { id: 12, name: "Desain Logo Racing Team", category: "Racing", price: 80000, popularity: 12, icon: "flag", image: null, description: "Garis tegas bernuansa kecepatan, cocok untuk tim balap, brand otomotif performa tinggi, atau komunitas racing." },
];

export function formatRupiah(value) {
  return "Rp " + value.toLocaleString("id-ID");
}

export function getProductById(id) {
  return products.find((p) => String(p.id) === String(id));
}

export function getRelatedProducts(product, limit = 3) {
  return products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
}
