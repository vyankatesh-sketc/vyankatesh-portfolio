"use client";

import React from "react";
import Image from "next/image";
import { profileData } from "@/data/profile";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { motion } from "motion/react";
import {
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerItem,
  EASING,
} from "@/lib/motion";
import {
  Code2,
  Layers,
  BrainCircuit,
  MapPin,
  CheckCircle2
} from "lucide-react";

export function About() {
  const coreInterests = [
    {
      icon: Code2,
      tag: "FOUNDATIONS",
      title: "Data Structures & Algorithms",
      description:
        "Building algorithmic rigor through breadth-first search, depth-first search, dynamic programming, and complexity-conscious implementations in Java and Python.",
    },
    {
      icon: Layers,
      tag: "SYSTEMS",
      title: "Full-Stack Development",
      description:
        "Engineering responsive web interfaces with React and TypeScript, paired with clean backend micro-services, relational schema modeling, and Docker workflows.",
    },
    {
      icon: BrainCircuit,
      tag: "INTELLIGENCE",
      title: "Practical AI Applications",
      description:
        "Exploring applied machine learning interfaces, LLM integrations, structured data pipelines, and social intelligence workflows that address practical user tasks.",
    },
  ];

  return (
    <section
      id="about"
      aria-label="About Me"
      className="py-16 sm:py-24 bg-[#FAF7F2] relative overflow-hidden scroll-mt-20 border-t border-[#E8E2D9]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          chapter="「第一章」01"
          title="ABOUT &amp; ENGINEERING FOCUS"
          highlightWord="FOCUS"
          subtitle="Engineering philosophy, core technical interests, and dedicated student background."
        />

        {/* 2-Column Split: Editorial Narrative & Real Personal Photograph */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 sm:mb-20">
          
          {/* Left Column: Factual Narrative with Left Entrance */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25, margin: "0px 0px -40px 0px" }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="bg-white rounded-2xl border border-[#E8E2D9] p-6 sm:p-10 shadow-xs">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#7A1020] font-semibold mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7A1020]" />
                <span>STUDENT PROFILE &amp; PHILOSOPHY</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif text-[#1C1917] font-semibold tracking-tight mb-4">
                Developing dependable software with computational logic and disciplined craftsmanship.
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-[#57534E] font-inter leading-relaxed font-normal">
                <p>
                  I am a third-year Computer Science and Engineering undergraduate at Joginpally B.R. Engineering College, Hyderabad. My academic focus combines fundamental computer science principles with hands-on software development across full-stack systems and algorithmic challenges.
                </p>
                <p>
                  I view software engineering as a disciplined practice of turning computational concepts—such as graph traversals, data modeling, and containerized deployment—into reliable, useful software tools that deliver clean and accessible user experiences.
                </p>
              </div>

              {/* Verified Status Chips */}
              <div className="mt-8 pt-6 border-t border-[#E8E2D9] flex flex-wrap items-center gap-3 text-xs font-mono text-[#6B6262]">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#7A1020]" />
                  <span>{profileData.location}</span>
                </div>
                <span className="text-[#E8E2D9]">•</span>
                <span className="text-[#7A1020] font-semibold">Ready for Software Internships</span>
              </div>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-inter text-[#57534E]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#7A1020] shrink-0" />
                  <span>
                    <strong className="text-[#1C1917]">Degree:</strong> B.Tech in CSE (3rd Year)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#7A1020] shrink-0" />
                  <span>
                    <strong className="text-[#1C1917]">Institution:</strong> Joginpally B.R. Eng. College
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Photo B (Portrait Selfie with Black Patterned Shirt) */}
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
              className="relative aspect-[3.4/5] rounded-3xl overflow-hidden bg-white border-2 border-white shadow-xl group"
            >
              <Image
                src={profileData.photos.portrait}
                alt="Vyankatesh Nilesh Kale wearing a light-yellow sweatshirt and black trousers"
                fill
                sizes="(min-width: 1024px) 400px, 100vw"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/70 via-transparent to-transparent opacity-80" />

              {/* Bottom Editorial Caption */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E8E2D9] text-xs font-inter text-[#1C1917] shadow-md">
                <div className="font-serif font-semibold text-sm">
                  {profileData.fullName}
                </div>
                <div className="text-[#6B6262] text-[11px] mt-0.5">
                  Aspiring software developer exploring algorithms, web systems, and AI applications.
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* 3 Core Technical Pillars with Staggered Entrance */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2, margin: "0px 0px -40px 0px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {coreInterests.map((interest) => {
            const Icon = interest.icon;
            return (
              <motion.div
                key={interest.title}
                variants={staggerItem}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="bg-white rounded-2xl border border-[#E8E2D9] p-6 sm:p-7 shadow-xs hover:border-[#7A1020]/40 hover:shadow-lg transition-all group cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] border border-[#E8E2D9] flex items-center justify-center text-[#7A1020] mb-5 group-hover:bg-[#E8C9C4]/30 group-hover:scale-110 transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="font-mono text-xs uppercase tracking-wider text-[#7A1020] font-semibold mb-1">
                  {interest.tag}
                </div>
                <h4 className="font-serif text-xl text-[#1C1917] font-semibold mb-2">
                  {interest.title}
                </h4>
                <p className="text-[#6B6262] font-inter text-sm leading-relaxed">
                  {interest.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
