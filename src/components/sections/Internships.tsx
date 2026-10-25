"use client";

import React from "react";
import { siteConfig } from "@/data/site";
import { internshipsData } from "@/data/internships";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { motion, useReducedMotion } from "motion/react";
import { fadeInUp } from "@/lib/motion";
import { Calendar, CheckCircle2 } from "lucide-react";

export function Internships() {
  const shouldReduceMotion = useReducedMotion();

  // Strict rule: "Internships, only when enabled"
  if (!siteConfig.showInternships) {
    return null;
  }

  return (
    <section
      id="internships"
      aria-label="Internships"
      className="py-16 sm:py-24 bg-[#FAF7F2] relative overflow-hidden scroll-mt-20 border-t border-[#EADBCE]/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          chapter="05"
          title="INTERNSHIPS & EXPERIENCE"
          highlightWord="EXPERIENCE"
          subtitle="Factual summary of industrial internships and project-based experience."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {internshipsData.map((internship, idx) => (
            <motion.div
              key={internship.id}
              variants={fadeInUp}
              initial={shouldReduceMotion ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl border border-[#EADBCE] p-6 shadow-[0_4px_20px_rgba(33,26,27,0.03)] hover:border-[#7A1020]/40 hover:shadow-[0_8px_24px_rgba(122,16,32,0.06)] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#EADBCE] mb-4">
                  <span className="font-mono text-[11px] text-[#7A1020] uppercase tracking-wider font-semibold">
                    ROLE 0{idx + 1}
                  </span>
                  <span className="flex items-center gap-1 font-mono text-xs text-[#6B6262]">
                    <Calendar className="w-3.5 h-3.5 text-[#7A1020]" />
                    {internship.period}
                  </span>
                </div>

                <h3 className="font-anton uppercase tracking-wide text-2xl text-[#211A1B] mb-1">
                  {internship.role}
                </h3>
                <div className="text-sm font-inter font-semibold text-[#7A1020] mb-3">
                  {internship.company}
                </div>

                <p className="text-xs sm:text-sm text-[#6B6262] font-inter leading-relaxed mb-4">
                  {internship.description}
                </p>

                <ul className="space-y-2">
                  {internship.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="text-xs text-[#211A1B] flex items-start gap-2 font-inter"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#4D6345] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-[#EADBCE] font-mono text-xs text-[#6B6262]">
                FOCUS: {internship.focus}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
