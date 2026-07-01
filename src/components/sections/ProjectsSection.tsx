import React from "react";
import Section from "../ui/Section";
import Typography from "../ui/Typography";
import ProjectCard, { ProjectData } from "../ui/ProjectCard";

const SAMPLE_PROJECTS: ProjectData[] = [
  {
    id: "proj-1",
    title: "Archetype Brand System",
    category: "Visual Identity",
    description: "A complete visual identity system built for a modern architectural firm. Grounded in grid structures, typographic alignments, and a neutral, high-contrast palette.",
    tags: ["Identity", "Editorial", "Brand Guidelines"],
    year: "2025",
    link: "#",
  },
  {
    id: "proj-2",
    title: "Ethereal Editorial Engine",
    category: "Web Engineering",
    description: "A high-performance headless rendering engine built with Next.js App Router and Tailwind CSS, achieving instantaneous loading speeds and perfect SEO structures.",
    tags: ["React 19", "Next.js", "Performance Optimization"],
    year: "2026",
    link: "#",
  },
  {
    id: "proj-3",
    title: "Monolith Exhibition Site",
    category: "Digital Design",
    description: "An immersive virtual museum environment designed to highlight industrial design archives, emphasizing large layouts and physical magazine-like print style.",
    tags: ["WebGL", "Three.js", "Art Direction"],
    year: "2026",
    link: "#",
  },
];

export default function ProjectsSection() {
  return (
    <Section id="projects" borderTop className="relative">
      <div className="flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-border-custom/50">
          <div className="flex flex-col gap-3 max-w-xl">
            <Typography variant="meta" className="text-accent">
              Curated Output // Selected Works
            </Typography>
            <Typography variant="h1" className="font-serif">
              Design & Development
            </Typography>
          </div>
          <Typography variant="body" className="max-w-xs text-sm text-muted">
            Exploring the overlap between technical rigor and visual simplicity. Every project is an exercise in restraint.
          </Typography>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SAMPLE_PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
