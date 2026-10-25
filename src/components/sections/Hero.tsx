"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { profileData } from "@/data/profile";
import { siteConfig } from "@/data/site";
import { motion, useScroll, useTransform } from "motion/react";
import {
  heroContainer,
  heroItem,
  headlineWord,
  heroPhotoReveal,
  heroFrameReveal,
  floatingBadge
} from "@/lib/motion";
import { ArrowDown, Download, Sparkles, MapPin, Code2 } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/Icons";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  // Restrained Parallax for the editorial photograph
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const photoY = useTransform(scrollYProgress, [0, 1], [0, 48]);
  const frameY = useTransform(scrollYProgress, [0, 1], [0, 24]);

  const nameWords = profileData.fullName.split(" ");

  return (
    <section
      ref={containerRef}
      id="hero"
      aria-label="Introduction &amp; Hero"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-8 pb-16 sm:py-24 bg-[#FAF7F2] overflow-hidden"
    >
      {/* Editorial Decorative Background Elements */}
      <div
        className="absolute inset-0 opacity-[0.25] bg-[radial-gradient(#7A1020_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none"
        aria-hidden="true"
      />
      
      {/* Subtle Warm Gradient Accent in Top Right */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-[#E8C9C4]/35 to-[#7A1020]/10 blur-3xl pointer-events-none -z-0"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Coordinated Typography & Staggered Reveal */}
          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6 sm:space-y-8"
          >
            {/* 1. Introductory Chapter Pill */}
            <motion.div variants={heroItem} className="inline-flex items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E8E2D9] text-[#7A1020] font-mono text-xs font-semibold uppercase tracking-wider shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#7A1020] animate-pulse" />
                <span>「序章」// CHAPTER 00 • UNDERGRADUATE</span>
              </div>
            </motion.div>

            {/* 2. Line-by-Line & Word-by-Word Editorial Headline */}
            <div className="space-y-2">
              {/* Line 1: Name with Overflow Mask Reveal */}
              <div className="overflow-hidden flex flex-wrap gap-x-3 sm:gap-x-4">
                {nameWords.map((word, idx) => (
                  <span key={idx} className="inline-block overflow-hidden py-1">
                    <motion.span
                      variants={headlineWord}
                      className="inline-block text-4xl sm:text-6xl lg:text-7xl font-serif text-[#1C1917] font-bold tracking-tight"
                    >
                      {word}
                    </motion.span>
                  </span>
                ))}
              </div>

              {/* Line 2: Role with Italic Burgundy Accent */}
              <motion.div variants={heroItem} className="overflow-hidden pt-1">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#57534E] font-medium tracking-tight">
                  Aspiring{" "}
                  <span className="text-[#7A1020] italic font-semibold">
                    Software Developer
                  </span>{" "}
                  &amp; Engineer
                </h2>
              </motion.div>
            </div>

            {/* 3. Concise Factual Introduction */}
            <motion.p
              variants={heroItem}
              className="text-base sm:text-lg text-[#57534E] font-inter leading-relaxed max-w-2xl font-normal"
            >
              Third-year B.Tech Computer Science and Engineering student at Joginpally B.R. Engineering College, Hyderabad. Passionate about algorithms, full-stack systems, and engineering practical AI-driven software.
            </motion.p>

            {/* 4. Sequential CTA Buttons & Working Profiles */}
            <motion.div
              variants={heroItem}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              {/* Primary Button: View Projects */}
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#projects"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#7A1020] text-[#FAF7F2] font-inter text-sm font-semibold hover:bg-[#4A0A14] shadow-md hover:shadow-lg transition-all focus-visible:ring-2 focus-visible:ring-[#7A1020] focus-visible:outline-none"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </motion.a>

              {/* Secondary Button: Download Resume */}
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="/resume.pdf"
                download="Vyankatesh_Kale_Resume.pdf"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white text-[#1C1917] font-inter text-sm font-semibold border border-[#E8E2D9] hover:border-[#7A1020] hover:text-[#7A1020] shadow-xs hover:shadow transition-all focus-visible:ring-2 focus-visible:ring-[#7A1020] focus-visible:outline-none"
              >
                <Download className="w-4 h-4 text-[#7A1020] group-hover:-translate-y-0.5 transition-transform" />
                <span>Download Resume</span>
              </motion.a>

              {/* Verified GitHub and LinkedIn Links */}
              <div className="flex items-center gap-2.5 sm:ml-2 pt-2 sm:pt-0">
                <motion.a
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  whileTap={{ scale: 0.95 }}
                  href={siteConfig.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-3 rounded-full bg-white border border-[#E8E2D9] text-[#1C1917] hover:text-[#7A1020] hover:border-[#7A1020] shadow-xs hover:shadow transition-all focus-visible:ring-2 focus-visible:ring-[#7A1020] focus-visible:outline-none"
                >
                  <Github className="w-4 h-4" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, rotate: -3 }}
                  whileTap={{ scale: 0.95 }}
                  href={siteConfig.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-3 rounded-full bg-white border border-[#E8E2D9] text-[#1C1917] hover:text-[#7A1020] hover:border-[#7A1020] shadow-xs hover:shadow transition-all focus-visible:ring-2 focus-visible:ring-[#7A1020] focus-visible:outline-none"
                >
                  <Linkedin className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>

            {/* 5. Quick Editorial Academic Info Bar */}
            <motion.div
              variants={heroItem}
              className="pt-6 flex flex-wrap items-center gap-4 text-xs font-mono text-[#6B6262] border-t border-[#E8E2D9]"
            >
              <div className="flex items-center gap-1.5">
                <span className="font-semibold text-[#7A1020]">DEGREE:</span>
                <span>B.Tech CSE (3rd Year)</span>
              </div>
              <span className="text-[#E8E2D9]">•</span>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#7A1020]" />
                <span>Joginpally B.R. Engineering College</span>
              </div>
              <span className="text-[#E8E2D9]">•</span>
              <div className="flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-[#7A1020]" />
                <span>Hyderabad, India</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Photo A (Beside Sea, Black Patterned Shirt, White Trousers) */}
          <div className="lg:col-span-5 flex justify-center items-center relative pt-4 lg:pt-0">
            <div className="relative w-full max-w-sm sm:max-w-md group">
              
              {/* Offset Burgundy Background Layer / Frame */}
              <motion.div
                variants={heroFrameReveal}
                initial="hidden"
                animate="visible"
                style={{ y: frameY }}
                className="absolute inset-0 rounded-3xl bg-[#7A1020]/15 border-2 border-[#7A1020]/25 -z-10 transition-transform duration-300"
                aria-hidden="true"
              />

              {/* Main Photo Card with Clip-Path Reveal and Smooth Parallax */}
              <motion.div
                variants={heroPhotoReveal}
                initial="hidden"
                animate="visible"
                style={{ y: photoY }}
                className="relative aspect-[3.5/5] w-full rounded-3xl overflow-hidden bg-white border-2 border-white shadow-2xl"
              >
                <Image
                  src={profileData.photos.hero}
                  alt="Vyankatesh Nilesh Kale standing beside the sea wearing a black patterned shirt and white trousers"
                  fill
                  sizes="(min-width: 1024px) 440px, (min-width: 640px) 380px, 100vw"
                  priority
                  className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle bottom vignette for editorial mood */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/80 via-[#1C1917]/20 to-transparent opacity-85" />

                {/* Floating Information Card */}
                <motion.div
                  variants={floatingBadge}
                  initial="initial"
                  animate="animate"
                  className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E8E2D9] shadow-xl"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <h3 className="font-serif text-sm sm:text-base text-[#1C1917] font-semibold leading-tight">
                        {profileData.fullName}
                      </h3>
                      <p className="font-inter text-[11px] sm:text-xs text-[#6B6262] mt-0.5">
                        {profileData.college}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FAF7F2] border border-[#E8E2D9] text-[10px] sm:text-[11px] font-mono text-[#7A1020] font-semibold shrink-0 shadow-xs">
                      <Sparkles className="w-3 h-3 text-[#7A1020]" />
                      <span>3rd Year CSE</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
