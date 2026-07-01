import React from "react";
import Image from "next/image";
import Typography from "./Typography";
import Button from "./Button";

export interface ProjectData {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  year: string;
  link: string;
  imageUrl?: string;
}

interface ProjectCardProps {
  project: ProjectData;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article 
      className="group flex flex-col gap-5 border border-border-custom bg-bg p-6 transition-all duration-300 hover:border-fg/40"
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* Project Card Image Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-accent/5 border-b border-border-custom">
        {project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center p-8 bg-accent/5">
            <Typography
              variant="meta"
              className="text-muted/40 font-mono tracking-widest text-center"
            >
              {"[ No. 0"}{index + 1}{" // "}{project.category}{" ]"}
            </Typography>
          </div>
        )}
        
        {/* Subtle top indicator */}
        <div className="absolute top-4 left-4 flex items-center justify-between right-4">
          <span className="bg-bg text-fg text-[10px] font-mono tracking-widest px-2.5 py-1 uppercase border border-border-custom">
            {project.category}
          </span>
          <span className="bg-bg text-fg text-[10px] font-mono tracking-widest px-2.5 py-1 uppercase border border-border-custom">
            {project.year}
          </span>
        </div>
      </div>

      {/* Information Grid */}
      <div className="flex flex-col flex-grow justify-between gap-6">
        <div className="flex flex-col gap-3">
          <Typography
            variant="h2"
            className="font-serif group-hover:text-accent transition-colors duration-300"
          >
            {project.title}
          </Typography>

          <Typography
            variant="body"
            className="text-sm line-clamp-3 text-muted/90"
          >
            {project.description}
          </Typography>
        </div>

        <div className="flex flex-col gap-4">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-mono tracking-wider text-muted/80 bg-accent/5 border border-border-custom/50 px-2 py-0.5"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Link */}
          <div className="pt-2 border-t border-border-custom/40 flex items-center justify-between">
            <Button
              variant="link"
              href={project.link}
              className="text-xs font-mono tracking-widest uppercase font-semibold text-fg"
            >
              Explore Project →
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
