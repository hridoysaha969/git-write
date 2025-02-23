import { OctagonX } from "lucide-react";
import Link from "next/link";

export default function PaymentCancel() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-2xl max-w-md w-full text-center">
        {/* Icon */}
        <div className="mb-6">
          <OctagonX className="w-20 h-20 mx-auto text-red-500" />
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Payment Unsuccessful
        </h1>

        {/* Message */}
        <p className="text-gray-600 mb-6">
          Oops! It looks like your payment was not processed. Please check your
          payment details and try again.
        </p>

        {/* Button */}
        <Link href="/checkout">
          <span className="inline-block bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition duration-300">
            Try Again
          </span>
        </Link>

        {/* Additional Help */}
        <p className="mt-6 text-sm text-gray-500">
          Need help?{" "}
          <a
            href="mailto:support@example.com"
            className="text-red-500 hover:underline"
          >
            Contact Support
          </a>
        </p>
      </div>
    </div>
  );
}
