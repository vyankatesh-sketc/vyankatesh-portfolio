"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";

interface Petal {
  id: number;
  startX: number;
  size: number;
  duration: number;
  delay: number;
  rotateStart: number;
  rotateEnd: number;
  swayAmount: number;
  color: string;
}

const STATIC_PETALS: Petal[] = [
  { id: 0, startX: 8, size: 16, duration: 14, delay: 0, rotateStart: 20, rotateEnd: 320, swayAmount: 25, color: "#E8C9C4" },
  { id: 1, startX: 18, size: 14, duration: 18, delay: 3, rotateStart: 45, rotateEnd: 290, swayAmount: 30, color: "#F4E9DC" },
  { id: 2, startX: 28, size: 18, duration: 12, delay: 1, rotateStart: 10, rotateEnd: 350, swayAmount: 20, color: "#E8C9C4" },
  { id: 3, startX: 38, size: 15, duration: 16, delay: 5, rotateStart: 80, rotateEnd: 260, swayAmount: 35, color: "#C9D3C2" },
  { id: 4, startX: 48, size: 20, duration: 13, delay: 2, rotateStart: 30, rotateEnd: 380, swayAmount: 25, color: "#E8C9C4" },
  { id: 5, startX: 58, size: 14, duration: 19, delay: 4, rotateStart: 90, rotateEnd: 310, swayAmount: 28, color: "#F4E9DC" },
  { id: 6, startX: 68, size: 17, duration: 15, delay: 0.5, rotateStart: 15, rotateEnd: 330, swayAmount: 22, color: "#E8C9C4" },
  { id: 7, startX: 78, size: 13, duration: 17, delay: 6, rotateStart: 60, rotateEnd: 280, swayAmount: 32, color: "#C9D3C2" },
  { id: 8, startX: 88, size: 19, duration: 14, delay: 2.5, rotateStart: 40, rotateEnd: 360, swayAmount: 26, color: "#E8C9C4" },
  { id: 9, startX: 95, size: 15, duration: 16, delay: 4.5, rotateStart: 70, rotateEnd: 290, swayAmount: 24, color: "#F4E9DC" },
  { id: 10, startX: 12, size: 18, duration: 15, delay: 7, rotateStart: 35, rotateEnd: 340, swayAmount: 30, color: "#E8C9C4" },
  { id: 11, startX: 52, size: 14, duration: 13, delay: 8, rotateStart: 50, rotateEnd: 300, swayAmount: 20, color: "#F4E9DC" },
];

export function SakuraPetals() {
  const shouldReduceMotion = useReducedMotion();

  // When prefers-reduced-motion is enabled, omit animated petals completely
  if (shouldReduceMotion) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-10"
      aria-hidden="true"
    >
      {STATIC_PETALS.map((petal) => (
        <motion.div
          key={petal.id}
          initial={{
            y: -40,
            x: `${petal.startX}vw`,
            opacity: 0,
            rotate: petal.rotateStart,
          }}
          animate={{
            y: "105vh",
            x: [
              `${petal.startX}vw`,
              `${petal.startX + (petal.swayAmount / 20)}vw`,
              `${petal.startX - (petal.swayAmount / 20)}vw`,
              `${petal.startX}vw`,
            ],
            opacity: [0, 0.7, 0.85, 0],
            rotate: petal.rotateEnd,
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            width: petal.size,
            height: petal.size * 1.3,
          }}
        >
          <svg
            viewBox="0 0 24 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full drop-shadow-[0_2px_4px_rgba(20,9,11,0.25)]"
          >
            {/* Elegant stylized curved anime cherry blossom petal */}
            <path
              d="M12 2 C18 6, 23 15, 20 25 C17 30, 13 31, 12 28 C11 31, 7 30, 4 25 C1 15, 6 6, 12 2 Z"
              fill={petal.color}
              fillOpacity={0.65}
            />
            {/* Subtle petal spine highlight */}
            <path
              d="M12 4 Q13 16 12 26"
              stroke="#FFF"
              strokeOpacity={0.4}
              strokeWidth={0.7}
              fill="none"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
