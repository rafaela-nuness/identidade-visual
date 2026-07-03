"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useSceneCamera, useParallax } from "@/hooks/useSceneCamera";
import AwakeningWaves from "@/components/ui/AwakeningWaves";
import SceneBreathing from "@/components/ui/SceneBreathing";
import TextReveal from "@/components/ui/TextReveal";

export default function Scene02() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { opacity, scale, blur, scrollYProgress } = useSceneCamera(containerRef);

  const textY1 = useParallax(scrollYProgress, [-25, 25]);
  const textY2 = useParallax(scrollYProgress, [15, -15]);

  return (
    <section ref={containerRef} className="scene-container" id="scene-02">
      <div className="scene-bg bg-peach" />
      <SceneBreathing />
      <AwakeningWaves />
      <div className="scene-grid opacity-20" />
      <div className="scene-grain" />

      <motion.div
        className="scene-content"
        style={{ opacity, scale, filter: blur }}
      >
        <div className="max-w-[950px] w-full px-6 flex flex-col items-start text-left relative z-10">
          <motion.div style={{ y: textY1 }} className="mb-6">
            <span className="scene-index">02 / O Despertar</span>
          </motion.div>

          <h2 className="text-display leading-[1.05] tracking-tight max-w-[800px] mb-12">
            <TextReveal text="A página desperta. Cores nascem do silêncio." delay={0.2} />
          </h2>

          <motion.p
            className="scene-description font-sans max-w-[560px] mt-0"
            style={{ y: textY2 }}
          >
            Não se trata de programar telas. Trata-se de projetar espaços.
            Onde a tecnologia se curva para dar lugar ao sentimento,
            e as cores revelam que você está diante de algo{" "}
            <span className="font-serif italic text-accent">vivo</span>.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
