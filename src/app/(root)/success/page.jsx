"use client";

import { CheckCircle, Loader2, OctagonX } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

function PaymentSuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  if (!sessionId) {
    router.push("/cancel"); // Redirect to a custom 404 page
    return null; // Return null to stop rendering
  }

  useEffect(() => {
    // if (!sessionId || sessionId.trim() === "") rediecting();

    const verifyPayment = async () => {
      const res = await fetch(`/api/verify-payment?session_id=${sessionId}`);
      const data = await res.json();

      if (!data.valid) {
        router.push("/cancel");
        return;
      }

      setSuccess(data.valid);
      setLoading(false);
    };
    verifyPayment();
  }, [sessionId, router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {loading ? (
        <div className="py-3 px-6 rounded-md bg-white shadow-md">
          <p className="flex items-center gap-2">
            Verifying Payment <Loader2 className="w-5 h-5 animate-spin" />
          </p>
        </div>
      ) : (
        <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="flex justify-center"
          >
            {success ? (
              <CheckCircle className="text-green-500 w-20 h-20" />
            ) : (
              <OctagonX className="text-red-500 w-20 h-20" />
            )}
          </motion.div>
          <h1 className="text-2xl font-bold mt-4 text-gray-800">
            {success ? "Payment Successful!" : "Payment Failed!"}
          </h1>
          <p className="text-gray-600 mt-2">
            {success
              ? `Thank you for your purchase. Your transaction has been completed
            successfully.`
              : "Cannot complete your payment! Please try again."}
          </p>

          <div className="mt-6 space-y-4">
            <Button asChild>
              <Link href="/">
                <button className="w-full py-2 px-4 rounded-lg transition">
                  Go to Home
                </button>
              </Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function PaymentSuccess() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PaymentSuccessContent />
    </Suspense>
  );
}
