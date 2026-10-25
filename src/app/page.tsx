import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TechMarquee } from "@/components/ui/TechMarquee";
import { About } from "@/components/sections/About";
import { Education } from "@/components/sections/Education";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Internships } from "@/components/sections/Internships";
import { Resume } from "@/components/sections/Resume";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      {/* 1. Navigation */}
      <Navbar />

      {/* Main Content Landmark */}
      <main id="main-content" className="flex-1 flex flex-col focus:outline-none">
        {/* 2. Hero */}
        <Hero />

        {/* 3. Technology Marquee Ticker */}
        <TechMarquee />

        {/* 4. About */}
        <About />

        {/* 5. Education (Editorial Dark Section) */}
        <Education />

        {/* 6. Skills */}
        <Skills />

        {/* 7. Projects (Editorial Dark Section) */}
        <Projects />

        {/* 8. Internships (Omitted cleanly when unverified) */}
        <Internships />

        {/* 9. Resume */}
        <Resume />

        {/* 10. Contact */}
        <Contact />
      </main>

      {/* 11. Footer */}
      <Footer />
    </>
  );
}
