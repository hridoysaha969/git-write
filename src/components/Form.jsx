"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

export default function Form({ type }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (type === "sign-in") {
      if (email.trim() === "" || password.trim() === "") {
        setError("Required fields are missing");
        return;
      }

      console.log({ email, password });
      setEmail("");
      setPassword("");
    } else {
      if (name.trim() === "" || email.trim() === "" || password.trim() === "") {
        setError("Required fields are missing");
        return;
      }

      const response = await fetch("/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, type, aggrement: true }),
        redirect: "follow",
      });

      const data = await response.json();
      if (!data.success) {
        setError(data.message);
        setLoading(false);
        return;
      }
      setName("");
      setEmail("");
      setPassword("");
      setLoading(false);

      console.log(data);
      router.push("/generate");
    }
  };

  return (
    <div className="flex flex-col items-center px-2 justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      {error && (
        <div className="py-2 px-4 bg-red-300 text-red-800 font-semibold rounded-md mb-4">
          {error}
        </div>
      )}
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
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
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
