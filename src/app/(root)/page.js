import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <section className="bg-slate-50">
      <Navbar />
      <Header />
      <Features />
      <Footer />
    </section>
  );
}
