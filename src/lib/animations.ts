// Physics-based spring configurations for Framer Motion.
// stiffness (80-140), damping (18-30), mass (0.6-1.2) as per requirements.

export const LIGHT_SPRING = {
  stiffness: 80,
  damping: 22,
  mass: 0.8,
};

export const PARALLAX_SPRING = {
  stiffness: 90,
  damping: 25,
  mass: 1.0,
};

export const TEXT_SPRING = {
  stiffness: 120,
  damping: 28,
  mass: 0.7,
};

export const QUICK_SPRING = {
  stiffness: 140,
  damping: 18,
  mass: 0.6,
};

/** Standard scene intro delays (ms) — background → light → title → text */
export const SCENE_INTRO = {
  background: 0,
  light: 300,
  title: 600,
  text: 900,
  hint: 1400,
} as const;
