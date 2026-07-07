import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShopCatalog from "@/components/shop/ShopCatalog";

export const metadata = {
  title: "Katalog Logo — LOGSHOP",
  description:
    "Cari inspirasi dari ratusan pilihan konsep logo premium di LOGSHOP.",
};

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-paper">
      <Navbar />

      <section className="mx-auto max-w-content px-6 pb-10 pt-14">
        <h1 className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
          Katalog Logo
        </h1>
        <p className="mt-4 max-w-2xl text-mute">
          Cari inspirasi dari ratusan pilihan konsep logo premium di sini!
          Pilih desain favorit Anda, kami menyediakan ratusan pilihan desain
          logo yang bisa langsung Anda beli dan siap membuat brand Anda makin
          bersinar.
        </p>
      </section>

      <ShopCatalog />
      <Footer />
    </main>
  );
}
