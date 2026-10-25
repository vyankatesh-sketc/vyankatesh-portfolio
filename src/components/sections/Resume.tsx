"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { profileData } from "@/data/profile";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { motion } from "motion/react";
import { fadeInLeft, fadeInRight, EASING } from "@/lib/motion";
import { Download, ExternalLink, FileText, CheckCircle2, ShieldCheck } from "lucide-react";

export function Resume() {
  const [hasPdf, setHasPdf] = useState(siteConfig.resumeAvailable);

  useEffect(() => {
    fetch("/resume.pdf", { method: "HEAD" })
      .then((res) => {
        if (res.ok) {
          setHasPdf(true);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <section
      id="resume"
      aria-label="Official Resume"
      className="py-16 sm:py-24 bg-[#FAF7F2] relative overflow-hidden scroll-mt-20 border-t border-[#E8E2D9]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          chapter="「第五章」05"
          title="CURRICULUM VITAE &amp; RESUME"
          highlightWord="RESUME"
          subtitle="Official documentation of university coursework, verified programming skills, and technical project implementations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Photo D (Coastline Rock View with Crashing Waves) */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25, margin: "0px 0px -40px 0px" }}
            className="lg:col-span-5"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, ease: EASING.editorial }}
              className="relative aspect-[3.6/5] rounded-3xl overflow-hidden bg-white border-2 border-white shadow-xl group"
            >
              <Image
                src={profileData.photos.coastline}
                alt="Vyankatesh Nilesh Kale standing on rocks beside the sea"
                fill
                sizes="(min-width: 1024px) 400px, 100vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/75 via-transparent to-transparent opacity-85" />

              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E8E2D9] text-xs font-inter text-[#1C1917] shadow-md">
                <div className="font-serif font-semibold text-sm flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#7A1020]" />
                  <span>Engineering Perspective</span>
                </div>
                <div className="text-[#6B6262] text-[11px] mt-0.5">
                  Prepared for software engineering internships, technical collaborations, and full-stack challenges.
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Resume Dossier Card & Actions with Right Entrance */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25, margin: "0px 0px -40px 0px" }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-2xl border border-[#E8E2D9] p-8 sm:p-10 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 pb-6 border-b border-[#E8E2D9] mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] border border-[#E8E2D9] flex items-center justify-center text-[#7A1020]">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="font-mono text-xs uppercase tracking-widest text-[#7A1020] font-semibold block">
                      OFFICIAL DOSSIER
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1917] font-semibold tracking-tight">
                      Curriculum Vitae
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#57534E] font-inter mb-6 leading-relaxed">
                  Comprehensive record of undergraduate studies at Joginpally B.R. Engineering College, core algorithmic competencies, full-stack technologies, and verified software projects for {profileData.fullName}.
                </p>

                {/* Summary Record Chips */}
                <div className="bg-[#FAF7F2] rounded-xl border border-[#E8E2D9] p-5 mb-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-inter text-[#6B6262]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#7A1020] shrink-0" />
                    <span>
                      <strong className="text-[#1C1917]">Degree:</strong> B.Tech in CSE (3rd Year)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#7A1020] shrink-0" />
                    <span>
                      <strong className="text-[#1C1917]">College:</strong> Joginpally B.R. Eng. College
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#7A1020] shrink-0" />
                    <span>
                      <strong className="text-[#1C1917]">Timeline:</strong> Aug 2024 – May 2028
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#7A1020] shrink-0" />
                    <span>
                      <strong className="text-[#1C1917]">Location:</strong> Hyderabad, India
                    </span>
                  </div>
                </div>
              </div>

              {/* Working Download and View Buttons */}
              {hasPdf && (
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  {/* Download Resume Button */}
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href="/resume.pdf"
                    download="Vyankatesh_Kale_Resume.pdf"
                    className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#7A1020] text-[#FAF7F2] font-inter text-sm font-semibold hover:bg-[#4A0A14] shadow-md hover:shadow-lg transition-all focus-visible:ring-2 focus-visible:ring-[#7A1020] focus-visible:outline-none"
                  >
                    <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                    <span>Download Resume</span>
                  </motion.a>

                  {/* View Resume Button */}
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#FAF7F2] border border-[#E8E2D9] text-[#1C1917] font-inter text-sm font-semibold hover:border-[#7A1020] hover:text-[#7A1020] transition-colors focus-visible:ring-2 focus-visible:ring-[#7A1020] focus-visible:outline-none shadow-xs"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>View Resume</span>
                  </motion.a>
                </div>
              )}

              {/* Metadata Footer */}
              <div className="mt-8 pt-6 border-t border-[#E8E2D9] flex items-center justify-between text-xs font-mono text-[#6B6262]">
                <span>FILE: resume.pdf (PDF DOCUMENT)</span>
                <span className="text-[#7A1020] font-semibold">STATUS: VERIFIED &amp; AVAILABLE</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
