"use client";

import { motion } from "framer-motion";

export function BeamScanLoader() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative h-10 w-44 overflow-hidden rounded-full border border-white/[0.08] bg-white/[0.02]">
        {/* Ambient glow */}
        <motion.div
          className="pointer-events-none absolute left-1/2 top-1/2 h-12 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-300/[0.06] blur-2xl"
          animate={{
            opacity: [0.35, 0.65, 0.35],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Line track container */}
        <div className="absolute left-5 right-5 top-1/2 h-0 -translate-y-1/2">
          {/* Base line */}
          <div className="absolute inset-x-0 top-0 h-px -translate-y-1/2 bg-white/[0.08]" />

          {/* Moving beam glow */}
          <motion.div
            className="pointer-events-none absolute top-1/2 h-5 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-300/20 blur-md"
            animate={{
              left: ["0%", "100%"],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 1.35,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.2, 0.8, 1],
            }}
          />

          {/* Moving beam */}
          <motion.div
            className="pointer-events-none absolute top-1/2 h-[2px] w-7 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-transparent via-amber-100 to-transparent"
            animate={{
              left: ["0%", "100%"],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 1.35,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.2, 0.8, 1],
            }}
          />
        </div>
      </div>
    </div>
  );
}

export const beamScanLoaderCode = `"use client";

import { motion } from "framer-motion";

export function BeamScanLoader() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative h-10 w-44 overflow-hidden rounded-full border border-white/[0.08] bg-white/[0.02]">
        {/* Ambient glow */}
        <motion.div
          className="pointer-events-none absolute left-1/2 top-1/2 h-12 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-300/[0.06] blur-2xl"
          animate={{
            opacity: [0.35, 0.65, 0.35],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Line track container */}
        <div className="absolute left-5 right-5 top-1/2 h-0 -translate-y-1/2">
          {/* Base line */}
          <div className="absolute inset-x-0 top-0 h-px -translate-y-1/2 bg-white/[0.08]" />

          {/* Moving beam glow */}
          <motion.div
            className="pointer-events-none absolute top-1/2 h-5 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-300/20 blur-md"
            animate={{
              left: ["0%", "100%"],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 1.35,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.2, 0.8, 1],
            }}
          />

          {/* Moving beam */}
          <motion.div
            className="pointer-events-none absolute top-1/2 h-[2px] w-7 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-transparent via-amber-100 to-transparent"
            animate={{
              left: ["0%", "100%"],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 1.35,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.2, 0.8, 1],
            }}
          />
        </div>
      </div>
    </div>
  );
}
`;