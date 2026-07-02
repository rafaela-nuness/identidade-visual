"use client";

import { motion, useSpring } from "framer-motion";
import { useRef } from "react";
import Typography from "../ui/Typography";
import styles from "./Scene01.module.css";

export default function Scene01() {
  const sectionRef = useRef<HTMLElement>(null);

  const mouseX = useSpring(0, {
    stiffness: 45,
    damping: 18,
  });

  const mouseY = useSpring(0, {
    stiffness: 45,
    damping: 18,
  });

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    if (!sectionRef.current) return;

    const rect = sectionRef.current.getBoundingClientRect();

    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className={styles.scene}
    >
      <div className={styles.texture} />

      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
        }}
        className={styles.light}
      />

      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <Typography
          variant="display"
          className="font-light leading-[1.05]"
        >
          O que torna uma{" "}
          <span className="italic font-normal">
            experiência
          </span>{" "}
          inesquecível?
        </Typography>

        <Typography
          variant="body-large"
          className={styles.subtitle}
        >
          Talvez não seja apenas aquilo que vemos.
        </Typography>
      </motion.div>

      <div className={styles.scroll}>
        <span>Scroll</span>

        <div className={styles.line}>
          <div className={styles.dot} />
        </div>
      </div>
    </section>
  );
}