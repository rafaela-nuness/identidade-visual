"use client";

import { motion } from "framer-motion";
import type { CSSProperties } from "react";
import { CINEMATIC_EASE } from "@/lib/easings";

export interface ProjectData {
  number: string;
  title: string;
  concept: string;
  role: string;
  year: string;
  link: string;
  gradient: string;
  accent: string;
}

interface ProjectBlockProps {
  project: ProjectData;
  index: number;
}

export default function ProjectBlock({ project, index }: ProjectBlockProps) {
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="project-block group relative flex flex-col justify-between overflow-hidden"
      style={{ "--project-accent": project.accent } as CSSProperties}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.9, delay: index * 0.08, ease: CINEMATIC_EASE }}
    >
      {/* Visual layer */}
      <div
        className="project-block__visual absolute inset-0"
        style={{ background: project.gradient }}
      />
      <div className="project-block__grain absolute inset-0 opacity-20" />
      <div className="project-block__overlay absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full p-6 md:p-8">
        <div className="flex items-start justify-between gap-4">
          <span className="project-block__number font-serif italic">
            {project.number}
          </span>
          <span className="font-mono text-[10px] tracking-widest text-white/70 uppercase">
            {project.year}
          </span>
        </div>

        <div className="flex flex-col gap-4 mt-auto">
          <h3 className="project-block__title font-serif font-light text-white">
            {project.title}
          </h3>
          <p className="project-block__desc font-sans text-white/80 leading-relaxed">
            {project.concept}
          </p>
          <div className="flex items-center justify-between gap-4 pt-2">
            <span className="project-block__tag font-mono text-[9px] tracking-widest uppercase text-white/60">
              {project.role}
            </span>
            <span className="project-block__arrow font-mono text-[10px] tracking-widest uppercase text-white group-hover:translate-x-1 transition-transform duration-300">
              Abrir →
            </span>
          </div>
        </div>
      </div>
    </motion.a>
  );
}
