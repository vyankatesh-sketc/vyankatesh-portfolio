"use client";

import React from "react";
import { projectsData } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { motion } from "motion/react";
import { staggerContainer, staggerItem, fadeInUp, EASING } from "@/lib/motion";

export function Projects() {
  const visibleProjects = projectsData.filter((p) => !p.hidden);

  return (
    <section
      id="projects"
      aria-label="Genuine Software Projects"
      className="py-16 sm:py-24 bg-[#140A10] text-[#FAF7F2] relative overflow-hidden scroll-mt-20 border-t border-[#291420]"
    >
      {/* Background Decorative Grid */}
      <div
        className="absolute inset-0 opacity-[0.12] bg-[radial-gradient(#FAF7F2_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Atmospheric Burgundy Glow */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#7A1020]/25 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Header for Dark Project Showcase */}
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
            className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-[#24101C] border border-[#3D1A30] text-[#E8C9C4] text-xs font-mono font-semibold tracking-wider uppercase shadow-xs"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8C9C4] animate-pulse" />
            <span>「第四章」04 — GENUINE SOFTWARE PROJECTS</span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#FAF7F2] font-semibold tracking-tight leading-[1.15]"
          >
            FEATURED{" "}
            <span className="text-[#E8C9C4] font-serif italic font-normal">
              PROJECTS
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
            className="mt-3.5 text-base sm:text-lg text-[#A89CA2] font-inter font-normal leading-relaxed max-w-2xl"
          >
            Verified software projects and active developments across social media intelligence, containerized backends, and algorithmic puzzles.
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

        {/* Projects Grid with Coordinated Staggered Entrance */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1, margin: "0px 0px -40px 0px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch"
        >
          {visibleProjects.map((project, idx) => (
            <motion.div key={project.id} variants={staggerItem} className="h-full">
              <ProjectCard project={project} index={idx} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
