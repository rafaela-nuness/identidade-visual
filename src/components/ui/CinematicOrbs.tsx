"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface Orb {
  size: number;
  x: string;
  y: string;
  color: string;
  duration: number;
  delay: number;
}

const ORBS: Orb[] = [
  { size: 420, x: "12%", y: "20%", color: "rgba(255, 200, 180, 0.35)", duration: 18, delay: 0 },
  { size: 320, x: "72%", y: "55%", color: "rgba(253, 164, 186, 0.28)", duration: 22, delay: 3 },
  { size: 260, x: "48%", y: "75%", color: "rgba(251, 146, 60, 0.22)", duration: 16, delay: 1.5 },
];

export default function CinematicOrbs() {
  const reduced = useReducedMotion();

  if (reduced) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
      {ORBS.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            filter: "blur(50px)",
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            x: [0, 20, -12, 0],
            y: [0, -16, 10, 0],
            scale: [1, 1.06, 0.97, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay,
          }}
        />
      ))}
    </div>
  );
}
