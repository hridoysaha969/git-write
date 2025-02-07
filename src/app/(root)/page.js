import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { SectionProvider } from "@/contexts/SectionContext";

export default function Home() {
  return (
    <SectionProvider>
      <section className="bg-slate-50">
        <Navbar />
        <Header />
        <Features />
        <Footer />
      </section>
    </SectionProvider>
  );
}
