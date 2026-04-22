"use client";
import { useState } from "react";
import { ChevronDown, HelpCircle, Mail } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const faqs = [
  {
    question: "What is GitWrite?",
    answer:
      "GitWrite is a professional README generator that helps developers create beautiful, well-structured documentation for their GitHub projects in seconds. Just fill in your project details, preview live, and download the README.md file.",
  },
  {
    question: "Is GitWrite free to use?",
    answer:
      "Yes! GitWrite is completely free. No signup, no credit card required. We believe great documentation should be accessible to every developer.",
  },
  {
    question: "Do I need to create an account?",
    answer:
      "No account needed. Everything happens in your browser – you can generate and download READMEs instantly without any registration.",
  },
  {
    question: "Can I customize the README template?",
    answer:
      "Yes! GitWrite allows you to fully customize your README. Edit any section, add or remove headings, include code blocks, tables, badges, and images. The live preview updates instantly, and you can download the final Markdown file with all your customizations.",
  },
  {
    question: "Is my data stored or shared?",
    answer:
      "Never. All processing happens locally in your browser. We don't store, track, or share any of your project details. Your privacy is 100% protected.",
  },
  {
    question: "Does GitWrite support GitHub badges?",
    answer:
      "Yes! The generated README includes placeholders for common badges (build passing, license, version, etc.). You can easily add more using our badge guide.",
  },
  {
    question: "Can I use GitWrite for open source projects?",
    answer:
      "Absolutely. GitWrite is built for open source. We encourage you to use it for all your projects – personal, team, or community-driven.",
  },
  {
    question: "What formats can I export?",
    answer:
      "Currently, we support .md (Markdown) files – ready to be committed to GitHub, GitLab, or Bitbucket. PDF export is on our roadmap.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Navbar />
      <div className="bg-white">
        {/* Hero section */}
        <section className="relative py-20 bg-gradient-to-b from-purple-50 to-white overflow-hidden">
          <div className="container max-w-4xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-[#FF512F]/10 text-[#FF512F] px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <HelpCircle size={16} />
              Got questions?
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently asked{" "}
              <span className="capitalize bg-gradient-to-r from-[#FF512F] to-[#DD2476] bg-clip-text text-transparent">
                questions
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about GitWrite. Can't find what you're
              looking for? Feel free to reach out.
            </p>
          </div>
        </section>

        {/* FAQ accordion */}
        <section className="py-16 bg-white">
          <div className="container max-w-3xl mx-auto px-4">
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center p-5 text-left bg-white hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-lg font-semibold text-gray-900 pr-8">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`flex-shrink-0 text-[#FF512F] transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === index ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="p-5 pt-0 text-gray-600 border-t border-gray-100">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Still have questions? CTA */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-3xl mx-auto px-4 text-center">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-10">
              <Mail className="w-12 h-12 text-[#FF512F] mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Still have questions?
              </h2>
              <p className="text-gray-600 mb-6">
                Can't find the answer you're looking for? Our team is happy to
                help.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF512F] to-[#DD2476] text-white font-semibold px-6 py-3 rounded-lg transition"
              >
                Contact us
                <ChevronDown size={18} className="rotate-270" />
              </Link>
            </div>
          </div>
        </section>

        {/* Schema.org structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      </div>
      <Footer />
    </>
  );
}
