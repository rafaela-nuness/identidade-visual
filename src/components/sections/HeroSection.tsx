import React from "react";
import Typography from "../ui/Typography";
import Button from "../ui/Button";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[85vh] flex-col justify-center py-20">
      {/* Decorative clean line layout */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-border-custom" />

      <div className="flex flex-col gap-8 md:gap-12 animate-fade-in-up">
        {/* Editorial Subtitle Meta Tag */}
        <div className="flex items-center gap-3">
          <span className="h-[1px] w-8 bg-accent" />
          <Typography variant="meta" className="text-accent font-semibold tracking-widest">
            Portfolio Foundation
          </Typography>
        </div>

        {/* Large Display Typography Header */}
        <div className="flex flex-col gap-6 max-w-4xl">
          <Typography variant="display" className="font-light">
            Weaving digital experiences through <span className="font-serif italic font-normal text-accent">minimalist code</span> and intentional design.
          </Typography>
          
          <Typography variant="body-large" className="max-w-2xl text-muted/90">
            A premium architectural baseline for creative professionals. Engineered with high-contrast layouts, custom type hierarchies, and modern Next.js foundations.
          </Typography>
        </div>

        {/* Action triggers */}
        <div className="flex flex-wrap gap-4 pt-4">
          <Button variant="primary" href="#projects">
            View Curated Work
          </Button>
          <Button variant="secondary" href="#contact">
            Get In Touch
          </Button>
        </div>
      </div>
      
      {/* Minimal bottom layout stats */}
      <div className="absolute bottom-0 left-0 w-full border-t border-border-custom pt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between animate-fade-in-up-delay">
        <Typography variant="meta" className="text-muted/65">
          Based in Brazil // Available Worldwide
        </Typography>
        <Typography variant="meta" className="text-muted/65">
          Est. ©2026 // Next.js & Tailwind CSS v4
        </Typography>
      </div>
    </section>
  );
}

