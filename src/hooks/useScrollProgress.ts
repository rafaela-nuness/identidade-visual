"use client";

import { useScroll, useSpring } from "framer-motion";
import { RefObject } from "react";
import { PARALLAX_SPRING } from "../lib/animations";

export function useScrollProgress(ref: RefObject<HTMLElement | null>) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // Triggers when element enters viewport to when it leaves
  });

  const smoothProgress = useSpring(scrollYProgress, PARALLAX_SPRING);

  return { scrollYProgress, smoothProgress };
}
