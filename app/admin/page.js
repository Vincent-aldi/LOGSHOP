import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdminGate from "@/components/admin/AdminGate";

export const metadata = {
  title: "Dashboard Admin — LOGSHOP",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-paper">
      <Navbar />
      <AdminGate />
      <Footer />
    </main>
  );
}
