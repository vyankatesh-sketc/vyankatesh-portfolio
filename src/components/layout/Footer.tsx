"use client";

import React from "react";
import { siteConfig } from "@/data/site";
import { profileData } from "@/data/profile";
import { ArrowUp } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/Icons";
import { motion } from "motion/react";
import { fadeInUp } from "@/lib/motion";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#FAF7F2] border-t border-[#E8E2D9] relative overflow-hidden text-[#1C1917] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start pb-10 border-b border-[#E8E2D9]"
        >
          {/* Col 1: Identity & Bio */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <motion.div
                whileHover={{ scale: 1.08, rotate: 3 }}
                className="w-9 h-9 rounded-xl bg-[#7A1020] flex items-center justify-center text-[#FAF7F2] font-serif text-sm font-bold shadow-xs cursor-default"
              >
                VK
              </motion.div>
              <span className="font-serif tracking-tight text-xl text-[#1C1917] font-semibold">
                {profileData.fullName}
              </span>
            </div>
            <p className="text-sm text-[#57534E] font-inter max-w-sm leading-relaxed font-normal">
              Third-year Computer Science and Engineering student at Joginpally B.R. Engineering College, building clean, performant, and purposeful software.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E8E2D9] text-xs font-mono text-[#6B6262] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#4D6345]" />
              <span>Available for Software Engineering Roles</span>
            </div>
          </div>

          {/* Col 2: Navigation Quick Links */}
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[#7A1020] font-semibold mb-3">
              PAGE DIRECTORY
            </div>
            <ul className="grid grid-cols-2 gap-y-2 text-sm font-inter text-[#57534E]">
              <li>
                <a
                  href="#about"
                  className="hover:text-[#7A1020] transition-colors focus-visible:ring-2 focus-visible:ring-[#7A1020] focus-visible:outline-none rounded px-1"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className="hover:text-[#7A1020] transition-colors focus-visible:ring-2 focus-visible:ring-[#7A1020] focus-visible:outline-none rounded px-1"
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="hover:text-[#7A1020] transition-colors focus-visible:ring-2 focus-visible:ring-[#7A1020] focus-visible:outline-none rounded px-1"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-[#7A1020] transition-colors focus-visible:ring-2 focus-visible:ring-[#7A1020] focus-visible:outline-none rounded px-1"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#resume"
                  className="hover:text-[#7A1020] transition-colors focus-visible:ring-2 focus-visible:ring-[#7A1020] focus-visible:outline-none rounded px-1"
                >
                  Resume
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-[#7A1020] transition-colors focus-visible:ring-2 focus-visible:ring-[#7A1020] focus-visible:outline-none rounded px-1"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Social Connections & Back to Top */}
          <div className="flex flex-col justify-between h-full space-y-6">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-[#7A1020] font-semibold mb-3">
                VERIFIED SOCIALS
              </div>
              <div className="flex items-center gap-3">
                <motion.a
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  whileTap={{ scale: 0.95 }}
                  href={siteConfig.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="w-10 h-10 rounded-xl bg-white border border-[#E8E2D9] flex items-center justify-center text-[#1C1917] hover:bg-[#7A1020] hover:text-[#FAF7F2] hover:border-[#7A1020] transition-colors shadow-xs focus-visible:ring-2 focus-visible:ring-[#7A1020] focus-visible:outline-none"
                >
                  <Github className="w-5 h-5" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.1, rotate: -3 }}
                  whileTap={{ scale: 0.95 }}
                  href={siteConfig.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="w-10 h-10 rounded-xl bg-white border border-[#E8E2D9] flex items-center justify-center text-[#1C1917] hover:bg-[#7A1020] hover:text-[#FAF7F2] hover:border-[#7A1020] transition-colors shadow-xs focus-visible:ring-2 focus-visible:ring-[#7A1020] focus-visible:outline-none"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
              </div>
            </div>

            <div>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                type="button"
                onClick={scrollToTop}
                aria-label="Scroll to top of page"
                className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-[#E8E2D9] text-xs font-mono font-semibold text-[#1C1917] hover:border-[#7A1020] hover:text-[#7A1020] transition-colors shadow-xs focus-visible:ring-2 focus-visible:ring-[#7A1020] focus-visible:outline-none"
              >
                <span>BACK TO TOP</span>
                <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#6B6262]">
          <p>© 2026 {profileData.fullName}. All rights reserved.</p>
          <p>{profileData.college} • Hyderabad, India</p>
        </div>
      </div>
    </footer>
  );
}
