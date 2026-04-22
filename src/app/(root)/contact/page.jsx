"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
  Mail,
  MessageCircle,
  Twitter,
  Github,
  Send,
  Clock,
  MapPin,
  Phone,
} from "lucide-react";
import { useState } from "react";

// app/contact/page.js
// export const metadata = {
//   title: 'Contact GitWrite – Get in Touch',
//   description: 'Have questions, feedback, or partnership ideas? Contact the GitWrite team – we reply within 24 hours.',
//   keywords: 'contact gitwrite, support, feedback, partnership inquiry',
//   alternates: {
//     canonical: 'https://gitwrite.vercel.app/contact',
//   },
//   openGraph: {
//     title: 'Contact GitWrite – Get in Touch',
//     description: 'Have questions, feedback, or partnership ideas? Contact the GitWrite team – we reply within 24 hours.',
//     url: 'https://gitwrite.vercel.app/contact',
//     type: 'website',
//     images: [{ url: 'https://gitwrite.vercel.app/og-contact.png' }],
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'Contact GitWrite – Get in Touch',
//     description: 'Have questions, feedback, or partnership ideas? Contact the GitWrite team.',
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//     },
//   },
// };

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, send data to your backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email us",
      details: "hello@gitwrite.dev",
      description: "We reply within 24 hours, usually faster.",
      action: "mailto:hello@gitwrite.dev",
    },
    {
      icon: Twitter,
      title: "DM on X (Twitter)",
      details: "@gitwrite",
      description: "Quick questions or shoutouts – we're active.",
      action: "https://twitter.com/gitwrite",
    },
    {
      icon: Github,
      title: "GitHub Issues",
      details: "github.com/gitwrite",
      description: "Bug reports, feature requests, or PRs.",
      action: "https://github.com/gitwrite",
    },
    {
      icon: MessageCircle,
      title: "Discord community",
      details: "Join our server",
      description: "Chat with other users and the team.",
      action: "#",
    },
  ];

  const faqs = [
    {
      q: "Is GitWrite free?",
      a: "Yes, the core README generator is completely free. No credit card required.",
    },
    {
      q: "Do I need to sign up?",
      a: "No – you can generate and download READMEs instantly without an account.",
    },
    {
      q: "Can I use my own template?",
      a: "Custom templates are coming soon. Follow us on Twitter for updates.",
    },
    {
      q: "Is my data stored?",
      a: "No. All processing happens in your browser. We never store your project details.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-white">
        {/* Hero */}
        <section className="relative py-24 bg-gradient-to-b from-purple-50 to-white overflow-hidden">
          <div className="container max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Get in{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                touch
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Questions, feedback, or just want to say hi? We'd love to hear
              from you.
            </p>
          </div>
        </section>

        {/* Contact methods grid */}
        <section className="py-16 bg-white">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map(
                ({ icon: Icon, title, details, description, action }) => (
                  <a
                    key={title}
                    href={action}
                    target={action.startsWith("http") ? "_blank" : undefined}
                    rel={
                      action.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group p-6 bg-gray-50 rounded-2xl hover:bg-purple-50 transition text-center"
                  >
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition">
                      <Icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {title}
                    </h3>
                    <p className="text-sm text-purple-600 font-medium mb-2">
                      {details}
                    </p>
                    <p className="text-xs text-gray-500">{description}</p>
                  </a>
                ),
              )}
            </div>
          </div>
        </section>

        {/* Contact form + info */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-5xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Form */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Send us a message
                </h2>
                <p className="text-gray-600 mb-6">
                  For general inquiries, partnerships, or support.
                </p>
                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-700 text-center">
                    Thanks! We'll get back to you within 24 hours.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2.5 rounded-lg transition flex items-center justify-center gap-2"
                    >
                      <Send size={18} />
                      Send message
                    </button>
                  </form>
                )}
              </div>

              {/* Info & FAQ */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Other ways to reach us
                  </h2>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-600">
                      <Clock size={18} className="text-purple-600" />
                      <span>Support hours: Mon–Fri, 9am–6pm UTC</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <MapPin size={18} className="text-purple-600" />
                      <span>Remote team – based worldwide</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Phone size={18} className="text-purple-600" />
                      <span>No phone support – we're async first</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Frequently asked questions
                  </h2>
                  <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                      <div key={idx} className="border-b border-gray-200 pb-3">
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {faq.q}
                        </h3>
                        <p className="text-sm text-gray-600">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Office hours / response promise */}
        <section className="py-12 bg-white border-t">
          <div className="container max-w-3xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm">
              <Mail size={16} />
              Response within 24 hours
            </div>
            <p className="text-gray-500 text-sm mt-4">
              For urgent issues, reach out on X (Twitter){" "}
              <a href="#" className="text-purple-600 hover:underline">
                @gitwrite
              </a>
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
