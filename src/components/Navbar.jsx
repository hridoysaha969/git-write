"use client";

import Link from "next/link";
import Logo from "./Logo";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─── Data ───────────────────────────────────────────────────────────── */

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

/* ─── Animation Variants ─────────────────────────────────────────────── */

const drawerVariants = {
  closed: { height: 0, opacity: 0 },
  open: { height: "auto", opacity: 1 },
};

const drawerTransition = {
  height: { duration: 0.32, ease: [0.4, 0, 0.2, 1] },
  opacity: { duration: 0.22, ease: "easeInOut" },
};

const mobileLinkVariants = {
  closed: { opacity: 0, x: -10 },
  open: { opacity: 1, x: 0 },
};

const mobileActionsVariants = {
  closed: { opacity: 0, y: 6 },
  open: { opacity: 1, y: 0 },
};

/** Variant set propagated from CTA wrapper down to children */
const ctaVariants = {
  rest: { y: 0 },
  hover: { y: -1.5 },
};

const rocketVariants = {
  rest: { x: 0, rotate: 0, scale: 1 },
  hover: { x: 2, rotate: -8, scale: 1.18 },
};

/* ─── Sub-components ─────────────────────────────────────────────────── */

/** Morphing hamburger → X icon */
const HamburgerButton = ({ open, onClick }) => (
  <button
    onClick={onClick}
    aria-expanded={open}
    aria-label="Toggle navigation"
    className="md:hidden flex items-center justify-center p-2 rounded-lg
               hover:bg-black/5 active:bg-black/10 transition-colors duration-150"
  >
    <div className="relative w-[22px] h-4 flex flex-col justify-between">
      <motion.span
        className="block h-0.5 w-full rounded-full bg-zinc-800 origin-center"
        animate={open ? { y: 7, rotate: 45 } : { y: 0, rotate: 0 }}
        transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
      />
      <motion.span
        className="block h-0.5 w-full rounded-full bg-zinc-800 origin-center"
        animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
      />
      <motion.span
        className="block h-0.5 w-full rounded-full bg-zinc-800 origin-center"
        animate={open ? { y: -7, rotate: -45 } : { y: 0, rotate: 0 }}
        transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
      />
    </div>
  </button>
);

/** Desktop nav link with animated gradient underline */
const NavLink = ({ href, label }) => (
  <li className="list-none">
    <Link
      href={href}
      className="group relative flex items-center px-3 py-2 text-sm font-medium
                 text-zinc-500 hover:text-zinc-900 rounded-md
                 hover:bg-black/[0.04] transition-colors duration-150"
    >
      {label}
      <motion.span
        className="absolute bottom-1 left-3 right-3 h-0.5 rounded-full
                   bg-gradient-to-r from-[#FF512F] to-[#DD2476] origin-center"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
      />
    </Link>
  </li>
);

/** CTA button — shimmer sweep + hover lift + rocket spring */
const CtaButton = ({ href, children }) => (
  <motion.div
    variants={ctaVariants}
    initial="rest"
    whileHover="hover"
    whileTap={{ y: 0, scale: 0.98 }}
    transition={{ duration: 0.15 }}
  >
    <Link
      href={href}
      className="relative inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold
                 text-white rounded-lg overflow-hidden
                 bg-gradient-to-r from-[#FF512F] to-[#DD2476]
                 shadow-[0_2px_10px_rgba(221,36,118,0.3),inset_0_1px_0_rgba(255,255,255,0.15)]
                 hover:shadow-[0_6px_22px_rgba(221,36,118,0.42)]
                 transition-shadow duration-200"
    >
      {/* Shimmer sweep animation */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute top-0 w-[45%] h-full
                   bg-gradient-to-r from-transparent via-white/30 to-transparent
                   -skew-x-12"
        initial={{ x: "-120%" }}
        animate={{ x: "320%" }}
        transition={{
          duration: 2.6,
          repeat: Infinity,
          repeatDelay: 0.9,
          ease: "easeInOut",
        }}
      />

      {children}

      {/* Rocket — inherits "hover" variant from parent wrapper */}
      <motion.span
        className="text-base leading-none"
        variants={rocketVariants}
        transition={{ type: "spring", stiffness: 380, damping: 10 }}
      >
        🚀
      </motion.span>
    </Link>
  </motion.div>
);

/* ─── Navbar ─────────────────────────────────────────────────────────── */

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* Elevate navbar on scroll */
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav
        className={[
          "sticky top-0 z-50 w-full border-b",
          "backdrop-blur-xl transition-all duration-300",
          scrolled
            ? "bg-white/90 border-black/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
            : "bg-white/70 border-black/[0.05]",
        ].join(" ")}
      >
        {/* ── Top bar ───────────────────────────────── */}
        <div className="mx-auto max-w-6xl h-16 px-5 flex items-center justify-between gap-8">
          {/* Left — Logo */}
          <Logo />

          {/* Center — Desktop links */}
          <ul className="hidden md:flex items-center gap-0.5 m-0 p-0">
            {NAV_LINKS.map(({ label, href }) => (
              <NavLink key={label} label={label} href={href} />
            ))}
          </ul>

          {/* Right — Log in + CTA */}
          <div className="hidden md:flex items-center gap-2">
            <Link
              href="/login"
              className="px-3 py-2 text-sm font-medium text-zinc-500
                         hover:text-zinc-900 hover:bg-black/[0.04]
                         rounded-md transition-colors duration-150"
            >
              Log in
            </Link>

            <CtaButton href="/generate">Generate README</CtaButton>
          </div>

          {/* Mobile — hamburger */}
          <HamburgerButton open={open} onClick={() => setOpen((v) => !v)} />
        </div>

        {/* ── Mobile Drawer ──────────────────────────── */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="drawer"
              variants={drawerVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={drawerTransition}
              className="md:hidden overflow-hidden border-t border-black/[0.06]
                         bg-white/[0.97] backdrop-blur-xl"
            >
              <div className="px-5 pt-3 pb-5 space-y-0.5">
                {/* Nav links — staggered slide-in */}
                {NAV_LINKS.map(({ label, href }, i) => (
                  <motion.div
                    key={label}
                    variants={mobileLinkVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    transition={{ delay: i * 0.055 + 0.04, duration: 0.22 }}
                  >
                    <Link
                      href={href}
                      onClick={() => setOpen(false)}
                      className="block px-3 py-2.5 text-[0.9375rem] font-medium
                                 text-zinc-500 hover:text-zinc-900
                                 hover:bg-black/[0.04] hover:pl-5
                                 rounded-lg transition-all duration-150"
                    >
                      {label}
                    </Link>
                  </motion.div>
                ))}

                {/* Divider */}
                <div className="!my-3 h-px bg-black/[0.06]" />

                {/* Log in + CTA */}
                <motion.div
                  className="space-y-2.5 pt-0.5"
                  variants={mobileActionsVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  transition={{ delay: 0.22, duration: 0.22 }}
                >
                  <Link
                    href="/login"
                    onClick={() => setOpen(false)}
                    className="block text-center px-4 py-2.5 text-[0.9375rem] font-medium
                               text-zinc-600 rounded-xl border border-black/10
                               hover:bg-black/[0.03] hover:border-black/20
                               transition-all duration-150"
                  >
                    Log in
                  </Link>

                  <Link
                    href="/generate"
                    onClick={() => setOpen(false)}
                    className="block text-center px-4 py-2.5 text-[0.9375rem] font-semibold
                               text-white rounded-xl
                               bg-gradient-to-r from-[#FF512F] to-[#DD2476]
                               shadow-[0_2px_14px_rgba(221,36,118,0.32)]
                               active:scale-[0.98] transition-transform duration-150"
                  >
                    Generate README 🚀
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ── Backdrop (mobile only) ─────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(false)}
            className="md:hidden fixed inset-0 z-40 bg-black/15"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
