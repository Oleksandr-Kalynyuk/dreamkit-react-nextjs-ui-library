"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

interface MagneticGlowButtonProps {
  children?: ReactNode;
}

export function MagneticGlowButton({
  children = "Explore DreamKit",
}: MagneticGlowButtonProps) {
  return (
    <motion.button
      type="button"
      initial="rest"
      whileHover="hover"
      whileTap={{ scale: 0.97 }}
      className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl border border-white/[0.12] bg-white/[0.04] px-5 py-3 text-sm font-medium text-zinc-100 backdrop-blur-md"
    >
      {/* Ambient glow */}
      <motion.span
        variants={{
          rest: {
            opacity: 0,
            scale: 0.7,
          },
          hover: {
            opacity: 1,
            scale: 1.25,
          },
        }}
        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-300/20 blur-2xl"
      />

      {/* Fixed Sword Sweep Effect */}
      <motion.span
        variants={{
          rest: {
            x: "-120%",
            opacity: 0,
          },
          hover: {
            x: ["-120%", "160%"],
            opacity: [0, 1, 1, 0], // плавний прояв на старті та повне розчинення в кінці
          },
        }}
        transition={{
          duration: 0.85,
          times: [0, 0.15, 0.75, 1], // таймінги для керування яскравістю під час руху
          ease: [0.22, 1, 0.36, 1],
        }}
        className="pointer-events-none absolute inset-y-0 left-0 w-24 skew-x-[-25deg] bg-gradient-to-r from-transparent via-amber-400/10 via-white/95 via-amber-400/10 to-transparent"
      />

      {/* Subtle inner shine */}
      <motion.span
        variants={{
          rest: {
            opacity: 0,
          },
          hover: {
            opacity: 1,
          },
        }}
        transition={{
          duration: 0.35,
          ease: "easeOut",
        }}
        className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/[0.04] to-transparent"
      />

      {/* Content */}
      <span className="relative z-10">{children}</span>

      <motion.span
        variants={{
          rest: {
            x: 0,
            y: 0,
          },
          hover: {
            x: 2,
            y: -2,
          },
        }}
        transition={{
          duration: 0.25,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-10"
      >
        <ArrowUpRight className="h-4 w-4 text-amber-300" />
      </motion.span>
    </motion.button>
  );
}

export const magneticGlowButtonCode = `"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

interface MagneticGlowButtonProps {
  children?: ReactNode;
}

export function MagneticGlowButton({
  children = "Explore DreamKit",
}: MagneticGlowButtonProps) {
  return (
    <motion.button
      type="button"
      initial="rest"
      whileHover="hover"
      whileTap={{ scale: 0.97 }}
      className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl border border-white/[0.12] bg-white/[0.04] px-5 py-3 text-sm font-medium text-zinc-100 backdrop-blur-md"
    >
      {/* Ambient glow */}
      <motion.span
        variants={{
          rest: {
            opacity: 0,
            scale: 0.7,
          },
          hover: {
            opacity: 1,
            scale: 1.25,
          },
        }}
        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-300/20 blur-2xl"
      />

      {/* Fixed Sword Sweep Effect */}
      <motion.span
        variants={{
          rest: {
            x: "-120%",
            opacity: 0,
          },
          hover: {
            x: ["-120%", "160%"],
            opacity: [0, 1, 1, 0],
          },
        }}
        transition={{
          duration: 0.85,
          times: [0, 0.15, 0.75, 1],
          ease: [0.22, 1, 0.36, 1],
        }}
        className="pointer-events-none absolute inset-y-0 left-0 w-24 skew-x-[-25deg] bg-gradient-to-r from-transparent via-amber-400/10 via-white/95 via-amber-400/10 to-transparent"
      />

      {/* Subtle inner shine */}
      <motion.span
        variants={{
          rest: {
            opacity: 0,
          },
          hover: {
            opacity: 1,
          },
        }}
        transition={{
          duration: 0.35,
          ease: "easeOut",
        }}
        className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/[0.04] to-transparent"
      />

      {/* Content */}
      <span className="relative z-10">{children}</span>

      <motion.span
        variants={{
          rest: {
            x: 0,
            y: 0,
          },
          hover: {
            x: 2,
            y: -2,
          },
        }}
        transition={{
          duration: 0.25,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-10"
      >
        <ArrowUpRight className="h-4 w-4 text-amber-300" />
      </motion.span>
    </motion.button>
  );
}
`;
