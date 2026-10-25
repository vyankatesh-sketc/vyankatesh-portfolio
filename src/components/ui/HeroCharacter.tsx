"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

interface HeroCharacterProps {
  className?: string;
  variant?: "desktop" | "mobile";
}

/**
 * A polished, original anime-inspired vector illustration of a developer
 * in a stylish hoodie working at a laptop, crafted in the portfolio palette:
 * Burgundy (#7A1020), Cream (#FAF7F2), Blush (#E8C9C4), Sage (#C9D3C2), Charcoal (#211A1B).
 */
export function DeveloperIllustration({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative flex items-center justify-center select-none ${className}`}
      aria-label="Anime developer illustration"
    >
      <svg
        viewBox="0 0 500 500"
        className="w-full h-full max-w-[420px] drop-shadow-[0_15px_30px_rgba(122,16,32,0.12)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="auraGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E8C9C4" stopOpacity="0.45" />
            <stop offset="50%" stopColor="#FAF7F2" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#C9D3C2" stopOpacity="0.3" />
          </linearGradient>

          <linearGradient id="hoodieGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7A1020" />
            <stop offset="100%" stopColor="#4A0A14" />
          </linearGradient>

          <linearGradient id="laptopScreen" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#211A1B" />
            <stop offset="100%" stopColor="#352B2C" />
          </linearGradient>

          <linearGradient id="deskGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#EADBCE" />
            <stop offset="50%" stopColor="#FAF7F2" />
            <stop offset="100%" stopColor="#EADBCE" />
          </linearGradient>

          <filter id="screenGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Soft Ambient Background Aura Circle */}
        <circle cx="250" cy="240" r="190" fill="url(#auraGradient)" />
        <circle
          cx="250"
          cy="240"
          r="175"
          stroke="#E8C9C4"
          strokeWidth="1.5"
          strokeDasharray="8 6"
          opacity="0.8"
        />

        {/* Minimalist Floating Anime Accent Shapes */}
        <circle cx="90" cy="140" r="6" fill="#7A1020" opacity="0.6" />
        <rect x="410" y="160" width="10" height="10" rx="2" fill="#E8C9C4" opacity="0.7" transform="rotate(25 410 160)" />
        <circle cx="390" cy="310" r="5" fill="#C9D3C2" />
        <rect x="110" y="320" width="8" height="8" rx="2" fill="#7A1020" opacity="0.5" />

        {/* Minimalist Desk / Table Surface */}
        <ellipse cx="250" cy="430" rx="190" ry="22" fill="url(#deskGrad)" stroke="#EADBCE" strokeWidth="1.5" />
        <ellipse cx="250" cy="435" rx="150" ry="10" fill="#211A1B" opacity="0.06" />

        {/* Character Back & Shoulders (Seated) */}
        <path
          d="M175 320 C160 370, 140 420, 135 435 L365 435 C360 420, 340 370, 325 320 Z"
          fill="url(#hoodieGrad)"
        />

        {/* Hoodie Shadow & Creases */}
        <path
          d="M175 320 C200 340, 230 350, 250 350 C270 350, 300 340, 325 320 C310 380, 290 420, 250 425 C210 420, 190 380, 175 320 Z"
          fill="#4A0A14"
          opacity="0.6"
        />

        {/* Head & Hoodie Contour */}
        {/* Outer Hood */}
        <path
          d="M180 170 C170 100, 330 100, 320 170 C335 240, 310 270, 250 280 C190 270, 165 240, 180 170 Z"
          fill="url(#hoodieGrad)"
          stroke="#4A0A14"
          strokeWidth="2"
        />

        {/* Inner Hood Shadow */}
        <ellipse cx="250" cy="185" rx="60" ry="72" fill="#211A1B" />

        {/* Anime Hair / Bangs */}
        <path
          d="M200 160 C210 135, 290 135, 300 160 C305 180, 295 195, 290 175 C275 190, 255 170, 245 190 C235 170, 215 185, 205 170 C200 185, 195 175, 200 160 Z"
          fill="#3B1219"
        />

        {/* Anime Face Silhouette */}
        <path
          d="M210 185 C210 230, 230 245, 250 245 C270 245, 290 230, 290 185 Z"
          fill="#FDF8F3"
        />

        {/* Stylish Anime Glasses / Developer Frames */}
        <rect x="220" y="195" width="24" height="15" rx="3" fill="none" stroke="#7A1020" strokeWidth="2" />
        <rect x="256" y="195" width="24" height="15" rx="3" fill="none" stroke="#7A1020" strokeWidth="2" />
        <line x1="244" y1="202" x2="256" y2="202" stroke="#7A1020" strokeWidth="2" />

        {/* Soft Blush Cheeks */}
        <circle cx="218" cy="220" r="5" fill="#E8C9C4" opacity="0.9" />
        <circle cx="282" cy="220" r="5" fill="#E8C9C4" opacity="0.9" />

        {/* Headphone Band & Ear Cups */}
        <path
          d="M172 170 C165 110, 335 110, 328 170"
          fill="none"
          stroke="#FAF7F2"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <rect x="165" y="160" width="14" height="28" rx="6" fill="#FAF7F2" stroke="#7A1020" strokeWidth="2" />
        <rect x="321" y="160" width="14" height="28" rx="6" fill="#FAF7F2" stroke="#7A1020" strokeWidth="2" />

        {/* Hoodie High Collar & Drawstrings */}
        <path
          d="M220 260 L250 280 L280 260 L265 295 L250 290 L235 295 Z"
          fill="#FAF7F2"
          stroke="#EADBCE"
          strokeWidth="1.5"
        />
        <line x1="238" y1="285" x2="234" y2="330" stroke="#FAF7F2" strokeWidth="2" strokeLinecap="round" />
        <line x1="262" y1="285" x2="266" y2="330" stroke="#FAF7F2" strokeWidth="2" strokeLinecap="round" />
        <circle cx="234" cy="332" r="2.5" fill="#7A1020" />
        <circle cx="266" cy="332" r="2.5" fill="#7A1020" />

        {/* Hands on Laptop Keyboard */}
        <ellipse cx="205" cy="400" rx="14" ry="9" fill="#FDF8F3" stroke="#EADBCE" strokeWidth="1.5" />
        <ellipse cx="295" cy="400" rx="14" ry="9" fill="#FDF8F3" stroke="#EADBCE" strokeWidth="1.5" />

        {/* Modern Laptop Base */}
        <path
          d="M170 410 L330 410 L345 422 L155 422 Z"
          fill="#FAF7F2"
          stroke="#EADBCE"
          strokeWidth="1.5"
        />
        {/* Trackpad */}
        <rect x="235" y="413" width="30" height="7" rx="1.5" fill="#EADBCE" />

        {/* Laptop Display (Facing Screen / Angle) */}
        <path
          d="M185 320 L315 320 L325 408 L175 408 Z"
          fill="url(#laptopScreen)"
          stroke="#211A1B"
          strokeWidth="2"
        />

        {/* Glowing Code Lines on Screen */}
        <rect x="195" y="332" width="60" height="4" rx="2" fill="#C9D3C2" opacity="0.9" filter="url(#screenGlow)" />
        <rect x="195" y="342" width="90" height="4" rx="2" fill="#E8C9C4" opacity="0.85" />
        <rect x="205" y="352" width="70" height="3.5" rx="1.5" fill="#FAF7F2" opacity="0.8" />
        <rect x="205" y="362" width="85" height="3.5" rx="1.5" fill="#C9D3C2" opacity="0.8" />
        <rect x="195" y="372" width="50" height="3.5" rx="1.5" fill="#E8C9C4" opacity="0.9" />

        {/* Elegant Laptop Apple/Logo minimalist mark */}
        <circle cx="250" cy="386" r="4.5" fill="#FAF7F2" opacity="0.85" />

        {/* Ceramic Mug on Desk */}
        <rect x="365" y="405" width="16" height="20" rx="3" fill="#7A1020" stroke="#FAF7F2" strokeWidth="1.5" />
        <path d="M381 410 C387 410, 387 420, 381 420" fill="none" stroke="#FAF7F2" strokeWidth="1.5" />
        {/* Steam */}
        <path d="M370 398 Q373 393 370 388" fill="none" stroke="#E8C9C4" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
        <path d="M375 397 Q378 392 375 387" fill="none" stroke="#E8C9C4" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
      </svg>
    </div>
  );
}

export function HeroCharacter({ className = "", variant = "desktop" }: HeroCharacterProps) {
  const [imageError, setImageError] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Subtle floating motion, disabled if user prefers reduced motion
  const floatingAnimation = shouldReduceMotion
    ? {}
    : {
        y: [0, -6, 0],
        transition: {
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut" as const,
        },
      };

  return (
    <div
      className={`relative flex items-center justify-center ${
        variant === "mobile"
          ? "w-full max-w-[280px] sm:max-w-[320px] mx-auto my-6"
          : "w-full max-w-[420px] lg:max-w-[460px]"
      } ${className}`}
    >
      {/* Decorative Elegant Soft Frame */}
      <div
        className="absolute -inset-4 rounded-3xl border border-[#EADBCE] bg-[#FFFFFF]/70 shadow-[0_12px_36px_rgba(122,16,32,0.06)] backdrop-blur-sm -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[#7A1020]/40 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[#7A1020]/40 pointer-events-none"
        aria-hidden="true"
      />

      <motion.div
        animate={floatingAnimation}
        className="relative w-full aspect-square flex items-center justify-center p-3"
      >
        {!imageError ? (
          <div className="relative w-full h-full">
            <Image
              src="/character/hero.png"
              alt="Vyankatesh Kale - Developer Portrait"
              fill
              priority
              sizes="(max-width: 768px) 280px, (max-width: 1200px) 420px, 460px"
              className="object-contain drop-shadow-[0_15px_30px_rgba(122,16,32,0.12)]"
              onError={() => setImageError(true)}
            />
          </div>
        ) : (
          <DeveloperIllustration className="w-full h-full" />
        )}
      </motion.div>
    </div>
  );
}
