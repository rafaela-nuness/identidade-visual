import React from "react";
import Section from "../ui/Section";
import Typography from "../ui/Typography";

export default function AboutSection() {
  const CoreExpertise = [
    { title: "Frontend Engineering", desc: "Building modular, semantic React structures with TypeScript, Next.js, and modern CSS engines." },
    { title: "Design Systems", desc: "Establishing strict typography rules, spatial grids, and component libraries that scale." },
    { title: "Creative Coding", desc: "Intertwining subtle animations, interactive elements, and modern scroll hooks for immersive stories." },
  ];

  return (
    <Section id="about" borderTop className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Title / Header */}
        <div className="lg:col-span-4 flex flex-col gap-3">
          <Typography variant="meta" className="text-accent">
            Core Beliefs // Philosophy
          </Typography>
          <Typography variant="h1" className="font-serif">
            The Approach
          </Typography>
        </div>

        {/* Text Details & Capabilities Grid */}
        <div className="lg:col-span-8 flex flex-col gap-12">
          
          <div className="flex flex-col gap-6 max-w-3xl">
            <Typography variant="body-large">
              Design is not what it looks like; it is how it performs. I believe in establishing high typographic standards, robust architectural foundations, and absolute restraint in decorations.
            </Typography>
            <Typography variant="body">
              By prioritizing performance, accessibility (semantic elements, proper focus state, aria-indicators), and scalable code structures, we deliver digital platforms that stand the test of time. Every single element serves a clear utility.
            </Typography>
          </div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 pt-6 border-t border-border-custom/50">
            {CoreExpertise.map((item) => (
              <div key={item.title} className="flex flex-col gap-3">
                <Typography variant="h3" className="font-serif italic font-normal">
                  {item.title}
                </Typography>
                <Typography variant="body" className="text-sm">
                  {item.desc}
                </Typography>
              </div>
            ))}
          </div>

        </div>

      </div>
    </Section>
  );
}
