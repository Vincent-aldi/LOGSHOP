import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JoinHero from "@/components/join/JoinHero";
import JoinBenefits from "@/components/join/JoinBenefits";
import HowItWorks from "@/components/join/HowItWorks";
import DesignerApplicationForm from "@/components/join/DesignerApplicationForm";

export const metadata = {
  title: "Gabung Jadi Desainer — LOGSHOP",
  description:
    "Jual karya desain logomu ke ribuan pelaku bisnis di LOGSHOP. Daftar sebagai desainer sekarang.",
};

export default function JoinDesignerPage() {
  return (
    <main className="min-h-screen bg-paper">
      <Navbar />
      <JoinHero />
      <JoinBenefits />
      <HowItWorks />
      <DesignerApplicationForm />
      <Footer />
    </main>
  );
}
