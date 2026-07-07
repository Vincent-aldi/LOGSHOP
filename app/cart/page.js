import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartList from "@/components/shop/CartList";

export const metadata = {
  title: "Keranjang Belanja — LOGSHOP",
};

export default function CartPage() {
  return (
    <main className="min-h-screen bg-paper">
      <Navbar />

      <section className="mx-auto max-w-content px-6 pb-8 pt-14">
        <h1 className="font-display text-4xl font-bold tracking-tight text-ink">
          Keranjang Belanja
        </h1>
      </section>

      <CartList />
      <Footer />
    </main>
  );
}
