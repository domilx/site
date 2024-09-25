"use client";

import React, { useRef } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  UseInViewOptions,
  Variants,
} from "framer-motion";

type MarginType = UseInViewOptions["margin"];

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  variant?: {
    hidden: { y: number };
    visible: { y: number };
  };
  duration?: number;
  delay?: number;
  yOffset?: number;
  inView?: boolean;
  inViewMargin?: MarginType;
  blur?: string;
}

interface BlueFadeStaggerChildrenProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  initialDelay?: number;
  blurFadeProps?: Omit<BlurFadeProps, "children">;
  inView?: boolean;
  delay?: number;
  inViewMargin?: MarginType;
  yOffset?: number;
}

export default function BlurFade({
  children,
  className,
  variant,
  duration = 0.4,
  delay = 0,
  yOffset = 8,
  inView = false,
  inViewMargin = "-50px",
  blur = "6px",
}: BlurFadeProps) {
  const ref = useRef(null);
  const inViewResult = useInView(ref, { once: true, margin: inViewMargin });
  const isInView = !inView || inViewResult;
  const defaultVariants: Variants = {
    hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
    visible: { y: -yOffset, opacity: 1, filter: `blur(0px)` },
  };
  const combinedVariants = variant || defaultVariants;
  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        exit="hidden"
        variants={combinedVariants}
        transition={{
          delay: 0.04 + delay,
          duration,
          ease: "easeOut",
        }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export function BlueFadeStaggerChildren({
  children,
  className,
  staggerDelay = 0.04,
  blurFadeProps = {},
  delay = 0,
  yOffset = 8,
  inView = false,
  inViewMargin = "-50px",
}: BlueFadeStaggerChildrenProps) {
  const ref = useRef(null);
  const inViewResult = useInView(ref, { once: true, margin: inViewMargin });
  const isInView = !inView || inViewResult;

  return (
    <AnimatePresence>
      <motion.div ref={ref} className={className}>
        {React.Children.map(children, (child, index) => (
          <BlurFade
            key={index}
            {...blurFadeProps}
            yOffset={yOffset}
            delay={delay ? delay + index * staggerDelay : index * staggerDelay}
            inView={isInView}
          >
            {child}
          </BlurFade>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
