"use client";

import { motion, useMotionTemplate } from "framer-motion";
import { useMousePosition } from "@/hooks/useMousePosition";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface LightProps {
  color?: string;
  accentColor?: string;
  intensity?: number;
  scale?: number;
}

export default function Light({
  color = "255, 247, 228",
  accentColor = "254, 215, 170",
  intensity = 1.0,
  scale = 1.0,
}: LightProps) {
  const { springX, springY } = useMousePosition();
  const reduced = useReducedMotion();

  const primaryBg = useMotionTemplate`
    radial-gradient(
      circle,
      rgba(${color}, ${0.85 * intensity}) 0%,
      rgba(${accentColor}, ${0.4 * intensity}) 30%,
      rgba(${color}, ${0.1 * intensity}) 55%,
      transparent 75%
    )
  `;

  const haloBg = useMotionTemplate`
    radial-gradient(
      circle,
      rgba(${accentColor}, ${0.25 * intensity}) 0%,
      rgba(${color}, ${0.05 * intensity}) 50%,
      transparent 80%
    )
  `;

  const innerGlowBg = useMotionTemplate`
    radial-gradient(
      circle,
      rgba(255, 255, 255, ${0.35 * intensity}) 0%,
      rgba(${accentColor}, ${0.2 * intensity}) 25%,
      transparent 60%
    )
  `;

  const atmosphereBg = useMotionTemplate`
    radial-gradient(
      ellipse 80% 60% at 50% 40%,
      rgba(${color}, ${0.08 * intensity}) 0%,
      transparent 70%
    )
  `;

  const springConfig = reduced ? { stiffness: 200, damping: 40 } : undefined;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-[3]">
      {/* Layer 0: Static ambient atmosphere */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 90% 70% at 50% 30%, rgba(${color}, ${0.06 * intensity}) 0%, transparent 65%)`,
        }}
      />

      {/* Layer 1: Diffuse outer halo — slowest, widest */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          left: springX,
          top: springY,
          width: `${1400 * scale}px`,
          height: `${1400 * scale}px`,
          transform: "translate(-50%, -50%)",
          background: haloBg,
          filter: "blur(110px)",
          mixBlendMode: "screen",
          willChange: "transform",
        }}
        transition={springConfig}
      />

      {/* Layer 2: Core physical light */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          left: springX,
          top: springY,
          width: `${850 * scale}px`,
          height: `${850 * scale}px`,
          transform: "translate(-50%, -50%)",
          background: primaryBg,
          filter: "blur(70px)",
          mixBlendMode: "screen",
          willChange: "transform",
        }}
        transition={springConfig}
      />

      {/* Layer 3: Inner shine — brightest, smallest */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          left: springX,
          top: springY,
          width: `${320 * scale}px`,
          height: `${320 * scale}px`,
          transform: "translate(-50%, -50%)",
          background: innerGlowBg,
          filter: "blur(35px)",
          mixBlendMode: "soft-light",
          willChange: "transform",
        }}
        transition={springConfig}
      />

      {/* Layer 4: Atmospheric wash — fixed center, breathes subtly */}
      {!reduced && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ background: atmosphereBg }}
          animate={{ opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
    </div>
  );
}
