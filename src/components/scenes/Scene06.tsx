"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useSceneCamera, useParallax } from "@/hooks/useSceneCamera";
import AmbientTopGlow from "@/components/ui/AmbientTopGlow";

const PRINCIPLES = [
  {
    index: "01 / Empatia",
    title: "Compreender pessoas antes de desenhar telas.",
    desc: "Tecnologia e design só atingem seu verdadeiro potencial quando fazem com que quem os utiliza se sinta acolhido, compreendido e respeitado.",
  },
  {
    index: "02 / Direção",
    title: "Direção de arte guiando cada linha de código.",
    desc: "O front-end não é o final da linha. É onde a estética ganha peso, física e resposta tátil. Cada pixel deve carregar uma intenção.",
  },
  {
    index: "03 / Essência",
    title: "Compreender as raízes antes de construir.",
    desc: "Decorar padrões é temporário; dominar conceitos fundamentais é duradouro. Soluções perenes nascem de investigações e perguntas profundas.",
  },
];

export default function Scene06() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { opacity, scale, blur, scrollYProgress } = useSceneCamera(containerRef, {
    entryScale: 0.96,
  });

  const y1 = useParallax(scrollYProgress, [-40, 40]);
  const y2 = useParallax(scrollYProgress, [0, 0]);
  const y3 = useParallax(scrollYProgress, [40, -40]);
  const parallaxValues = [y1, y2, y3];

  return (
    <section
      ref={containerRef}
      className="scene-container flex items-center justify-center"
      id="scene-06"
    >
      <div className="scene-bg bg-sand" />
      <div className="scene-grid opacity-20" />
      <div className="scene-grain" />

      <AmbientTopGlow />

      <motion.div
        className="scene-content flex flex-col items-center justify-center max-w-[1000px] w-full px-6 relative z-10"
        style={{ opacity, scale, filter: blur }}
      >
        <span className="scene-index mb-16">06 / Como Eu Penso</span>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start w-full">
          {PRINCIPLES.map((p, idx) => (
            <motion.div
              key={p.index}
              style={{ y: parallaxValues[idx] }}
              className="flex flex-col gap-6 text-left border-l border-[rgba(29,29,29,0.08)] pl-6"
            >
              <span className="font-mono text-xs text-accent tracking-wider font-semibold">
                {p.index}
              </span>
              <h3 className="font-serif font-light text-2xl text-[#1d1d1d] leading-snug">
                {p.title}
              </h3>
              <p className="text-xs text-[#555] font-sans leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
