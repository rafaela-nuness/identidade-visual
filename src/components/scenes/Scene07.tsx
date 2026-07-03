"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useSceneCamera } from "@/hooks/useSceneCamera";
import ProjectBlock, { ProjectData } from "@/components/ui/ProjectBlock";
import AmbientTopGlow from "@/components/ui/AmbientTopGlow";

const PROJECTS: ProjectData[] = [
  {
    number: "01",
    title: "La Velle",
    concept: "E-commerce de moda feminina. Identidade elegante, vitrine curada e experiência de compra sofisticada.",
    role: "Front-end & UI",
    year: "2025",
    link: "https://rafaela-nuness.github.io/lavelle/",
    gradient: "linear-gradient(145deg, #2a1f1a 0%, #8b6f5e 45%, #e8d5c4 100%)",
    accent: "#c9a99a",
  },
  {
    number: "02",
    title: "Sabor Tropical",
    concept: "Mini e-commerce de sucos naturais. Frescor visual, carrinho funcional e estética que evoca bem-estar.",
    role: "Front-end",
    year: "2025",
    link: "https://rafaela-nuness.github.io/intermediario-suco/",
    gradient: "linear-gradient(145deg, #14532d 0%, #4ade80 50%, #fb923c 100%)",
    accent: "#86efac",
  },
  {
    number: "03",
    title: "Clínica Delta",
    concept: "Sistema de gestão clínica. Fluxos organizados e interface pensada para o dia a dia de profissionais de saúde.",
    role: "Front-end & UX",
    year: "2025",
    link: "https://sistema-clinica-delta.vercel.app/",
    gradient: "linear-gradient(145deg, #0c4a6e 0%, #38bdf8 55%, #e0f2fe 100%)",
    accent: "#7dd3fc",
  },
  {
    number: "04",
    title: "Nexo",
    concept: "Plataforma de acompanhamento de progresso. Clareza de dados, navegação intuitiva e estrutura objetiva.",
    role: "Front-end",
    year: "2025",
    link: "https://sistemaprogesso.vercel.app/",
    gradient: "linear-gradient(145deg, #3b0764 0%, #a78bfa 50%, #ede9fe 100%)",
    accent: "#c4b5fd",
  },
  {
    number: "05",
    title: "Portfólio Acadêmico",
    concept: "Linha do tempo interativa da jornada de desenvolvimento. Narrativa pessoal e evolução documentada.",
    role: "Front-end & Narrativa",
    year: "2025",
    link: "https://rafaela-nuness.github.io/Atividade-final/",
    gradient: "linear-gradient(145deg, #431407 0%, #df7b66 50%, #fce8e4 100%)",
    accent: "#df7b66",
  },
  {
    number: "06",
    title: "Sistema Solar",
    concept: "Experiência educativa imersiva. Planetas interativos, fundo estrelado e ciência como descoberta visual.",
    role: "Front-end & Motion",
    year: "2025",
    link: "https://rafaela-nuness.github.io/Solar/",
    gradient: "linear-gradient(145deg, #020617 0%, #1e3a5f 40%, #fbbf24 100%)",
    accent: "#fbbf24",
  },
];

export default function Scene07() {
  const headerRef = useRef<HTMLDivElement>(null);
  const { opacity, scale, blur } = useSceneCamera(headerRef, {
    entryScale: 0.97,
    fadeOut: false,
  });

  return (
    <section className="scene-section scene-section--atelier" id="scene-07">
      {/* Background layers — span full section */}
      <div className="scene-bg bg-ivory scene-section__bg" />
      <div className="scene-grid opacity-25 scene-section__bg" />
      <AmbientTopGlow accentColor="223, 123, 102" />
      <div className="scene-grain scene-section__bg" />

      {/* Intro header */}
      <div ref={headerRef} className="scene-section__header">
        <motion.div
          className="scene-section__header-inner"
          style={{ opacity, scale, filter: blur }}
        >
          <span className="scene-index">07 / Ateliê de Criação</span>
          <h2 className="atelier-title font-serif font-light">
            Obras que
            <br />
            <span className="italic text-accent">nasceram</span> de perguntas.
          </h2>
          <p className="atelier-subtitle font-sans">
            Cada projeto é uma exposição — processo, intenção e resultado reunidos em uma experiência.
          </p>
        </motion.div>
      </div>

      {/* Projects grid — no camera fade, scroll-reveal per block */}
      <div className="scene-section__body">
        <div className="projects-grid">
          {PROJECTS.map((proj, idx) => (
            <ProjectBlock key={proj.number} project={proj} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
