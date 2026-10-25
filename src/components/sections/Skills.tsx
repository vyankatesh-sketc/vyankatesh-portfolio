"use client";

import React from "react";
import { skillGroups } from "@/data/skills";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { motion } from "motion/react";
import {
  staggerContainer,
  staggerItem,
} from "@/lib/motion";
import {
  Binary,
  Code2,
  Cpu,
  Database,
  Layers,
  Terminal,
  Wrench,
} from "lucide-react";

export function Skills() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Programming Languages":
        return Code2;
      case "Frontend Development":
        return Layers;
      case "Backend Development":
        return Cpu;
      case "Databases":
        return Database;
      case "Developer Tools":
        return Terminal;
      case "DSA & Algorithms":
        return Binary;
      default:
        return Wrench;
    }
  };

  return (
    <section
      id="skills"
      aria-label="Technical Skills"
      className="py-16 sm:py-24 bg-[#FAF7F2] relative overflow-hidden scroll-mt-20 border-t border-[#E8E2D9]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          chapter="「第三章」03"
          title="TECHNICAL COMPETENCIES"
          highlightWord="COMPETENCIES"
          subtitle="Organized registry of confirmed programming languages, frontend and backend libraries, databases, and developer tooling."
        />

        {/* 6 Grouped Cards Grid with Staggered Entrance */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15, margin: "0px 0px -40px 0px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillGroups.map((group, groupIdx) => {
            const IconComp = getCategoryIcon(group.category);
            return (
              <motion.div
                key={group.category}
                variants={staggerItem}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="bg-white rounded-2xl border border-[#E8E2D9] p-6 sm:p-7 shadow-xs hover:border-[#7A1020]/40 hover:shadow-xl transition-all flex flex-col justify-between group cursor-default"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-start justify-between pb-4 border-b border-[#E8E2D9] mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-[#FAF7F2] border border-[#E8E2D9] flex items-center justify-center text-[#7A1020] shrink-0 group-hover:bg-[#E8C9C4]/30 group-hover:scale-110 transition-all">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-serif text-lg sm:text-xl text-[#1C1917] font-semibold group-hover:text-[#7A1020] transition-colors">
                            {group.category}
                          </h3>
                        </div>
                        <p className="text-xs text-[#6B6262] font-inter mt-0.5 line-clamp-1">
                          {group.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Skill Badges (Factual chips with no fake percentages or progress bars) */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {group.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-3 py-1.5 rounded-lg bg-[#FAF7F2] border border-[#E8E2D9] text-[#1C1917] text-xs font-mono font-medium hover:bg-[#7A1020] hover:text-[#FAF7F2] hover:border-[#7A1020] transition-colors select-none shadow-xs"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Footer Count Badge */}
                <div className="mt-6 pt-4 border-t border-[#E8E2D9] flex items-center justify-between text-xs font-mono text-[#6B6262]">
                  <span className="text-[11px] text-[#7A1020] font-semibold tracking-wider">
                    {group.jpTitle} • 0{groupIdx + 1}
                  </span>
                  <span className="font-semibold text-[#1C1917]">
                    {group.skills.length} TECHNOLOGIES
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
