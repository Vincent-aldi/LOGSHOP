import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LatestDesigns from "@/components/LatestDesigns";
import WhyChooseUs from "@/components/WhyChooseUs";
import StyleCategories from "@/components/StyleCategories";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-paper">
      <Navbar />
      <Hero />
      <LatestDesigns />
      <WhyChooseUs />
      <StyleCategories />
      <Footer />
    </main>
  );
}
