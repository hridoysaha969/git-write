"use client";

import { Button } from "@/components/ui/button";
import { PLANS } from "@/lib/constant";
import React from "react";

export default function PricingSection() {
  const plans = PLANS;

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-2 md:px-4 overflow-hidden text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
          Upgrade Your Plan
        </h2>
        <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
          Choose the best plan that fits your needs.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-3">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="relative p-8 text-start bg-white dark:bg-gray-800 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-2xl text-center font-bold text-gray-900 dark:text-white">
              {plan.title}
            </h3>
            <p className="mt-3 text-center text-gray-600 dark:text-gray-400">
              {plan.description}
            </p>
            <p className="mt-5 text-center text-4xl font-extrabold text-zinc-600">
              {plan.price}
              <span className="text-2xl font-normal">$</span>
            </p>
            <ul className="mt-6 text-gray-700 dark:text-gray-300 text-sm space-y-3">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center justify-center gap-2">
                  <span className="text-green-500 font-semibold">✔</span>{" "}
                  {feature}
                </li>
              ))}
            </ul>
            <Button className="mt-8 w-full py-3 font-semibold rounded-lg transition-colors">
              Get Started
            </Button>
            {plan.title === "Pro" && (
              <span className="absolute top-4 right-4 bg-gradient-to-r from-[#FF512F] to-[#DD2476] text-white text-xs font-semibold px-3 py-1 rounded-full">
                Best Value
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
