"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function AwakeningWaves() {
  const reduced = useReducedMotion();

  if (reduced) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
      <motion.div
        className="absolute rounded-full"
        style={{
          width: "140%",
          height: "60%",
          left: "-20%",
          bottom: "-30%",
          background:
            "radial-gradient(ellipse, rgba(253, 164, 186, 0.12) 0%, rgba(251, 146, 60, 0.06) 40%, transparent 70%)",
        }}
        animate={{ y: [0, -18, 0], scale: [1, 1.03, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          width: "100%",
          height: "50%",
          right: "-15%",
          top: "10%",
          background:
            "radial-gradient(ellipse, rgba(254, 205, 211, 0.1) 0%, rgba(253, 186, 116, 0.05) 45%, transparent 70%)",
        }}
        animate={{ y: [0, 14, 0], x: [0, -10, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full opacity-30"
        style={{
          left: "15%",
          top: "25%",
          background:
            "radial-gradient(circle, rgba(223, 123, 102, 0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
    </div>
  );
}
