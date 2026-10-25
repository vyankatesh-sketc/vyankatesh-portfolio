"use client";

import React from "react";
import type { Project } from "@/data/projects";
import { CheckCircle2, Clock, ExternalLink, ArrowUpRight } from "lucide-react";
import { Github } from "@/components/ui/Icons";
import { motion } from "motion/react";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isCompleted = project.status === "Completed";
  const isInProgress = project.status === "In progress";

  const getStatusBadge = () => {
    if (isCompleted) {
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono tracking-wider font-semibold uppercase bg-[#203322] text-[#A3D9A5] border border-[#2F4F33]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#A3D9A5]" />
          Completed
        </span>
      );
    }
    if (isInProgress) {
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono tracking-wider font-semibold uppercase bg-[#3D1A25] text-[#F3A4B5] border border-[#5E2638]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F3A4B5] animate-pulse" />
          In Progress
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono tracking-wider font-semibold uppercase bg-[#182338] text-[#93C5FD] border border-[#273B5E]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#93C5FD]" />
        Planned
      </span>
    );
  };

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="bg-[#1C1018] rounded-2xl border border-[#331C2A] hover:border-[#7A1020] overflow-hidden shadow-xl hover:shadow-2xl transition-all flex flex-col h-full group"
    >
      {/* Editorial Header Cover (Attractive typographic banner with no fake screenshots) */}
      <div className="relative h-44 sm:h-48 w-full bg-gradient-to-br from-[#261320] via-[#1E0D19] to-[#2E1225] p-6 flex flex-col justify-between overflow-hidden border-b border-[#331C2A] select-none">
        
        {/* Subtle Watermark Index */}
        <div
          className="absolute -right-2 -bottom-6 font-serif text-8xl text-[#FAF7F2]/5 pointer-events-none select-none font-bold group-hover:scale-110 group-hover:text-[#FAF7F2]/10 transition-all duration-500"
          aria-hidden="true"
        >
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Top Header: Index and Status Badge */}
        <div className="relative z-10 flex items-center justify-between gap-2">
          <span className="font-mono text-xs uppercase tracking-widest text-[#E8C9C4] font-semibold px-2.5 py-1 rounded-full bg-[#140A10]/80 border border-[#331C2A]">
            {`PROJECT 0${index + 1}`}
          </span>

          {getStatusBadge()}
        </div>

        {/* Bottom Cover Title */}
        <div className="relative z-10 mt-auto">
          <h3 className="font-serif text-xl sm:text-2xl text-[#FAF7F2] font-semibold tracking-tight leading-tight line-clamp-2 group-hover:text-[#E8C9C4] transition-colors">
            {project.title}
          </h3>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
        <div className="space-y-4">
          
          {/* Summary */}
          <p className="text-[#C4B7BD] text-sm font-inter leading-relaxed">
            {project.summary}
          </p>

          {/* Confirmed Technologies */}
          <div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#E8C9C4] font-semibold mb-2">
              CONFIRMED TECHNOLOGIES
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-md bg-[#24131F] border border-[#3A1E32] text-[#FAF7F2] text-xs font-mono font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Implemented vs Planned Features */}
          {project.implemented.length > 0 && (
            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#A3D9A5] font-semibold mb-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#A3D9A5]" />
                <span>IMPLEMENTED CAPABILITIES</span>
              </div>
              <ul className="space-y-1.5">
                {project.implemented.map((feature, fIdx) => (
                  <li
                    key={fIdx}
                    className="text-xs text-[#C4B7BD] flex items-start gap-2 font-inter"
                  >
                    <span className="text-[#A3D9A5] font-bold mt-0.5 text-xs">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Planned / In-Progress Features */}
          {project.planned.length > 0 && (
            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#E8C9C4] font-semibold mb-2 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#E8C9C4]" />
                <span>
                  {isInProgress ? "PLANNED / IN-PROGRESS DIRECTION" : "PLANNED ARCHITECTURE"}
                </span>
              </div>
              <ul className="space-y-1.5">
                {project.planned.map((plan, pIdx) => (
                  <li
                    key={pIdx}
                    className="text-xs text-[#C4B7BD] flex items-start gap-2 font-inter"
                  >
                    <span className="text-[#E8C9C4] mt-0.5 text-xs">•</span>
                    <span>{plan}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Links: ONLY rendered if actual verified URLs exist */}
        {project.links && project.links.length > 0 && (
          <div className="mt-5 pt-4 border-t border-[#331C2A] flex flex-wrap gap-2.5">
            {project.links.map((link) => (
              <motion.a
                key={link.url}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#24131F] border border-[#3A1E32] text-[#FAF7F2] text-xs font-mono font-semibold hover:bg-[#7A1020] hover:border-[#7A1020] transition-colors focus-visible:ring-2 focus-visible:ring-[#E8C9C4] focus-visible:outline-none shadow-xs"
              >
                {link.type === "github" ? (
                  <Github className="w-3.5 h-3.5" />
                ) : (
                  <ExternalLink className="w-3.5 h-3.5" />
                )}
                <span>{link.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#A89CA2] group-hover/btn:text-[#FAF7F2] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
