"use client";
import Link from "next/link";
import Logo from "./Logo";
import { AlignJustify, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

// import { Button } from "./ui/button";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="py-3 px-2 shadow-md bg-gray-50 relative">
      <div className="container flex items-center justify-between">
        <Logo />
        <ul
          className={cn("hidden sm:flex items-center gap-4", {
            "show-menu": open,
          })}
        >
          <li>
            <Link href="/" className="text-zinc-500 font-semibold">
              Home
            </Link>
          </li>
          <li>
            <Link href="/pricing" className="text-zinc-500 font-semibold">
              Pricing
            </Link>
          </li>
        </ul>
        <button
          className="block sm:hidden font-semibold outline-none focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Close menu"
        >
          {open ? (
            <X className="w-6 h-6" />
          ) : (
            <AlignJustify className="w-6 h-6" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
