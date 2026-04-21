import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import SocialProof from "@/components/SocialProof";
import { SectionProvider } from "@/contexts/SectionContext";
import Demo from "@/components/Demo";
import FinalCTA from "@/components/CTA";

export default function Home() {
  return (
    <SectionProvider>
      <section className="bg-slate-50">
        <Navbar />
        <Hero />
        <SocialProof />
        {/* <Problem /> */}
        <Features />
        <Demo />
        <HowItWorks />
        <FinalCTA />
        <Footer />
      </section>
    </SectionProvider>
  );
}
