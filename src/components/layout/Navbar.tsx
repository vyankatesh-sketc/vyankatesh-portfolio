"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/data/site";
import { profileData } from "@/data/profile";
import { MobileDrawer } from "./MobileDrawer";
import { Menu, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { fadeInDown, EASING } from "@/lib/motion";

export function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  const navItems = siteConfig.navItems.filter((item) => {
    if (item.href === "#internships" && !siteConfig.showInternships) return false;
    return true;
  });

  // Track active section and scroll state for elevated sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionElements = navItems
        .map((item) => {
          const id = item.href.replace("#", "");
          return document.getElementById(id);
        })
        .filter(Boolean) as HTMLElement[];

      const scrollPosition = window.scrollY + 140;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  return (
    <>
      {/* Accessible Skip-to-Content Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[60] px-4 py-2 bg-[#FAF7F2] text-[#1C1917] font-mono text-sm font-bold rounded-lg shadow-md border-2 border-[#7A1020] focus-visible:outline-none"
      >
        Skip to main content
      </a>

      {/* Animated Sticky Main Navigation Header */}
      <motion.header
        variants={fadeInDown}
        initial="hidden"
        animate="visible"
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8E2D9] shadow-xs"
            : "bg-[#FAF7F2]/80 backdrop-blur-sm border-b border-[#E8E2D9]/60"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a
            href="#"
            className="group flex items-center gap-3 focus-visible:ring-2 focus-visible:ring-[#7A1020] focus-visible:outline-none rounded-xl py-1 px-1.5 transition-transform"
            aria-label="Vyankatesh Nilesh Kale - Home"
          >
            <motion.div
              whileHover={{ scale: 1.06, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="w-9 h-9 rounded-xl bg-[#7A1020] flex items-center justify-center text-[#FAF7F2] font-serif text-sm font-bold shadow-xs group-hover:bg-[#4A0A14] transition-colors"
            >
              VK
            </motion.div>
            <div className="flex flex-col">
              <span className="font-serif tracking-tight text-lg sm:text-xl text-[#1C1917] font-semibold group-hover:text-[#7A1020] transition-colors leading-none">
                {profileData.fullName}
              </span>
              <span className="font-mono text-[10px] text-[#6B6262] tracking-wider uppercase mt-1">
                SOFTWARE DEVELOPER
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative px-3.5 py-1.5 rounded-full text-sm font-inter transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#7A1020] focus-visible:outline-none ${
                    isActive
                      ? "text-[#7A1020] bg-white border border-[#E8E2D9] font-semibold shadow-xs"
                      : "text-[#57534E] font-medium hover:text-[#7A1020] hover:bg-white/60"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#7A1020]"
                      transition={{ duration: 0.3, ease: EASING.editorial }}
                    />
                  )}
                </a>
              );
            })}

            {/* Quick Contact CTA in Navbar */}
            <div className="ml-3 pl-3 border-l border-[#E8E2D9]">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                className="group inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#7A1020] text-[#FAF7F2] text-xs font-inter font-semibold hover:bg-[#4A0A14] shadow-xs hover:shadow transition-all focus-visible:ring-2 focus-visible:ring-[#7A1020] focus-visible:outline-none"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </motion.a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <motion.button
              whileTap={{ scale: 0.92 }}
              type="button"
              onClick={() => setDrawerOpen(true)}
              aria-expanded={drawerOpen}
              aria-label="Open navigation menu"
              className="p-2 rounded-xl bg-white border border-[#E8E2D9] text-[#1C1917] hover:text-[#7A1020] hover:border-[#7A1020] focus-visible:ring-2 focus-visible:ring-[#7A1020] focus-visible:outline-none transition-colors shadow-xs"
            >
              <Menu className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Accessible Mobile Drawer with Motion */}
      <MobileDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        activeSection={activeSection}
      />
    </>
  );
}
