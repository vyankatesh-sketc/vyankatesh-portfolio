"use client";

import React from "react";
import { Sparkles } from "lucide-react";

const technologies = [
  "Java",
  "Python",
  "JavaScript",
  "React.js",
  "Node.js",
  "Flask",
  "Docker",
  "MySQL",
  "Git & GitHub",
  "BFS & Graph Traversals",
  "Data Structures & Algorithms",
  "TypeScript",
  "REST APIs",
  "Linux / Unix",
];

export function TechMarquee() {
  return (
    <div
      aria-label="Core Technical Competencies Ticker"
      className="w-full bg-[#3B070F] text-[#FAF7F2] py-4 border-y border-[#7A1020]/40 overflow-hidden relative select-none shadow-inner"
    >
      {/* Side Fade Gradients for smooth infinite feel */}
      <div
        className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#3B070F] to-transparent z-10 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#3B070F] to-transparent z-10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="animate-tech-marquee items-center gap-6 text-xs sm:text-sm font-mono tracking-wider uppercase">
        {/* Render sequence twice for seamless loop */}
        {[...technologies, ...technologies].map((tech, idx) => (
          <div key={idx} className="flex items-center gap-6 shrink-0">
            <span className="font-semibold hover:text-[#E8C9C4] transition-colors">
              {tech}
            </span>
            <span className="text-[#E8C9C4]/40" aria-hidden="true">
              <Sparkles className="w-3 h-3 text-[#E8C9C4]/50" />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
