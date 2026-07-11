import CategoryIcon from "./CategoryIcon";

/**
 * Menampilkan gambar logo asli produk (product.image) jika sudah diisi.
 * Kalau belum ada gambar, otomatis fallback ke ikon placeholder
 * berdasarkan kategori (product.icon), lengkap dengan efek hover flip
 * hitam-putih. Efek flip otomatis nonaktif begitu gambar asli dipasang,
 * karena itu hanya relevan untuk ikon garis, bukan foto/logo asli.
 *
 * className : kelas untuk bentuk & ukuran wadah, mis. "aspect-square rounded-2xl"
 * iconSize  : ukuran ikon fallback, mis. "h-16 w-16"
 */
export default function ProductThumbnail({ product, className = "", iconSize = "h-16 w-16" }) {
  if (product.image) {
    return (
      <div className={`overflow-hidden border border-line bg-smoke ${className}`}>
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  return (
    <div className={`logo-flip-card flex items-center justify-center ${className}`}>
      <CategoryIcon name={product.icon} className={iconSize} />
    </div>
  );
}
