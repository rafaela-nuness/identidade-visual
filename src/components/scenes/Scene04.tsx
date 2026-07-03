"use client";

import { useRef } from "react";
import { motion, useTransform } from "framer-motion";
import { useSceneCamera, useParallax } from "@/hooks/useSceneCamera";
import Light from "@/components/ui/Light";

export default function Scene04() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { opacity, scale, blur, scrollYProgress } =
    useSceneCamera(containerRef, { entryScale: 0.95, exitScale: 1.05 });

  const lineHeight = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);
  const lineGlow = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 1, 0.6]);
  const lineShadow = useTransform(
    lineGlow,
    (v) => `0 0 ${12 * v}px rgba(223, 123, 102, ${0.4 * v})`
  );

  const textY1 = useParallax(scrollYProgress, [-20, 20]);
  const textY3 = useParallax(scrollYProgress, [20, -20]);

  return (
    <section
      ref={containerRef}
      className="scene-container flex items-center justify-center"
      id="scene-04"
    >
      <div className="scene-bg bg-ivory" />
      <div className="scene-grid opacity-20" />
      <div className="scene-grain" />

      <Light color="255, 248, 235" accentColor="253, 186, 116" intensity={0.8} scale={1.1} />

      <motion.div
        className="scene-content flex flex-col md:flex-row items-center gap-12 md:gap-24 max-w-[1000px] w-full px-6 relative z-10"
        style={{ opacity, scale, filter: blur }}
      >
        <motion.div style={{ y: textY1 }} className="flex-1 text-left flex flex-col gap-4">
          <span className="scene-index">04 / A Luz Guia</span>
          <h3 className="font-serif italic text-3xl md:text-4xl text-[#555] font-light leading-relaxed">
            Há um feixe sutil que liga todas as coisas.
          </h3>
        </motion.div>

        <div className="h-[200px] w-[1px] bg-[rgba(29,29,29,0.06)] relative flex items-start justify-center">
          <motion.div
            className="w-[2px] bg-gradient-to-b from-[#df7b66] to-[#eac7b8]"
            style={{ height: lineHeight, boxShadow: lineShadow }}
          />
        </div>

        <motion.div style={{ y: textY3 }} className="flex-1 text-left flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h4 className="font-sans font-medium text-xs tracking-widest text-[#1d1d1d] uppercase">
              A Tecnologia
            </h4>
            <p className="text-sm text-[#555] font-sans">
              Resolve os problemas lógicos. Traz estrutura, robustez e funcionalidade.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="font-sans font-medium text-xs tracking-widest text-[#1d1d1d] uppercase">
              O Design
            </h4>
            <p className="text-sm text-[#555] font-sans">
              Comunica a alma do produto. Traz harmonia, clareza e ritmo visual.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="font-sans font-medium text-xs tracking-widest text-[#1d1d1d] uppercase">
              A Experiência
            </h4>
            <p className="text-sm font-sans font-medium text-accent">
              Acontece no espaço onde ambos se dissolvem e tornam-se sentimentos.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
