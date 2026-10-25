"use client";

import React, { useEffect, useRef } from "react";
import { siteConfig } from "@/data/site";
import { profileData } from "@/data/profile";
import { X, ArrowRight } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/Icons";
import { motion, AnimatePresence } from "motion/react";
import { EASING } from "@/lib/motion";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection?: string;
}

export function MobileDrawer({ isOpen, onClose, activeSection }: MobileDrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const navItems = siteConfig.navItems.filter((item) => {
    if (item.href === "#internships" && !siteConfig.showInternships) return false;
    return true;
  });

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          className="fixed inset-0 z-50 flex lg:hidden"
        >
          {/* Backdrop with Fade */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#1C1917]/50 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer Panel with Slide from Right */}
          <motion.div
            ref={drawerRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: EASING.editorial }}
            className="relative ml-auto w-full max-w-xs h-full bg-[#FAF7F2] border-l border-[#E8E2D9] p-6 flex flex-col justify-between shadow-2xl z-10"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-[#E8E2D9]">
                <div>
                  <div className="font-serif tracking-tight text-[#1C1917] text-lg font-semibold">
                    {profileData.fullName}
                  </div>
                  <div className="font-mono text-[10px] text-[#6B6262] tracking-wider uppercase mt-0.5">
                    PORTFOLIO DIRECTORY
                  </div>
                </div>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  type="button"
                  onClick={onClose}
                  aria-label="Close navigation menu"
                  className="p-2 rounded-xl text-[#6B6262] hover:text-[#7A1020] hover:bg-white border border-transparent hover:border-[#E8E2D9] focus-visible:ring-2 focus-visible:ring-[#7A1020] focus-visible:outline-none transition-colors"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Navigation Links with Stagger */}
              <motion.nav
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.1,
                    },
                  },
                }}
                className="mt-6 flex flex-col space-y-1.5"
                aria-label="Mobile Navigation"
              >
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.replace("#", "");
                  return (
                    <motion.div
                      key={item.href}
                      variants={{
                        hidden: { opacity: 0, x: 20 },
                        visible: { opacity: 1, x: 0, transition: { ease: EASING.editorial } },
                      }}
                    >
                      <a
                        href={item.href}
                        onClick={onClose}
                        className={`group flex items-center justify-between px-4 py-3 rounded-xl border transition-all focus-visible:ring-2 focus-visible:ring-[#7A1020] focus-visible:outline-none ${
                          isActive
                            ? "bg-white text-[#7A1020] border-[#E8E2D9] font-semibold shadow-xs"
                            : "text-[#1C1917] hover:bg-white hover:text-[#7A1020] border-transparent hover:border-[#E8E2D9]"
                        }`}
                      >
                        <span className="font-inter font-medium text-base">
                          {item.label}
                        </span>
                        <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isActive ? "text-[#7A1020]" : "text-[#6B6262] group-hover:text-[#7A1020]"}`} />
                      </a>
                    </motion.div>
                  );
                })}
              </motion.nav>
            </div>

            {/* Footer info in drawer */}
            <div className="pt-6 border-t border-[#E8E2D9] space-y-4">
              <div className="flex items-center gap-3">
                <a
                  href={siteConfig.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-xl bg-white border border-[#E8E2D9] text-[#1C1917] hover:text-[#7A1020] hover:border-[#7A1020] transition-colors shadow-xs"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-xl bg-white border border-[#E8E2D9] text-[#1C1917] hover:text-[#7A1020] hover:border-[#7A1020] transition-colors shadow-xs"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
              <p className="text-[11px] font-mono text-[#6B6262]">
                {profileData.college}
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
