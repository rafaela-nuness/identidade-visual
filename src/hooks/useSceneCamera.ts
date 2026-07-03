"use client";

import { MotionValue, useTransform } from "framer-motion";
import { RefObject } from "react";
import { useScrollProgress } from "./useScrollProgress";

interface SceneCameraOptions {
  fadeOut?: boolean;
  entryBlur?: number;
  exitBlur?: number;
  entryScale?: number;
  exitScale?: number;
}

interface SceneCameraResult {
  scrollYProgress: MotionValue<number>;
  opacity: MotionValue<number>;
  scale: MotionValue<number>;
  blur: MotionValue<string>;
}

export function useSceneCamera(
  ref: RefObject<HTMLElement | null>,
  options: SceneCameraOptions = {}
): SceneCameraResult {
  const {
    fadeOut = true,
    entryBlur = 8,
    exitBlur = 12,
    entryScale = 0.94,
    exitScale = 1.04,
  } = options;

  const { smoothProgress } = useScrollProgress(ref);

  const opacity = useTransform(
    smoothProgress,
    fadeOut ? [0, 0.25, 0.7, 1] : [0, 0.3, 1],
    fadeOut ? [0, 1, 1, 0] : [0, 1, 1]
  );

  const scale = useTransform(
    smoothProgress,
    fadeOut ? [0, 0.3, 0.7, 1] : [0, 0.3, 1],
    fadeOut ? [entryScale, 1, 1, exitScale] : [entryScale, 1, 1]
  );

  const blur = useTransform(
    smoothProgress,
    fadeOut ? [0, 0.25, 0.7, 1] : [0, 0.3, 1],
    fadeOut
      ? [`blur(${entryBlur}px)`, "blur(0px)", "blur(0px)", `blur(${exitBlur}px)`]
      : [`blur(${entryBlur}px)`, "blur(0px)", "blur(0px)"]
  );

  return { scrollYProgress: smoothProgress, opacity, scale, blur };
}

/** Subtle parallax shift mapped to scene scroll progress */
export function useParallax(
  progress: MotionValue<number>,
  range: [number, number]
) {
  return useTransform(progress, [0, 1], range);
}
