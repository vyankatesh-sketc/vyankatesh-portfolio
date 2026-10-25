"use client";

import React from "react";
import { motion } from "motion/react";
import { fadeInUp, EASING } from "@/lib/motion";

interface SectionHeaderProps {
  eyebrow?: string;
  chapter?: string;
  jpTitle?: string;
  title: string;
  highlightWord?: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  eyebrow,
  chapter,
  title,
  highlightWord,
  subtitle,
  align = "left",
}: SectionHeaderProps) {
  const eyebrowText = eyebrow || (chapter ? `${chapter} — OVERVIEW` : undefined);

  const renderTitle = () => {
    if (!highlightWord) {
      return title;
    }
    const parts = title.split(new RegExp(`(${highlightWord})`, "gi"));
    return parts.map((part, index) => {
      if (part.toLowerCase() === highlightWord.toLowerCase()) {
        return (
          <span
            key={index}
            className="text-[#7A1020] font-serif italic font-normal inline-block"
          >
            {part}
          </span>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3, margin: "0px 0px -40px 0px" }}
      className={`mb-12 sm:mb-16 ${
        align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-3xl"
      }`}
    >
      {/* Editorial Eyebrow */}
      {eyebrowText && (
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -10 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: EASING.editorial },
            },
          }}
          className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-white border border-[#E8E2D9] text-[#7A1020] text-xs font-mono font-semibold tracking-wider uppercase shadow-xs"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#7A1020]" />
          <span>{eyebrowText}</span>
        </motion.div>
      )}

      {/* Primary Section Title */}
      <motion.h2
        variants={fadeInUp}
        className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1C1917] font-semibold tracking-tight leading-[1.15]"
      >
        {renderTitle()}
      </motion.h2>

      {/* Subtitle Description revealing shortly after */}
      {subtitle && (
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 16 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, delay: 0.12, ease: EASING.editorial },
            },
          }}
          className="mt-3.5 text-base sm:text-lg text-[#57534E] font-inter font-normal leading-relaxed max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}

      {/* Decorative hairline */}
      <motion.div
        variants={{
          hidden: { scaleX: 0, opacity: 0 },
          visible: {
            scaleX: 1,
            opacity: 1,
            transition: { duration: 0.7, delay: 0.2, ease: EASING.editorial },
          },
        }}
        style={{ originX: align === "center" ? 0.5 : 0 }}
        className="mt-5 h-[1.5px] w-20 bg-gradient-to-r from-[#7A1020] to-[#E8C9C4]"
      />
    </motion.div>
  );
}
