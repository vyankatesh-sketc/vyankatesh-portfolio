"use client";

import React from "react";
import { projectsData } from "@/data/projects";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TiltCard } from "@/components/ui/TiltCard";
import { motion, useReducedMotion } from "motion/react";
import { fadeInUp } from "@/lib/motion";
import { Clock, Milestone } from "lucide-react";

export function Upcoming() {
  const shouldReduceMotion = useReducedMotion();

  // Find Yalu AI Manager project for upcoming improvements
  // (FloodMaster must NOT appear in Upcoming)
  const yaluProject = projectsData.find(
    (p) => p.id === "yalu-ai-manager" && !p.hidden
  );

  // If there are no real upcoming items, hide the section entirely
  if (!yaluProject || !yaluProject.planned || yaluProject.planned.length === 0) {
    return null;
  }

  return (
    <section
      id="upcoming"
      aria-label="Upcoming Chapter"
      className="py-16 sm:py-24 bg-ink relative overflow-hidden scroll-mt-20 border-t border-burgundy/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          chapter="05"
          title="UPCOMING &amp; ROADMAP"
          highlightWord="ROADMAP"
          subtitle="Active pipeline features and planned architecture milestones currently in progress."
        />

        <motion.div
          variants={fadeInUp}
          initial={shouldReduceMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="max-w-4xl mx-auto"
        >
          <TiltCard glowColor="maroon" className="p-6 sm:p-10">
            {/* Header Stamp */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-burgundy/40">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-maroon/80 border border-blush/40 text-cream font-mono text-xs uppercase tracking-wider">
                <Milestone className="w-4 h-4 text-sage" />
                <span>IN ACTIVE DEVELOPMENT // 開発中</span>
              </div>
              <span className="font-mono text-xs text-sage">PIPELINE // 2026.Q4</span>
            </div>

            {/* Title & Context */}
            <div className="mt-6 mb-8">
              <span className="text-xs font-mono uppercase tracking-widest text-blush block mb-1">
                FEATURE FOCUS
              </span>
              <h3 className="text-2xl sm:text-4xl font-anton uppercase text-cream tracking-wide">
                {yaluProject.title}, next improvements
              </h3>
              <p className="text-sm sm:text-base text-cream/90 font-inter mt-2 max-w-2xl leading-relaxed">
                {yaluProject.summary} Below are the targeted functional capabilities scheduled for upcoming releases.
              </p>
            </div>

            {/* Planned Items Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {yaluProject.planned.map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-md bg-maroon/30 border border-burgundy/40 hover:border-cream/50 transition-colors flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-burgundy/80 text-cream text-[11px] font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                    0{index + 1}
                  </div>
                  <div>
                    <span className="text-xs font-mono text-sage block uppercase tracking-wider mb-0.5">
                      PHASE 0{index + 1}
                    </span>
                    <p className="text-sm text-cream font-inter font-medium capitalize">
                      {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Note */}
            <div className="mt-8 pt-4 border-t border-burgundy/20 flex items-center justify-between text-xs font-mono text-blush/70">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-sage" />
                Status: In development
              </span>
              <span>NO_UNVERIFIED_ESTIMATES</span>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
}
