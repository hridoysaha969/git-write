// Hero.jsx
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 sm:py-24 py-16">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-zinc-900">
            Write Better{" "}
            <span className="bg-gradient-to-r from-[#FF512F] to-[#DD2476] bg-clip-text text-transparent">
              README.md
            </span>{" "}
            in Seconds
          </h1>

          <p className="mt-6 sm:text-lg text-sm text-zinc-600 max-w-xl">
            Stop struggling with documentation. Generate clean, structured, and
            professional README files instantly with AI + smart templates.
          </p>

          <div className="flex flex-col sm:flex-row sm:gap-4 mt-8">
            <Button size="lg" asChild>
              <Link href="/generate">
                Generate README <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>

            <Button size="lg" variant="outline" asChild>
              <Link href="/pricing">See Pricing</Link>
            </Button>
          </div>

          <p className="mt-4 text-sm text-zinc-500">
            ⚡ No signup required • Free to start
          </p>
        </div>

        {/* RIGHT (PRODUCT PREVIEW) */}
        <div className="bg-white border rounded-2xl shadow-2xl p-6">
          <div className="text-xs text-zinc-500 mb-2">Live Preview</div>
          <pre className="text-sm text-zinc-800 overflow-hidden">
            {`# GitWrite

## Features
✔ AI Generated Content
✔ Clean Markdown
✔ One Click Export

## Installation
npm install gitwrite

## Usage
gitwrite generate`}
          </pre>
        </div>
      </div>
    </section>
  );
}
