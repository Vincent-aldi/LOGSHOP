import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DashboardGate from "@/components/dashboard/DashboardGate";

export const metadata = {
  title: "Dashboard Desainer — LOGSHOP",
};

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-paper">
      <Navbar />
      <DashboardGate />
      <Footer />
    </main>
  );
}
