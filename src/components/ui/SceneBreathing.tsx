"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface SceneBreathingProps {
  className?: string;
}

export default function SceneBreathing({ className = "" }: SceneBreathingProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={`absolute inset-0 pointer-events-none ${className}`}
      animate={
        reduced
          ? undefined
          : {
              opacity: [0.97, 1, 0.97],
              scale: [1, 1.008, 1],
            }
      }
      transition={
        reduced
          ? undefined
          : {
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            }
      }
    />
  );
}
