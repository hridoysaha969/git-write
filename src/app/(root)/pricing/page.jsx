import PricingCards from "@/components/PricingCards";
import { AuthProvider } from "@/contexts/AuthContext";
import { PLANS } from "@/lib/constant";
import React from "react";

export default function PricingSection() {
  const plans = PLANS;

  return (
    <AuthProvider>
      <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 md:h-screen">
        <div className="max-w-6xl mx-auto px-2 md:px-4 overflow-hidden text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            Upgrade Your Plan
          </h2>
          <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
            Choose the best plan that fits your needs.
          </p>
        </div>

        <PricingCards plans={plans} />
      </section>
    </AuthProvider>
  );
}

export async function generateMetadata() {
  return {
    title: "GitWrite Pricing - Affordable Pricing for GitHub README Generator.",
    description:
      "Discover flexible and affordable pricing for our GitHub README Generator. Create professional, customized READMEs effortlessly. Explore our plans and start building your perfect project documentation today!",
    keywords: [
      "GitHub README generator pricing",
      "GitWrite Pricing",
      "README generator plans",
      "GitWrite Pricing Plans",
      "GitHub documentation tool",
      "customizable README pricing",
      "professional README generator",
      "Automated README Generator",
      "GitWrite",
      "GitWrite README Generator Pricing",
    ],
    openGraph: {
      title:
        "GitWrite Pricing - Affordable Pricing for GitHub README Generator.",
      description:
        "Discover flexible and affordable pricing for our GitHub README Generator. Create professional, customized READMEs effortlessly. Explore our plans and start building your perfect project documentation today!",
      url: "https://gitwrite.vercel.app",
      type: "website",
      images: [
        {
          url: "/gitwrite_logo.png", // Replace with your image URL
          width: 1200,
          height: 1200,
          alt: "README Generator - GitWrite",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title:
        "GitWrite Pricing - Affordable Pricing for GitHub README Generator.",
      description:
        "Discover flexible and affordable pricing for our GitHub README Generator. Create professional, customized READMEs effortlessly. Explore our plans and start building your perfect project documentation today!",
      images: ["/gitwrite_logo.png"], // Replace with your image URL
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
}
