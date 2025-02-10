import { Button } from "@/components/ui/button";
import { AlertCircle, CheckCircle } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

async function verifyEmail(token) {
  try {
    const url =
      process.env.NODE_ENV !== "development"
        ? `https://gitwrite.vercel.app/api/verify-email?token=${token}`
        : `http://localhost:3000/api/verify-email?token=${token}`;

    const res = await fetch(url);

    if (!res.ok) {
      return null;
    }
    const data = await res.json();
    if (!data.success) return null;

    return data;
  } catch (error) {
    console.error("Error verifying email:", error);
    return null;
  }
}

const VerifyEmail = async ({ searchParams }) => {
  const token = (await searchParams).token;
  if (!token) notFound();

  const isVerified = await verifyEmail(token);

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full text-center">
        <div className="flex justify-center mb-6">
          {isVerified ? (
            <CheckCircle className="w-8 h-8 text-green-500" />
          ) : (
            <AlertCircle className="w-8 h-8 text-red-400" />
          )}
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          {isVerified ? "Email Verified!" : "Verification failed!"}
        </h1>
        <p className="text-gray-600 mb-6">
          {isVerified
            ? `Your email has been successfully verified. You can now access all
          features of your account.`
            : "Something went wrong! PLease try again."}
        </p>
        <div className="mb-6">
          <Button asChild>
            <Link
              href={isVerified ? "/generate" : "/"} // Replace with your desired redirect path
              className="inline-block text-white px-6 py-2 rounded-lg transition duration-300"
            >
              {isVerified ? "Go to Generate" : "Go to Home"}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
