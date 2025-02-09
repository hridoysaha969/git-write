import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full text-center">
        <div className="flex justify-center mb-6">
          {/* Animated 404 Text */}
          <div className="relative">
            <h1 className="text-9xl font-bold text-gray-800">404</h1>
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <div className="w-24 h-24 bg-purple-500 rounded-full opacity-20 animate-ping"></div>
            </div>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-600 mb-6">
          The page you’re looking for doesn’t exist or has been moved. Let’s get
          you back on track.
        </p>
        <Button asChild>
          <Link
            href="/"
            className="inline-block text-white px-6 py-2 rounded-lg transition duration-300"
          >
            Go to Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
