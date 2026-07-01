"use client";

import React, { useEffect, useState } from "react";
import Container from "../ui/Container";
import Typography from "../ui/Typography";
import Button from "../ui/Button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`
        sticky top-0 z-50 w-full transition-all duration-300
        ${isScrolled ? "bg-bg/95 border-b border-border-custom backdrop-blur-sm py-4" : "bg-transparent py-6"}
      `}
    >
      <Container className="flex items-center justify-between">
        <a href="#" className="group">
          <Typography
            variant="h3"
            as="span"
            className="font-serif tracking-tight font-semibold"
          >
            Studio
            <span className="text-accent group-hover:translate-x-1 inline-block transition-transform duration-200 ml-0.5">.</span>
          </Typography>
        </a>

        <nav className="flex items-center gap-6 md:gap-8">
          <a
            href="#projects"
            onClick={(e) => handleScrollTo(e, "projects")}
            className="text-sm font-medium text-muted hover:text-fg transition-colors duration-200"
          >
            Projects
          </a>
          <a
            href="#about"
            onClick={(e) => handleScrollTo(e, "about")}
            className="text-sm font-medium text-muted hover:text-fg transition-colors duration-200"
          >
            About
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, "contact")}
            className="text-sm font-medium text-muted hover:text-fg transition-colors duration-200"
          >
            Contact
          </a>
          <Button
            variant="primary"
            size="sm"
            href="#contact"
            onClick={(e) => handleScrollTo(e, "contact")}
            className="hidden sm:inline-flex"
          >
            Connect
          </Button>
        </nav>
      </Container>
    </header>
  );
}
