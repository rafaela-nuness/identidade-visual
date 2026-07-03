"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useSceneCamera, useParallax } from "@/hooks/useSceneCamera";
import Light from "@/components/ui/Light";
import ScrollHint from "@/components/ui/ScrollHint";
import SceneBreathing from "@/components/ui/SceneBreathing";
import { SCENE_INTRO } from "@/lib/animations";
import { CINEMATIC_EASE } from "@/lib/easings";

export default function Scene01() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { opacity, scale, blur, scrollYProgress } = useSceneCamera(containerRef);

  const labelY = useParallax(scrollYProgress, [-40, 40]);
  const titleY = useParallax(scrollYProgress, [-20, 20]);
  const textY = useParallax(scrollYProgress, [10, -10]);

  return (
    <section ref={containerRef} className="scene-container" id="scene-01">
      <div className="scene-bg bg-cream" />
      <SceneBreathing className="scene-bg bg-cream" />
      <div className="scene-grid opacity-30" />
      <div className="scene-grain" />

      <Light color="255, 247, 228" accentColor="254, 215, 170" intensity={0.95} scale={1.0} />

      <motion.div
        className="scene-content"
        style={{ opacity, scale, filter: blur }}
      >
        <div className="max-w-[950px] w-full px-6 flex flex-col items-start text-left relative z-10">
          <motion.span
            className="scene-label font-sans"
            style={{ y: labelY }}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 0.5, y: 0 }}
            transition={{ delay: SCENE_INTRO.light / 1000, duration: 1.2, ease: CINEMATIC_EASE }}
          >
            PORTFÓLIO DE EXPERIÊNCIA • RAFAELA NUNES
          </motion.span>

          <motion.h1
            className="scene-title text-display"
            style={{ y: titleY }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: SCENE_INTRO.title / 1000, duration: 1.5, ease: CINEMATIC_EASE }}
          >
            O que torna
            <br />
            uma experiência
            <br />
            <span className="italic font-serif">inesquecível?</span>
          </motion.h1>

          <motion.p
            className="scene-description font-sans"
            style={{ y: textY }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ delay: SCENE_INTRO.text / 1000, duration: 1.3, ease: CINEMATIC_EASE }}
          >
            Grandes experiências não começam pelo código.
            <br />
            Começam pela compreensão humana.
          </motion.p>

          <motion.div
            className="w-full mt-24 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: SCENE_INTRO.hint / 1000, duration: 1.0 }}
          >
            <ScrollHint />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
