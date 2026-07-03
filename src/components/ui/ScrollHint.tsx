"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { CINEMATIC_EASE } from "@/lib/easings";

export default function ScrollHint() {
  const reduced = useReducedMotion();

  return (
    <div className="flex flex-col items-center gap-3.5 select-none pointer-events-none">
      <span className="text-[10px] tracking-[0.3em] uppercase text-[#7d776f] font-sans">
        Role lentamente
      </span>
      <div className="w-[1px] h-[50px] bg-[rgba(29,29,29,0.08)] relative overflow-hidden">
        {!reduced && (
          <motion.div
            className="absolute top-0 left-0 w-full h-[15px] bg-[rgba(29,29,29,0.45)]"
            initial={{ y: -15 }}
            animate={{ y: 50 }}
            transition={{
              repeat: Infinity,
              duration: 2.2,
              ease: CINEMATIC_EASE,
              repeatDelay: 0.4,
            }}
          />
        )}
      </div>
    </div>
  );
}
