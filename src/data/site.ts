export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  githubUrl: string;
  linkedinUrl: string;

  // Feature Flags
  showEmail: boolean;
  email: string;
  resumeAvailable: boolean;
  showInternships: boolean;

  navItems: NavItem[];
}

export const siteConfig: SiteConfig = {
  name: "Vyankatesh Nilesh Kale",
  title: "Vyankatesh Nilesh Kale | Software Developer Portfolio",
  description:
    "Personal developer portfolio of Vyankatesh Nilesh Kale — Computer Science and Engineering student at Joginpally B.R. Engineering College, building software, algorithms, and AI-powered applications.",
  url: "https://vyankatesh-kale.dev",
  githubUrl: "https://github.com/vyankatesh-sketc",
  linkedinUrl: "https://www.linkedin.com/in/vyankatesh-nilesh-kale-4a515b337",

  // Feature Flags
  showEmail: true,
  email: "vyankateshkale2023@gmail.com",
  resumeAvailable: true,
  showInternships: false,

  navItems: [
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Resume", href: "#resume" },
    { label: "Contact", href: "#contact" },
  ],
};
