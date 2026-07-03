"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface AmbientTopGlowProps {
  color?: string;
  accentColor?: string;
}

export default function AmbientTopGlow({
  color = "247, 242, 234",
  accentColor = "223, 123, 102",
}: AmbientTopGlowProps) {
  const reduced = useReducedMotion();

  return (
    <div className="absolute inset-0 pointer-events-none z-[1] overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 90% 50% at 50% 0%, rgba(${accentColor}, 0.1) 0%, rgba(${color}, 0.04) 40%, transparent 70%)`,
        }}
      />
      {!reduced && (
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[40%]"
          style={{
            background: `radial-gradient(ellipse, rgba(${accentColor}, 0.06) 0%, transparent 70%)`,
            filter: "blur(60px)",
          }}
          animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.05, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
    </div>
  );
}
