"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Clipboard } from "lucide-react";

interface SmoothCopyClipboardProps {
  text?: string;
}

export function SmoothCopyClipboard({
  text = "npm install framer-motion",
}: SmoothCopyClipboardProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);

      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <motion.button
      type="button"
      onClick={handleCopy}
      whileTap={{ scale: 0.97 }}
      transition={{
        duration: 0.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      aria-label={copied ? "Copied" : "Copy to clipboard"}
      className="relative inline-flex h-11 items-center gap-3 overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 text-sm font-medium text-zinc-300 backdrop-blur-sm transition-colors duration-300 hover:border-white/[0.14] hover:bg-white/[0.06] hover:text-white"
    >
      {/* Copy label */}
      <motion.span
        animate={{
          color: copied ? "rgb(161 161 170)" : "rgb(212 212 216)",
        }}
        transition={{ duration: 0.35 }}
        className="relative z-10"
      >
        Copy
      </motion.span>

      {/* Icon container */}
      <div className="relative z-10 flex h-6 w-6 items-center justify-center">
        <AnimatePresence mode="popLayout" initial={false}>
          {!copied ? (
            <motion.span
              key="clipboard"
              initial={{
                opacity: 0,
                scale: 0.65,
                rotate: -8,
                x: 4,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 0,
                x: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.75,
                rotate: 8,
                x: -3,
              }}
              transition={{
                duration: 0.32,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Clipboard className="h-4 w-4" />
            </motion.span>
          ) : (
            <motion.span
              key="success"
              initial={{
                opacity: 0,
                scale: 0.45,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.7,
              }}
              transition={{
                duration: 0.45,
                type: "spring",
                stiffness: 260,
                damping: 18,
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {/* Green success circle */}
              <motion.span
                initial={{
                  scale: 0.55,
                  opacity: 0,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.4,
                  type: "spring",
                  stiffness: 260,
                  damping: 18,
                }}
                className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-400"
              >
                <motion.span
                  initial={{
                    pathLength: 0,
                    opacity: 0,
                  }}
                  animate={{
                    pathLength: 1,
                    opacity: 1,
                  }}
                  transition={{
                    delay: 0.08,
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                >
                  <Check className="h-3.5 w-3.5" strokeWidth={2.7} />
                </motion.span>
              </motion.span>
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {/* Success highlight */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{
              opacity: 0,
              scaleX: 0.4,
              x: -20,
            }}
            animate={{
              opacity: [0, 0.5, 0],
              scaleX: [0.4, 1, 1.2],
              x: [-20, 0, 18],
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="pointer-events-none absolute inset-y-0 right-0 w-14 origin-right bg-gradient-to-l from-emerald-300/10 to-transparent blur-md"
          />
        )}
      </AnimatePresence>
    </motion.button>
  );
}

export const smoothCopyClipboardCode = `"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Clipboard } from "lucide-react";

interface SmoothCopyClipboardProps {
  text?: string;
}

export function SmoothCopyClipboard({
  text = "npm install framer-motion",
}: SmoothCopyClipboardProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);

      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <motion.button
      type="button"
      onClick={handleCopy}
      whileTap={{ scale: 0.97 }}
      transition={{
        duration: 0.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      aria-label={copied ? "Copied" : "Copy to clipboard"}
      className="relative inline-flex h-11 items-center gap-3 overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 text-sm font-medium text-zinc-300 backdrop-blur-sm transition-colors duration-300 hover:border-white/[0.14] hover:bg-white/[0.06] hover:text-white"
    >
      {/* Copy label */}
      <motion.span
        animate={{
          color: copied ? "rgb(161 161 170)" : "rgb(212 212 216)",
        }}
        transition={{ duration: 0.35 }}
        className="relative z-10"
      >
        Copy
      </motion.span>

      {/* Icon container */}
      <div className="relative z-10 flex h-6 w-6 items-center justify-center">
        <AnimatePresence mode="popLayout" initial={false}>
          {!copied ? (
            <motion.span
              key="clipboard"
              initial={{
                opacity: 0,
                scale: 0.65,
                rotate: -8,
                x: 4,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 0,
                x: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.75,
                rotate: 8,
                x: -3,
              }}
              transition={{
                duration: 0.32,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Clipboard className="h-4 w-4" />
            </motion.span>
          ) : (
            <motion.span
              key="success"
              initial={{
                opacity: 0,
                scale: 0.45,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.7,
              }}
              transition={{
                duration: 0.45,
                type: "spring",
                stiffness: 260,
                damping: 18,
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {/* Green success circle */}
              <motion.span
                initial={{
                  scale: 0.55,
                  opacity: 0,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.4,
                  type: "spring",
                  stiffness: 260,
                  damping: 18,
                }}
                className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-400"
              >
                <motion.span
                  initial={{
                    pathLength: 0,
                    opacity: 0,
                  }}
                  animate={{
                    pathLength: 1,
                    opacity: 1,
                  }}
                  transition={{
                    delay: 0.08,
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                >
                  <Check className="h-3.5 w-3.5" strokeWidth={2.7} />
                </motion.span>
              </motion.span>
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {/* Success highlight */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{
              opacity: 0,
              scaleX: 0.4,
              x: -20,
            }}
            animate={{
              opacity: [0, 0.5, 0],
              scaleX: [0.4, 1, 1.2],
              x: [-20, 0, 18],
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="pointer-events-none absolute inset-y-0 right-0 w-14 origin-right bg-gradient-to-l from-emerald-300/10 to-transparent blur-md"
          />
        )}
      </AnimatePresence>
    </motion.button>
  );
}
`;