"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { loadStripe } from "@stripe/stripe-js";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const PricingCards = ({ plans }) => {
  const [loading, setLoading] = useState();
  const { currentUser } = useAuth();
  const router = useRouter();

  const handleCheckout = async (id, title, amount, credits) => {
    if (!currentUser || !currentUser.email) {
      router.push("/sign-in");
      return;
    }

    setLoading(true);
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id,
        title,
        amount,
        credits,
        email: currentUser?.email,
      }),
    });
    const { sessionId } = await response.json();
    const stripe = await stripePromise;
    await stripe?.redirectToCheckout({ sessionId });

    setLoading(false);
  };

  return (
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
          <Button
            className="mt-8 w-full py-3 font-semibold rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            onClick={() =>
              handleCheckout(plan.id, plan.title, plan.price, plan.credits)
            }
            disabled={loading}
          >
            {loading ? "Redirecting..." : `Get ${plan.title}`}
          </Button>
          {plan.title === "Pro" && (
            <span className="absolute top-4 right-4 bg-gradient-to-r from-[#FF512F] to-[#DD2476] text-white text-xs font-semibold px-3 py-1 rounded-full">
              Best Value
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default PricingCards;
