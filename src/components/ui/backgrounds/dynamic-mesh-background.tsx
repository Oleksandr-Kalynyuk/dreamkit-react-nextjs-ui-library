"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";

export function DynamicMeshBackground({
  children,
}: {
  children?: React.ReactNode;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Плавна фізика слідування за курсором
  const smoothX = useSpring(mouseX, { stiffness: 45, damping: 25 });
  const smoothY = useSpring(mouseY, { stiffness: 45, damping: 25 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className="group relative min-h-[460px] w-full overflow-hidden bg-slate-950 text-slate-100"
    >
      {/* Cyber Grid with Radial Fade */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] opacity-40 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Interactive Cursor Spotlight */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-cyan-500/20 via-indigo-500/20 to-fuchsia-500/20 blur-[85px]"
        style={{
          left: smoothX,
          top: smoothY,
        }}
      />

      {/* Dynamic Ambient Glowing Orbs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-16 -top-16 h-80 w-80 rounded-full bg-gradient-to-tr from-violet-600/35 to-fuchsia-600/30 blur-[90px]"
        animate={{
          x: [0, 50, 0],
          y: [0, 35, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-16 -right-16 h-96 w-96 rounded-full bg-gradient-to-bl from-cyan-500/30 via-teal-500/20 to-blue-600/25 blur-[100px]"
        animate={{
          x: [0, -60, 0],
          y: [0, -40, 0],
          scale: [1.1, 0.9, 1.1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating 3D Glass Cards */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-[12%] top-[18%] h-24 w-24 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md shadow-2xl"
        animate={{
          y: [-12, 16, -12],
          rotate: [0, 12, 0],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-[20%] right-[15%] h-32 w-32 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-lg shadow-2xl"
        animate={{
          y: [16, -16, 16],
          rotate: [0, -18, 0],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Sweeping Laser Beam */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-1/3 top-0 h-full w-[2px] rotate-[28deg] bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent blur-[1px]"
        animate={{
          x: ["0%", "500%"],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatDelay: 3,
          ease: "easeInOut",
        }}
      />

      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(2,6,23,0.85)_100%)]" />

      {/* Content Container */}
      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
}

export const dynamicMeshBackgroundCode = `"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";

export function DynamicMeshBackground({
  children,
}: {
  children?: React.ReactNode;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 45, damping: 25 });
  const smoothY = useSpring(mouseY, { stiffness: 45, damping: 25 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className="group relative min-h-[460px] w-full overflow-hidden bg-slate-950 text-slate-100"
    >
      {/* Cyber Grid with Radial Fade */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] opacity-40 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Interactive Cursor Spotlight */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-cyan-500/20 via-indigo-500/20 to-fuchsia-500/20 blur-[85px]"
        style={{
          left: smoothX,
          top: smoothY,
        }}
      />

      {/* Dynamic Ambient Glowing Orbs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-16 -top-16 h-80 w-80 rounded-full bg-gradient-to-tr from-violet-600/35 to-fuchsia-600/30 blur-[90px]"
        animate={{
          x: [0, 50, 0],
          y: [0, 35, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-16 -right-16 h-96 w-96 rounded-full bg-gradient-to-bl from-cyan-500/30 via-teal-500/20 to-blue-600/25 blur-[100px]"
        animate={{
          x: [0, -60, 0],
          y: [0, -40, 0],
          scale: [1.1, 0.9, 1.1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating 3D Glass Cards */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-[12%] top-[18%] h-24 w-24 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md shadow-2xl"
        animate={{
          y: [-12, 16, -12],
          rotate: [0, 12, 0],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-[20%] right-[15%] h-32 w-32 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-lg shadow-2xl"
        animate={{
          y: [16, -16, 16],
          rotate: [0, -18, 0],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Sweeping Laser Beam */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-1/3 top-0 h-full w-[2px] rotate-[28deg] bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent blur-[1px]"
        animate={{
          x: ["0%", "500%"],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatDelay: 3,
          ease: "easeInOut",
        }}
      />

      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(2,6,23,0.85)_100%)]" />

      {/* Content Container */}
      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
}
`;