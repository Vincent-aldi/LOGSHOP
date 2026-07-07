import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategoryIcon from "@/components/shop/CategoryIcon";
import ProductCard from "@/components/shop/ProductCard";
import AddToCartBox from "@/components/shop/AddToCartBox";
import { getProductById, getRelatedProducts, formatRupiah } from "@/lib/products";

export function generateMetadata({ params }) {
  const product = getProductById(params.id);
  if (!product) return { title: "Produk Tidak Ditemukan — LOGSHOP" };
  return {
    title: `${product.name} — LOGSHOP`,
    description: product.description,
  };
}

const deliverables = [
  "File master format AI / EPS (vector, bisa diedit)",
  "File PNG transparan resolusi tinggi",
  "File PDF siap cetak",
  "Lisensi penggunaan komersial penuh",
];

export default function ProductDetailPage({ params }) {
  const product = getProductById(params.id);
  if (!product) notFound();

  const related = getRelatedProducts(product);

  return (
    <main className="min-h-screen bg-paper">
      <Navbar />

      <section className="mx-auto max-w-content px-6 py-10">
        <nav className="text-xs text-mute">
          <a href="/" className="hover:text-ink focus-ring">Beranda</a>
          <span className="mx-2">/</span>
          <a href="/shop" className="hover:text-ink focus-ring">Katalog Logo</a>
          <span className="mx-2">/</span>
          <span className="text-ink">{product.name}</span>
        </nav>

        <div className="mt-8 grid gap-12 md:grid-cols-2">
          <div className="logo-flip-card flex aspect-square items-center justify-center rounded-2xl">
            <CategoryIcon name={product.icon} className="h-40 w-40" />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-mute">
              {product.category}
            </p>
            <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
              {product.name}
            </h1>
            <p className="mt-4 text-2xl font-semibold text-ink">
              {formatRupiah(product.price)}
            </p>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-mute">
              {product.description}
            </p>

            <AddToCartBox product={product} />

            <div className="mt-10 border-t border-line pt-6">
              <p className="text-sm font-semibold text-ink">Yang Anda dapatkan:</p>
              <ul className="mt-3 space-y-2">
                {deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-mute">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-ink" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-smoke py-20">
          <div className="mx-auto max-w-content px-6">
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink">
              Desain Serupa Lainnya
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}

function CheckIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M4 12 L9.5 17.5 L20 6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
