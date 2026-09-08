"use client";

import { motion } from "framer-motion";

export function AuroraWaveBackground({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="relative min-h-[400px] w-full overflow-hidden bg-slate-950 text-slate-100">
      {/* Subtle dots texture */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />

      {/* Glowing Aurora Wave 1 - Teal / Emerald */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-1/4 -top-1/3 h-[500px] w-[150%] rotate-[-12deg] rounded-[100%] bg-gradient-to-r from-emerald-500/20 via-teal-400/30 to-cyan-500/20 blur-[90px]"
        animate={{
          x: ["-10%", "10%", "-10%"],
          y: ["-5%", "12%", "-5%"],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Glowing Aurora Wave 2 - Indigo / Violet */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-1/3 -right-1/4 h-[550px] w-[140%] rotate-[15deg] rounded-[100%] bg-gradient-to-r from-violet-600/30 via-indigo-500/25 to-purple-600/30 blur-[100px]"
        animate={{
          x: ["10%", "-10%", "10%"],
          y: ["10%", "-8%", "10%"],
          scale: [1.1, 0.95, 1.1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Pulsing Core Light Accent */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/15 blur-[80px]"
        animate={{
          scale: [0.8, 1.25, 0.8],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Vignette Layer */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(2,6,23,0.8)_100%)]" />

      {/* Content Container */}
      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
}

export const auroraWaveBackgroundCode = `"use client";

import { motion } from "framer-motion";

export function AuroraWaveBackground({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="relative min-h-[400px] w-full overflow-hidden bg-slate-950 text-slate-100">
      {/* Subtle dots texture */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />

      {/* Glowing Aurora Wave 1 - Teal / Emerald */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-1/4 -top-1/3 h-[500px] w-[150%] rotate-[-12deg] rounded-[100%] bg-gradient-to-r from-emerald-500/20 via-teal-400/30 to-cyan-500/20 blur-[90px]"
        animate={{
          x: ["-10%", "10%", "-10%"],
          y: ["-5%", "12%", "-5%"],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Glowing Aurora Wave 2 - Indigo / Violet */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-1/3 -right-1/4 h-[550px] w-[140%] rotate-[15deg] rounded-[100%] bg-gradient-to-r from-violet-600/30 via-indigo-500/25 to-purple-600/30 blur-[100px]"
        animate={{
          x: ["10%", "-10%", "10%"],
          y: ["10%", "-8%", "10%"],
          scale: [1.1, 0.95, 1.1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Pulsing Core Light Accent */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/15 blur-[80px]"
        animate={{
          scale: [0.8, 1.25, 0.8],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Vignette Layer */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(2,6,23,0.8)_100%)]" />

      {/* Content Container */}
      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
}
`;