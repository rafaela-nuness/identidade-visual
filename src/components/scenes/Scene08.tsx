"use client";

import { useRef } from "react";
import type { CSSProperties } from "react";
import { motion, useTransform } from "framer-motion";
import { useSceneCamera } from "@/hooks/useSceneCamera";
import AmbientTopGlow from "@/components/ui/AmbientTopGlow";

const STEPS = [
  {
    number: "01",
    title: "Escuta & Pergunta",
    desc: "Toda criação começa em silêncio. Antes de desenhar ou codar, faço perguntas para compreender o elemento humano.",
    accent: "#df7b66",
  },
  {
    number: "02",
    title: "Estudo & Estrutura",
    desc: "A pesquisa cria bases sólidas. Fluxos, tipografia e ritmo visual definem toda a experiência futura.",
    accent: "#fb923c",
  },
  {
    number: "03",
    title: "Código como Consequência",
    desc: "A programação materializa sentimentos. Tecnologia a serviço da direção de arte — nunca o oposto.",
    accent: "#fda4ba",
  },
];

export default function Scene08() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { opacity, scale, blur, scrollYProgress } = useSceneCamera(containerRef, {
    entryScale: 0.97,
    exitScale: 1.03,
  });

  const lineWidth = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      className="scene-container scene-container--expressive"
      id="scene-08"
    >
      <div className="scene-bg bg-cream" />
      <div className="scene-grid opacity-20" />
      <AmbientTopGlow accentColor="251, 146, 60" />
      <div className="scene-grain" />

      <motion.div
        className="scene-content flex flex-col items-center max-w-[1100px] w-full px-6 relative z-10"
        style={{ opacity, scale, filter: blur }}
      >
        <span className="scene-index mb-10">08 / O Processo Artesanal</span>

        <h2 className="font-serif font-light text-[clamp(2.2rem,5vw,4.5rem)] text-center leading-[1.05] mb-6 text-[#1d1d1d] max-w-[800px]">
          A tecnologia é a{" "}
          <span className="italic text-accent">consequência</span>,
          <br />
          não o ponto de partida.
        </h2>

        {/* Horizontal progress line */}
        <div className="w-full max-w-[600px] h-[2px] bg-[rgba(29,29,29,0.08)] mb-16 relative overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#df7b66] via-[#fb923c] to-[#fda4ba]"
            style={{ width: lineWidth }}
          />
        </div>

        {/* Process blocks */}
        <div className="process-grid w-full">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="process-block"
              style={{ "--step-accent": step.accent } as CSSProperties}
            >
              <div className="process-block__accent" />
              <span className="process-block__number font-mono">{step.number}</span>
              <h3 className="process-block__title font-serif font-light">
                {step.title}
              </h3>
              <p className="process-block__desc font-sans">{step.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
