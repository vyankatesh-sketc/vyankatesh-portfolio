"use client";

import React from "react";
import Image from "next/image";
import { profileData } from "@/data/profile";
import { motion } from "motion/react";
import {
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerItem,
  EASING,
  fadeInUp,
} from "@/lib/motion";
import { BookOpen, Calendar, GraduationCap, MapPin, Sparkles } from "lucide-react";

export function Education() {
  return (
    <section
      id="education"
      aria-label="Academic Education"
      className="py-16 sm:py-24 bg-[#0E121B] text-[#FAF7F2] relative overflow-hidden scroll-mt-20 border-t border-[#1F2736]"
    >
      {/* Background Decorative Grid */}
      <div
        className="absolute inset-0 opacity-[0.15] bg-[radial-gradient(#FAF7F2_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none"
        aria-hidden="true"
      />
      
      {/* Subtle Burgundy Gradient in Bottom Left */}
      <div
        className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#7A1020]/20 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header styled for Dark Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3, margin: "0px 0px -40px 0px" }}
          className="mb-12 sm:mb-16 max-w-3xl"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: EASING.editorial },
              },
            }}
            className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-[#18202F] border border-[#26334A] text-[#E8C9C4] text-xs font-mono font-semibold tracking-wider uppercase shadow-xs"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8C9C4] animate-pulse" />
            <span>「第二章」02 — ACADEMIC EDUCATION</span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#FAF7F2] font-semibold tracking-tight leading-[1.15]"
          >
            ACADEMIC{" "}
            <span className="text-[#E8C9C4] font-serif italic font-normal">
              EDUCATION
            </span>
          </motion.h2>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, delay: 0.12, ease: EASING.editorial },
              },
            }}
            className="mt-3.5 text-base sm:text-lg text-[#94A3B8] font-inter font-normal leading-relaxed max-w-2xl"
          >
            Formal university engineering curriculum and foundational computer science coursework.
          </motion.p>

          <motion.div
            variants={{
              hidden: { scaleX: 0, opacity: 0 },
              visible: {
                scaleX: 1,
                opacity: 1,
                transition: { duration: 0.7, delay: 0.2, ease: EASING.editorial },
              },
            }}
            style={{ originX: 0 }}
            className="mt-5 h-[1.5px] w-20 bg-gradient-to-r from-[#7A1020] to-[#E8C9C4]"
          />
        </motion.div>

        {/* 2-Column Split: Education Details & Photo C */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Education Record Card with Left Entrance */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25, margin: "0px 0px -40px 0px" }}
            className="lg:col-span-7 bg-[#131924] rounded-2xl border border-[#222E42] p-6 sm:p-10 shadow-xl"
          >
            {/* Header Badge & Timeline */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-[#222E42]">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A2333] border border-[#2D3D58] text-[#E8C9C4] font-mono text-xs font-semibold uppercase tracking-wider">
                <GraduationCap className="w-4 h-4 text-[#E8C9C4]" />
                <span>B.TECH UNDERGRADUATE</span>
              </div>

              <div className="flex items-center gap-2 font-mono text-xs text-[#94A3B8]">
                <Calendar className="w-3.5 h-3.5 text-[#E8C9C4]" />
                <span>{profileData.period}</span>
              </div>
            </div>

            {/* University & Degree Details */}
            <div className="mt-6 space-y-3">
              <h3 className="text-2xl sm:text-3xl font-serif text-[#FAF7F2] tracking-tight font-semibold">
                {profileData.degree}
              </h3>
              <div className="text-base sm:text-lg font-inter font-medium text-[#E8C9C4]">
                {profileData.college}
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-mono text-[#94A3B8]">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#E8C9C4]" />
                  {profileData.location}
                </span>
                <span className="text-[#334155]">•</span>
                <span className="px-2.5 py-0.5 rounded-md bg-[#1A2333] border border-[#2D3D58] text-[#FAF7F2] font-medium">
                  Current Status: Third Year (3rd Year)
                </span>
              </div>
            </div>

            {/* Coursework List Revealed in Sequence */}
            <div className="mt-8 pt-6 border-t border-[#222E42]">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#E8C9C4] font-semibold mb-4">
                <BookOpen className="w-4 h-4 text-[#E8C9C4]" />
                <span>VERIFIED UNDERGRADUATE COURSEWORK</span>
              </div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3"
              >
                {profileData.coursework.map((course, idx) => (
                  <motion.div
                    key={course}
                    variants={staggerItem}
                    whileHover={{ scale: 1.02, x: 2 }}
                    transition={{ duration: 0.2 }}
                    className="p-3.5 rounded-xl bg-[#1A2333] border border-[#2D3D58] text-[#FAF7F2] text-xs font-inter flex items-center gap-2.5 hover:border-[#E8C9C4]/40 hover:bg-[#202C40] transition-all cursor-default"
                  >
                    <span className="w-5 h-5 rounded-full bg-[#131924] border border-[#2D3D58] text-[#E8C9C4] text-[10px] font-mono font-bold flex items-center justify-center shrink-0 shadow-xs">
                      0{idx + 1}
                    </span>
                    <span className="font-medium">{course}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Photo C (Ocean Viewpoint Look) */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25, margin: "0px 0px -40px 0px" }}
            className="lg:col-span-5"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, ease: EASING.editorial }}
              className="relative aspect-[3.6/5] rounded-3xl overflow-hidden bg-[#131924] border-2 border-[#222E42] shadow-2xl group"
            >
              <Image
                src={profileData.photos.oceanView}
                alt="Vyankatesh Nilesh Kale looking out at the ocean horizon"
                fill
                sizes="(min-width: 1024px) 400px, 100vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E121B]/85 via-transparent to-transparent opacity-90" />

              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#131924]/90 backdrop-blur-md border border-[#222E42] text-xs font-inter text-[#FAF7F2] shadow-xl">
                <div className="font-serif font-semibold text-sm flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#E8C9C4]" />
                  <span>Academic Foundations &amp; Focus</span>
                </div>
                <div className="text-[#94A3B8] text-[11px] mt-0.5">
                  Developing computational rigor and disciplined problem-solving skills throughout the B.Tech journey.
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
