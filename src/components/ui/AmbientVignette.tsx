"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface AmbientVignetteProps {
  color?: string;
  intensity?: number;
}

export default function AmbientVignette({
  color = "245, 235, 220",
  intensity = 0.6,
}: AmbientVignetteProps) {
  const reduced = useReducedMotion();

  return (
    <div className="absolute inset-0 pointer-events-none z-[1] overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 70% 60% at 50% 45%, rgba(${color}, ${0.12 * intensity}) 0%, transparent 70%)`,
        }}
      />
      {!reduced && (
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 50% 40% at 50% 50%, rgba(${color}, ${0.08 * intensity}) 0%, transparent 65%)`,
          }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
    </div>
  );
}
