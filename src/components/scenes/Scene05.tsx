"use client";

import { useRef } from "react";
import { motion, useTransform } from "framer-motion";
import { useSceneCamera, useParallax } from "@/hooks/useSceneCamera";
import CinematicOrbs from "@/components/ui/CinematicOrbs";

const PILLARS = [
  {
    label: "Estrutura",
    text: "Grids fluidos e tipografia que guiam o olhar — sem forçar, apenas conduzindo.",
    offset: [-12, 12] as [number, number],
  },
  {
    label: "Movimento",
    text: "Física orgânica. Cada transição carrega peso, intenção e consequência.",
    offset: [0, 0] as [number, number],
  },
  {
    label: "Conexão",
    text: "Design que aproxima. Tecnologia a serviço do sentimento humano.",
    offset: [12, -12] as [number, number],
  },
];

export default function Scene05() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { opacity, scale, blur, scrollYProgress } = useSceneCamera(containerRef, {
    entryScale: 0.96,
    exitScale: 1.04,
  });

  const pillar1Opacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const pillar2Opacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
  const pillar3Opacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);

  const pillarOpacities = [pillar1Opacity, pillar2Opacity, pillar3Opacity];
  const y1 = useParallax(scrollYProgress, [-12, 12]);
  const y2 = useParallax(scrollYProgress, [0, 0]);
  const y3 = useParallax(scrollYProgress, [12, -12]);
  const pillarYs = [y1, y2, y3];

  return (
    <section
      ref={containerRef}
      className="scene-container flex items-center justify-center overflow-hidden"
      id="scene-05"
    >
      <div className="scene-bg bg-rose-full" />
      <CinematicOrbs />
      <div className="scene-grain opacity-[0.04]" />

      <motion.div
        className="scene-content flex flex-col items-center justify-center max-w-[900px] w-full px-6 relative z-10"
        style={{ opacity, scale, filter: blur }}
      >
        <span className="scene-index">05 / Explosão Controlada</span>

        <h2 className="font-serif font-light text-[clamp(2rem,4.5vw,4.5rem)] text-center leading-[1.1] max-w-[750px] mb-20 text-[#1d1d1d]">
          Onde a complexidade se desfaz em{" "}
          <span className="font-serif italic">harmonia</span>
        </h2>

        <div className="flex flex-col gap-14 w-full max-w-[640px]">
          {PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.label}
              className="flex flex-col gap-3 text-left border-l border-[rgba(29,29,29,0.15)] pl-8"
              style={{
                opacity: pillarOpacities[idx],
                y: pillarYs[idx],
              }}
            >
              <span className="font-mono text-[10px] tracking-[5px] uppercase text-[rgba(29,29,29,0.5)]">
                {pillar.label}
              </span>
              <p className="font-serif font-light text-xl md:text-2xl text-[#1d1d1d] leading-snug">
                {pillar.text}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
