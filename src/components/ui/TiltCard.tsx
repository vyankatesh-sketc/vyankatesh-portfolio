"use client";

import React, { useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: "burgundy" | "maroon" | "sage";
}

export function TiltCard({
  children,
  className = "",
  glowColor = "burgundy",
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -4; // max 4deg gentle tilt
    const rotY = ((x - centerX) / centerX) * 4;

    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseEnter = () => {
    if (!shouldReduceMotion) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  const glowStyles = {
    burgundy: "hover:border-[#7A1020]/40 hover:shadow-[0_12px_30px_rgba(122,16,32,0.08)]",
    maroon: "hover:border-[#4A0A14]/40 hover:shadow-[0_12px_30px_rgba(74,10,20,0.08)]",
    sage: "hover:border-[#A2B399] hover:shadow-[0_12px_30px_rgba(201,211,194,0.3)]",
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transition: { type: "spring", damping: 25, stiffness: 200 },
      }}
      style={{
        transformStyle: "preserve-3d",
      }}
      className={`relative rounded-2xl border border-[#EADBCE] bg-white shadow-[0_4px_20px_rgba(33,26,27,0.03)] transition-all duration-300 ${glowStyles[glowColor]} ${className}`}
    >
      <div style={{ transform: isHovered && !shouldReduceMotion ? "translateZ(8px)" : "none" }}>
        {children}
      </div>
    </motion.div>
  );
}
