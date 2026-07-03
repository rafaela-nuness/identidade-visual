"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useSceneCamera, useParallax } from "@/hooks/useSceneCamera";
import SceneBreathing from "@/components/ui/SceneBreathing";

export default function Scene09() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { opacity, scale, blur, scrollYProgress } = useSceneCamera(containerRef, {
    entryBlur: 10,
    exitBlur: 12,
    entryScale: 0.96,
  });

  const yPos = useParallax(scrollYProgress, [-20, 20]);

  return (
    <section
      ref={containerRef}
      className="scene-container scene-container--expressive"
      id="scene-09"
    >
      <div className="scene-bg bg-cream" />
      <SceneBreathing />
      <div className="scene-grain" />

      <motion.div
        className="scene-content w-full max-w-[1100px] px-6 relative z-10"
        style={{ opacity, scale, y: yPos, filter: blur }}
      >
        <div className="silence-composition">
          <div className="silence-composition__accent" aria-hidden="true" />
          <div className="silence-composition__content">
            <span className="scene-index">09 / O Retorno ao Silêncio</span>
            <h2 className="font-serif font-light text-[clamp(2.2rem,5.5vw,5rem)] leading-[1.1] text-[#1d1d1d]">
              Projetando experiências onde a{" "}
              <span className="italic text-accent">tecnologia desaparece</span>{" "}
              e as pessoas permanecem.
            </h2>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
