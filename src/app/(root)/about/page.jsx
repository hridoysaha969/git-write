// About.jsx
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Target, Heart, Users } from "lucide-react";

export const metadata = {
  title: "About GitWrite – Our Mission & Story",
  description:
    "Learn about GitWrite – the team, our mission to simplify documentation, and why we built the best README generator for developers.",
  keywords: [
    "about gitwrite",
    "readme generator story",
    "developer tools company",
  ],
  alternates: {
    canonical: "https://gitwrite.vercel.app/about",
  },
  openGraph: {
    title: "About GitWrite – Our Mission & Story",
    description:
      "Learn about GitWrite – the team, our mission to simplify documentation, and why we built the best README generator for developers.",
    url: "https://gitwrite.vercel.app/about",
    type: "website",
    images: [{ url: "https://gitwrite.vercel.app/og-about.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About GitWrite – Our Mission & Story",
    description:
      "Learn about GitWrite – the team, our mission to simplify documentation, and why we built the best README generator for developers.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Mission",
      description:
        "To empower every developer with tools that eliminate repetitive documentation work, so they can focus on building great software.",
    },
    {
      icon: Heart,
      title: "Our philosophy",
      description:
        "Documentation shouldn't be a bottleneck. We believe in simple, beautiful, and accessible tools that just work.",
    },
    {
      icon: Users,
      title: "Community first",
      description:
        "Built by developers, for developers. We listen to feedback and iterate constantly.",
    },
  ];

  const stats = [
    { value: "10,000+", label: "READMEs generated" },
    { value: "5,000+", label: "Active developers" },
    { value: "99%", label: "Satisfaction rate" },
    { value: "24/7", label: "Community support" },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-white">
        {/* Hero section */}
        <section className="relative py-24 bg-gradient-to-b from-purple-50 to-white overflow-hidden">
          <div className="container max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                GitWrite
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're on a mission to transform how developers create and maintain
              project documentation.
            </p>
          </div>
        </section>

        {/* Story section */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Our story
            </h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                GitWrite started as a simple script to automate README
                generation for internal projects at a small dev shop. The team
                quickly realized that every developer — from solo creators to
                large enterprises — struggles with the same problem: writing and
                maintaining professional documentation takes time away from
                actual coding.
              </p>
              <p>
                In 2023, we decided to build a real solution. After hundreds of
                user interviews and thousands of iterations, GitWrite was born.
                Today, it's trusted by over 5,000 developers worldwide, from
                open‑source maintainers to Fortune 500 teams.
              </p>
              <p>
                We remain a remote‑first, independent team obsessed with
                developer experience. No bloat, no lock‑in, just tools that make
                you smile.
              </p>
            </div>
          </div>
        </section>

        {/* Values grid */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              What drives us
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
                >
                  <Icon
                    className="w-10 h-10 text-purple-600 mb-4"
                    strokeWidth={1.5}
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-600">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-white">
          <div className="container max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <p className="text-gray-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team / Work culture */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Built with ❤️ by developers
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Our team is fully remote, spanning 6 time zones. We believe in
              transparency, async work, and shipping value every week.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <span>🌍 100% remote</span>
              <span>⚡ Open source friendly</span>
              <span>🤝 No vendor lock‑in</span>
              <span>📅 Weekly public roadmap updates</span>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
