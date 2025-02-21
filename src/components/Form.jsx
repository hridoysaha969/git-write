"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { cn } from "@/lib/utils";

export default function Form({ type }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [aggrement, setAggrement] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();
  const { toast } = useToast();
  const { signUp, signIn, currentUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (type === "sign-in") {
      if (email.trim() === "" || password.trim() === "") {
        setError(true);
        return;
      }

      await signIn(email, password, type);
      setEmail("");
      setPassword("");
      setLoading(false);
      setError(false);
    } else {
      if (name.trim() === "" || email.trim() === "" || password.trim() === "") {
        setError(true);
        // toast({
        //   variant: "destructive",
        //   title: "Required fields are missing",
        //   description: "Please enter valid email and strong password!",
        // });
        setLoading(false);
        return;
      }

      await signUp(name, email, password, type, aggrement);

      setName("");
      setEmail("");
      setPassword("");
      setLoading(false);
      setError(false);

      toast({
        title: "Signup Successful!",
        description:
          "Please verify your email. We've sent you a verification email. Don't forget to check spam folder.",
      });
    }
  };

  return (
    <div className="flex flex-col items-center px-2 justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
          {type === "sign-in" ? "Login" : "Sign Up"}
        </h2>
        <form onSubmit={handleSubmit} className="mt-6">
          {type === "sign-up" && (
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300">
                Name
              </label>
              <input
                type="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setError(true);
                }}
                placeholder="Enter your full name"
                className={cn(
                  "mt-1 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
                  {
                    "focus:ring-2 focus:ring-red-500": error && !name,
                  }
                )}
                required
              />
              {error && !name && (
                <span className="text-xs text-red-500">
                  Please enter your name!
                </span>
              )}
            </div>
          )}

          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full disabled:bg-gray-500 p-2 text-white rounded-lg"
            disabled={loading}
          >
            {type === "sign-in" ? "Login" : "Sign Up"}
            {loading && <Loader2 className="w-4 h-4 animate-spin ml-1" />}
          </Button>
        </form>
        <p className="mt-4 text-center text-gray-600 dark:text-gray-400">
          {type === "sign-in"
            ? "Don't have an account?"
            : "Already have an account?"}{" "}
          <Link
            href={type === "sign-in" ? "/sign-up" : "sign-in"}
            className="text-zinc-800 font-semibold hover:underline"
          >
            {type === "sign-in" ? "Sign Up" : "Sign In"}
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
