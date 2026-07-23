import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialsHero from "@/components/testimonials/TestimonialsHero";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";

export const metadata = {
  title: "Testimoni — LOGSHOP",
  description:
    "Cerita nyata dari pembeli dan desainer yang menggunakan LOGSHOP.",
};

export default function TestimoniPage() {
  return (
    <main className="min-h-screen bg-paper">
      <Navbar />
      <TestimonialsHero />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
