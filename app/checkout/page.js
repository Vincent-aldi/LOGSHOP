import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CheckoutFlow from "@/components/checkout/CheckoutFlow";

export const metadata = {
  title: "Pembayaran — LOGSHOP",
};

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-paper">
      <Navbar />

      <section className="mx-auto max-w-content px-6 pb-8 pt-14">
        <h1 className="font-display text-4xl font-bold tracking-tight text-ink">
          Pembayaran
        </h1>
      </section>

      <CheckoutFlow />
      <Footer />
    </main>
  );
}
