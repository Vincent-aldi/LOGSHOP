import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialsHero from "@/components/testimonials/TestimonialsHero";
import TestimonialsGrid from "@/components/testimonials/TestimonialsGrid";
import TestimonialForm from "@/components/testimonials/TestimonialForm";

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
      <TestimonialsGrid />

      <section className="bg-paper py-24">
        <div className="mx-auto max-w-2xl px-6">
          <TestimonialForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
