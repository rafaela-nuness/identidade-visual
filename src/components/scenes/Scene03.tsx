"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useSceneCamera, useParallax } from "@/hooks/useSceneCamera";
import AmbientVignette from "@/components/ui/AmbientVignette";

export default function Scene03() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { opacity, scale, blur, scrollYProgress } = useSceneCamera(containerRef, {
    entryBlur: 14,
    exitBlur: 14,
    entryScale: 0.96,
  });

  const yPos = useParallax(scrollYProgress, [-30, 30]);

  return (
    <section
      ref={containerRef}
      className="scene-container flex items-center justify-center text-center"
      id="scene-03"
    >
      <div className="scene-bg bg-sand" />
      <div className="scene-grain" />

      <AmbientVignette color="220, 200, 180" intensity={0.5} />

      <motion.div
        className="scene-content max-w-[1000px] px-6 select-none"
        style={{ opacity, scale, y: yPos, filter: blur }}
      >
        <div className="flex flex-col items-center gap-6">
          <span className="scene-index">03 / A Pergunta</span>
          <h2 className="font-serif font-light text-[clamp(2.5rem,5.5vw,5.5rem)] leading-[1.1] text-[#1d1d1d] max-w-[900px]">
            O que acontece quando a tecnologia deixa de ser apenas tecnologia?
          </h2>
        </div>
      </motion.div>
    </section>
  );
}
