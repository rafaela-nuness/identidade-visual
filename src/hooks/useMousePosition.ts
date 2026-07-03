"use client";

import { useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import { LIGHT_SPRING } from "@/lib/animations";
import { useReducedMotion } from "./useReducedMotion";

export function useMousePosition() {
  const reduced = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = reduced
    ? { stiffness: 300, damping: 50, mass: 0.5 }
    : LIGHT_SPRING;

  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    mouseX.set(centerX);
    mouseY.set(centerY);

    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return { mouseX, mouseY, springX, springY };
}
