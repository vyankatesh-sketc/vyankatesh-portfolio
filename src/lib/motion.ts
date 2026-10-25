import type { Variants } from "motion/react";

// Editorial Cubic Bezier Easing Curves (strictly typed as 4-tuples for motion)
export const EASING = {
  editorial: [0.22, 1, 0.36, 1] as [number, number, number, number],
  snappy: [0.16, 1, 0.3, 1] as [number, number, number, number],
  gentle: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
  smooth: [0.4, 0, 0.2, 1] as [number, number, number, number],
};

// Coordinated Hero Entrance Orchestrator
export const heroContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const heroItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: EASING.editorial,
    },
  },
};

// Word-by-word headline reveal with overflow mask
export const headlineWord: Variants = {
  hidden: { opacity: 0, y: "115%" },
  visible: {
    opacity: 1,
    y: "0%",
    transition: {
      duration: 0.8,
      ease: EASING.editorial,
    },
  },
};

// Line-by-line reveal
export const lineReveal: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: EASING.editorial,
    },
  },
};

// Smooth Editorial Fade-In-Up for Content Blocks
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: EASING.editorial,
    },
  },
};

// Fade In Down (for Navbar and top banners)
export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: EASING.editorial,
    },
  },
};

// Directional entrances for editorial split columns
export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: EASING.editorial,
    },
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: EASING.editorial,
    },
  },
};

// Hero Photo Reveal with clip-path mask and scale
export const heroPhotoReveal: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.92,
    clipPath: "inset(12% 0% 0% 0% round 24px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    clipPath: "inset(0% 0% 0% 0% round 24px)",
    transition: {
      duration: 1.1,
      delay: 0.25,
      ease: EASING.editorial,
    },
  },
};

// Offset Decorative Frame Animation
export const heroFrameReveal: Variants = {
  hidden: { opacity: 0, x: 0, y: 0 },
  visible: {
    opacity: 1,
    x: 18,
    y: 18,
    transition: {
      duration: 0.95,
      delay: 0.45,
      ease: EASING.editorial,
    },
  },
};

// Image Reveal with subtle scale and fade
export const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 0.94, y: 24 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: EASING.editorial,
    },
  },
};

// Staggered Grid Container (for skills, projects, cards)
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

// Child item for staggered grids
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: EASING.editorial,
    },
  },
};

// Subtle Card Elevation on Hover
export const cardHover = {
  rest: { y: 0, transition: { duration: 0.25, ease: "easeOut" } },
  hover: { y: -6, transition: { duration: 0.25, ease: "easeOut" } },
};

// Floating badge animation for portrait
export const floatingBadge: Variants = {
  initial: { opacity: 0, y: 15 },
  animate: {
    opacity: 1,
    y: [0, -6, 0],
    transition: {
      opacity: { duration: 0.6, delay: 0.8, ease: EASING.editorial },
      y: {
        duration: 4,
        repeat: Infinity,
        repeatType: "mirror" as const,
        ease: "easeInOut",
      },
    },
  },
};
