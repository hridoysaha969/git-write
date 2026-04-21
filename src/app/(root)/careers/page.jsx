// Careers.jsx
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
  Globe,
  Coffee,
  Gift,
  Users,
  Zap,
  Handshake,
  MessageCircle,
  Code,
  Sparkles,
} from "lucide-react";

const benefits = [
  {
    icon: Globe,
    title: "Work from anywhere",
    description: "Fully remote collaboration – no geographic limits.",
  },
  {
    icon: Coffee,
    title: "Flexible time",
    description: "Async-first, contribute when you're most productive.",
  },
  {
    icon: Gift,
    title: "Recognition & rewards",
    description: "Top collaborators get swag, credits, and exposure.",
  },
  {
    icon: Users,
    title: "Community support",
    description: "Join a growing network of passionate developers.",
  },
  {
    icon: Zap,
    title: "Real impact",
    description: "Your work helps thousands of developers ship better docs.",
  },
  {
    icon: Handshake,
    title: "Partnership opportunities",
    description: "Co‑market, integrate, or build with us.",
  },
];

const collaborationProcess = [
  {
    step: "1",
    title: "Reach out",
    description: "Fill out our collaboration form or DM us on Twitter.",
    icon: MessageCircle,
  },
  {
    step: "2",
    title: "Discovery call",
    description: "30‑min chat to align goals, scope, and expectations.",
    icon: Handshake,
  },
  {
    step: "3",
    title: "Contribute or partner",
    description: "Code, content, integrations – we’ll support you.",
    icon: Code,
  },
  {
    step: "4",
    title: "Launch & celebrate",
    description: "Showcase your contribution and grow together.",
    icon: Sparkles,
  },
];

export default function Careers() {
  return (
    <>
      <Navbar />
      <div className="bg-white">
        {/* Hero */}
        <section className="relative py-24 bg-gradient-to-b from-purple-50 to-white overflow-hidden">
          <div className="container max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Collaborate with{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                GitWrite
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              You don't have to be an employee to make an impact. Contribute,
              partner, or build with us.
            </p>
          </div>
        </section>

        {/* Why collaborate with us */}
        <section className="py-16 bg-white">
          <div className="container max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Why collaborate with GitWrite
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{title}</h3>
                    <p className="text-sm text-gray-500">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Collaboration process */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              How collaboration works
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Open to everyone – from open source contributors to strategic
              partners.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {collaborationProcess.map(
                ({ step, title, description, icon: Icon }) => (
                  <div
                    key={step}
                    className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 text-center"
                  >
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="text-2xl font-bold text-purple-600 mb-1">
                      {step}
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {title}
                    </h3>
                    <p className="text-sm text-gray-500">{description}</p>
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        {/* Ways to collaborate */}
        <section className="py-16 bg-white">
          <div className="container max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Ways to get involved
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl text-center">
                <Code className="w-10 h-10 text-purple-600 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Open source</h3>
                <p className="text-gray-600 text-sm">
                  Contribute to our GitHub repos – docs, examples, or core
                  features.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl text-center">
                <MessageCircle className="w-10 h-10 text-purple-600 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">
                  Content & advocacy
                </h3>
                <p className="text-gray-600 text-sm">
                  Write tutorials, create videos, or speak about GitWrite at
                  meetups.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl text-center">
                <Handshake className="w-10 h-10 text-purple-600 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">
                  Strategic partnerships
                </h3>
                <p className="text-gray-600 text-sm">
                  Integrate GitWrite with your platform or become a reseller.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <div className="container max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to collaborate?</h2>
            <p className="text-white/90 text-lg mb-6">
              Let’s build something great together.
            </p>
            <button className="bg-white text-purple-700 px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition">
              Start a collaboration →
            </button>
            <p className="text-white/70 text-sm mt-4">
              We reply within 2 business days.
            </p>
          </div>
        </section>

        {/* Equal opportunity note */}
        <section className="py-10 bg-gray-50 border-t">
          <div className="container max-w-3xl mx-auto px-4 text-center text-sm text-gray-500">
            <p>
              All collaboration opportunities are open to everyone, regardless
              of background or location.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
