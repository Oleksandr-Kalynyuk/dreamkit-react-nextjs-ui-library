"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Clipboard } from "lucide-react";

interface SmoothCopyClipboardProps {
  text?: string;
}

const PARTICLES = Array.from({ length: 8 }).map((_, i) => {
  const angle = (i * (360 / 8) * Math.PI) / 180;
  return {
    x: Math.cos(angle) * 16,
    y: Math.sin(angle) * 16,
  };
});

export function BeautifulCopyClipboard({
  text = "npm install framer-motion",
}: SmoothCopyClipboardProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);

      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <motion.button
      type="button"
      onClick={handleCopy}
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      aria-label={copied ? "Copied" : "Copy to clipboard"}
      className={`relative inline-flex h-11 w-[128px] items-center justify-center gap-2 overflow-hidden rounded-xl border text-sm font-medium transition-colors duration-500 backdrop-blur-md select-none ${
        copied
          ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-300 shadow-[0_0_25px_rgba(16,185,129,0.2)]"
          : "border-white/[0.08] bg-white/[0.04] text-zinc-300 hover:border-white/[0.2] hover:bg-white/[0.08] hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]"
      }`}
    >
      {/* Soft Dynamic Background Glow */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-emerald-500/20 blur-xl"
          />
        )}
      </AnimatePresence>

      {/* Gentle Soft Ripple Wave */}
      <AnimatePresence>
        {copied && (
          <motion.span
            initial={{ scale: 0, opacity: 0.5 }}
            animate={{ scale: 2.2, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="pointer-events-none absolute h-20 w-20 rounded-full bg-emerald-400/20 blur-md"
          />
        )}
      </AnimatePresence>

      {/* Fixed Text Container */}
      <div className="relative z-10 flex h-5 w-[60px] items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          {!copied ? (
            <motion.span
              key="copy-text"
              initial={{ y: 6, opacity: 0, filter: "blur(3px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              exit={{ y: -6, opacity: 0, filter: "blur(3px)" }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block"
            >
              Copy
            </motion.span>
          ) : (
            <motion.span
              key="copied-text"
              initial={{ y: 6, opacity: 0, filter: "blur(3px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              exit={{ y: -6, opacity: 0, filter: "blur(3px)" }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block font-semibold text-emerald-400"
            >
              Copied!
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {/* Icon Container with Soft Particle Fade */}
      <div className="relative z-10 flex h-6 w-6 items-center justify-center">
        <AnimatePresence mode="popLayout" initial={false}>
          {!copied ? (
            <motion.span
              key="clipboard-icon"
              initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.7, rotate: 10 }}
              transition={{ type: "spring", stiffness: 220, damping: 22 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Clipboard className="h-4 w-4 transition-transform duration-300 group-hover:scale-105" />
            </motion.span>
          ) : (
            <motion.span
              key="success-icon"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ type: "spring", stiffness: 240, damping: 20 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {/* Gentle Particles */}
              {PARTICLES.map((p, index) => (
                <motion.span
                  key={index}
                  initial={{ x: 0, y: 0, scale: 0.8, opacity: 0.8 }}
                  animate={{
                    x: p.x,
                    y: p.y,
                    scale: 0,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: index * 0.015,
                  }}
                  className="absolute h-1.5 w-1.5 rounded-full bg-emerald-300/80 shadow-[0_0_6px_#34d399]"
                />
              ))}

              {/* Glowing Circle with Checkmark */}
              <motion.span
                initial={{ rotate: -20, scale: 0.5 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400 text-zinc-950 shadow-[0_0_12px_rgba(52,211,153,0.6)]"
              >
                <Check className="h-3 w-3 stroke-[3]" />
              </motion.span>
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </motion.button>
  );
}

export const beautifulCopyClipboardCode = `"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Clipboard } from "lucide-react";

interface SmoothCopyClipboardProps {
  text?: string;
}

const PARTICLES = Array.from({ length: 8 }).map((_, i) => {
  const angle = (i * (360 / 8) * Math.PI) / 180;
  return {
    x: Math.cos(angle) * 16,
    y: Math.sin(angle) * 16,
  };
});

export function BeautifulCopyClipboard({
  text = "npm install framer-motion",
}: SmoothCopyClipboardProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);

      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <motion.button
      type="button"
      onClick={handleCopy}
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      aria-label={copied ? "Copied" : "Copy to clipboard"}
      className={\`relative inline-flex h-11 w-[128px] items-center justify-center gap-2 overflow-hidden rounded-xl border text-sm font-medium transition-colors duration-500 backdrop-blur-md select-none \${
        copied
          ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-300 shadow-[0_0_25px_rgba(16,185,129,0.2)]"
          : "border-white/[0.08] bg-white/[0.04] text-zinc-300 hover:border-white/[0.2] hover:bg-white/[0.08] hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]"
      }\`}
    >
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-emerald-500/20 blur-xl"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {copied && (
          <motion.span
            initial={{ scale: 0, opacity: 0.5 }}
            animate={{ scale: 2.2, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="pointer-events-none absolute h-20 w-20 rounded-full bg-emerald-400/20 blur-md"
          />
        )}
      </AnimatePresence>

      <div className="relative z-10 flex h-5 w-[60px] items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          {!copied ? (
            <motion.span
              key="copy-text"
              initial={{ y: 6, opacity: 0, filter: "blur(3px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              exit={{ y: -6, opacity: 0, filter: "blur(3px)" }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block"
            >
              Copy
            </motion.span>
          ) : (
            <motion.span
              key="copied-text"
              initial={{ y: 6, opacity: 0, filter: "blur(3px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              exit={{ y: -6, opacity: 0, filter: "blur(3px)" }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block font-semibold text-emerald-400"
            >
              Copied!
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      <div className="relative z-10 flex h-6 w-6 items-center justify-center">
        <AnimatePresence mode="popLayout" initial={false}>
          {!copied ? (
            <motion.span
              key="clipboard-icon"
              initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.7, rotate: 10 }}
              transition={{ type: "spring", stiffness: 220, damping: 22 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Clipboard className="h-4 w-4 transition-transform duration-300 group-hover:scale-105" />
            </motion.span>
          ) : (
            <motion.span
              key="success-icon"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ type: "spring", stiffness: 240, damping: 20 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {PARTICLES.map((p, index) => (
                <motion.span
                  key={index}
                  initial={{ x: 0, y: 0, scale: 0.8, opacity: 0.8 }}
                  animate={{
                    x: p.x,
                    y: p.y,
                    scale: 0,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: index * 0.015,
                  }}
                  className="absolute h-1.5 w-1.5 rounded-full bg-emerald-300/80 shadow-[0_0_6px_#34d399]"
                />
              ))}

              <motion.span
                initial={{ rotate: -20, scale: 0.5 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400 text-zinc-950 shadow-[0_0_12px_rgba(52,211,153,0.6)]"
              >
                <Check className="h-3 w-3 stroke-[3]" />
              </motion.span>
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </motion.button>
  );
}
`;