import { Mail } from "lucide-react";
import Link from "next/link";

const EmailVerificationPrompt = () => {
  return (
    <div className="h-full text-center bg-gray-50 px-2 flex flex-col justify-center items-center">
      <div className="flex justify-center">
        <Mail className="w-8 h-8 text-blue-500" />
      </div>
      <h2 className="mt-6 text-xl font-extrabold text-zinc-800">
        Verify Your Email
      </h2>
      <p className="mt-2 text-xs text-gray-600">
        We've sent a verification link to your email address. Please check your
        inbox and click on the link to verify your account.
      </p>
      <p className="mt-4 text-xs text-gray-600">
        If you didn't receive the email, please check your spam folder.
      </p>
    </div>
  );
};

export default EmailVerificationPrompt;
