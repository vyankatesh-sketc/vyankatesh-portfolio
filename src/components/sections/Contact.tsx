"use client";

import React from "react";
import { siteConfig } from "@/data/site";
import { profileData } from "@/data/profile";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { motion } from "motion/react";
import { fadeInUp } from "@/lib/motion";
import { MessageSquare, ArrowUpRight, Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/Icons";

export function Contact() {
  return (
    <section
      id="contact"
      aria-label="Contact"
      className="py-16 sm:py-24 bg-[#FAF7F2] relative overflow-hidden scroll-mt-20 border-t border-[#E8E2D9]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          chapter="「第六章」06"
          title="GET IN TOUCH"
          highlightWord="TOUCH"
          subtitle="Open for software engineering internships, technical collaborations, and project discussions."
        />

        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25, margin: "0px 0px -40px 0px" }}
          >
            <div className="bg-white rounded-2xl border border-[#E8E2D9] p-6 sm:p-10 shadow-xs">
              
              {/* Header Pill & Status */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-[#E8E2D9] mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#E8E2D9] text-[#7A1020] font-mono text-xs font-semibold uppercase tracking-wider">
                  <MessageSquare className="w-3.5 h-3.5 text-[#7A1020]" />
                  <span>DIRECT COMMUNICATION</span>
                </div>
                <span className="font-mono text-xs text-[#6B6262]">AVAILABLE FOR INTERNSHIPS</span>
              </div>

              <div className="space-y-3 mb-8">
                <h3 className="text-2xl sm:text-3xl font-serif text-[#1C1917] font-semibold tracking-tight">
                  Connect with {profileData.shortName}
                </h3>
                <p className="text-sm sm:text-base text-[#57534E] font-inter leading-relaxed max-w-2xl font-normal">
                  Feel free to reach out through my verified GitHub and LinkedIn profiles, or send a direct email regarding software developer internships and technical projects.
                </p>
              </div>

              {/* Verified Links Grid (GitHub, LinkedIn, and Verified Email) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                
                {/* GitHub Card */}
                <motion.a
                  whileHover={{ y: -4, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  href={siteConfig.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-5 rounded-xl bg-[#FAF7F2] border border-[#E8E2D9] hover:border-[#7A1020] hover:bg-white hover:shadow-md transition-all flex flex-col justify-between focus-visible:ring-2 focus-visible:ring-[#7A1020] focus-visible:outline-none"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#E8E2D9] flex items-center justify-center text-[#1C1917] group-hover:bg-[#7A1020] group-hover:text-[#FAF7F2] group-hover:border-[#7A1020] transition-colors shadow-xs">
                      <Github className="w-5 h-5" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#6B6262] group-hover:text-[#7A1020] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <div>
                    <div className="font-serif font-semibold text-[#1C1917] text-base group-hover:text-[#7A1020] transition-colors">
                      GitHub
                    </div>
                    <div className="text-xs text-[#6B6262] font-mono mt-0.5">
                      @vyankatesh-sketc
                    </div>
                  </div>
                </motion.a>

                {/* LinkedIn Card */}
                <motion.a
                  whileHover={{ y: -4, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  href={siteConfig.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-5 rounded-xl bg-[#FAF7F2] border border-[#E8E2D9] hover:border-[#7A1020] hover:bg-white hover:shadow-md transition-all flex flex-col justify-between focus-visible:ring-2 focus-visible:ring-[#7A1020] focus-visible:outline-none"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#E8E2D9] flex items-center justify-center text-[#1C1917] group-hover:bg-[#7A1020] group-hover:text-[#FAF7F2] group-hover:border-[#7A1020] transition-colors shadow-xs">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#6B6262] group-hover:text-[#7A1020] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <div>
                    <div className="font-serif font-semibold text-[#1C1917] text-base group-hover:text-[#7A1020] transition-colors">
                      LinkedIn
                    </div>
                    <div className="text-xs text-[#6B6262] font-mono mt-0.5">
                      vyankatesh-nilesh-kale
                    </div>
                  </div>
                </motion.a>

                {/* Direct Verified Email Card */}
                {siteConfig.showEmail && siteConfig.email && (
                  <motion.a
                    whileHover={{ y: -4, scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    href={`mailto:${siteConfig.email}`}
                    className="group p-5 rounded-xl bg-[#FAF7F2] border border-[#E8E2D9] hover:border-[#7A1020] hover:bg-white hover:shadow-md transition-all flex flex-col justify-between focus-visible:ring-2 focus-visible:ring-[#7A1020] focus-visible:outline-none"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-white border border-[#E8E2D9] flex items-center justify-center text-[#1C1917] group-hover:bg-[#7A1020] group-hover:text-[#FAF7F2] group-hover:border-[#7A1020] transition-colors shadow-xs">
                        <Mail className="w-5 h-5" />
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-[#6B6262] group-hover:text-[#7A1020] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                    <div>
                      <div className="font-serif font-semibold text-[#1C1917] text-base group-hover:text-[#7A1020] transition-colors">
                        Direct Email
                      </div>
                      <div className="text-xs text-[#6B6262] font-mono mt-0.5 truncate">
                        {siteConfig.email}
                      </div>
                    </div>
                  </motion.a>
                )}
              </div>

              {/* Verified Security Notice */}
              <div className="mt-8 pt-6 border-t border-[#E8E2D9] flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#6B6262]">
                <span>LOCATION: HYDERABAD, TELANGANA, INDIA</span>
                <span className="text-[#4D6345] font-semibold">● VERIFIED PROFILES</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
