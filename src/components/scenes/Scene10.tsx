"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useSceneCamera, useParallax } from "@/hooks/useSceneCamera";

const LINKS = [
  { label: "Email", href: "mailto:contato@rafaelanunes.dev" },
  { label: "LinkedIn", href: "https://linkedin.com", external: true },
  { label: "GitHub", href: "https://github.com", external: true },
];

export default function Scene10() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { opacity, scale, blur, scrollYProgress } = useSceneCamera(containerRef, {
    fadeOut: false,
    entryBlur: 8,
    entryScale: 0.96,
  });

  const yPos = useParallax(scrollYProgress, [-20, 0]);

  return (
    <section
      ref={containerRef}
      className="scene-container scene-container--expressive scene-container--finale"
      id="scene-10"
    >
      <div className="scene-bg bg-cream" />
      <div className="finale-stripe" aria-hidden="true" />
      <div className="scene-grain" />

      <motion.div
        className="scene-content w-full max-w-[900px] px-6 relative z-10"
        style={{ opacity, scale, y: yPos, filter: blur }}
      >
        <div className="finale-composition text-center">
          <span className="scene-index">10 / Conversa</span>

          <h2 className="font-serif font-light text-[clamp(2.8rem,6vw,6rem)] leading-[0.95] text-[#1d1d1d] mt-8 mb-10">
            Toda grande experiência
            <br />
            começa com uma{" "}
            <span className="italic text-accent">conversa</span>.
          </h2>

          <p className="text-base text-[#555] font-sans max-w-[480px] mx-auto leading-relaxed mb-14">
            Se você busca criar conexões humanas através da tecnologia e direção de arte, sinta-se convidado a iniciar um diálogo.
          </p>

          <div className="finale-links">
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="finale-link font-mono"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-20 text-[10px] font-mono tracking-[0.35em] text-[#7d776f] uppercase">
            © {new Date().getFullYear()} Rafaela Nunes
          </div>
        </div>
      </motion.div>
    </section>
  );
}
