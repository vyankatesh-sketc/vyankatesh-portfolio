export interface ProfilePhotos {
  hero: string;
  portrait: string;
  oceanView: string;
  coastline: string;
}

export interface ProfileData {
  fullName: string;
  shortName: string;
  role: string;
  headline: string;
  supportingLine: string;
  college: string;
  location: string;
  degree: string;
  major: string;
  period: string;
  currentYear: string;
  photos: ProfilePhotos;
  coursework: string[];
  socials: {
    github: string;
    linkedin: string;
    email: string;
  };
  aboutSummary: string[];
}

export const profileData: ProfileData = {
  fullName: "Vyankatesh Nilesh Kale",
  shortName: "Vyankatesh Kale",
  role: "Aspiring Software Developer",
  headline: "Vyankatesh Nilesh Kale",
  supportingLine: "Building useful software, algorithms, and AI-powered applications.",
  college: "Joginpally B.R. Engineering College",
  location: "Hyderabad, India",
  degree: "B.Tech in Computer Science and Engineering",
  major: "Computer Science and Engineering",
  period: "August 2024 – May 2028",
  currentYear: "Third Year",
  photos: {
    hero: "/images/profile-beach.jpg",
    portrait: "/images/portrait-sweatshirt.jpg",
    oceanView: "/images/ocean-view.jpg",
    coastline: "/images/coastline.jpg",
  },
  coursework: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Discrete Mathematics",
    "Operating Systems",
    "Computer Networks",
    "Database Management Systems",
  ],
  socials: {
    github: "https://github.com/vyankatesh-sketc",
    linkedin: "https://www.linkedin.com/in/vyankatesh-nilesh-kale-4a515b337",
    email: "vyankateshkale2023@gmail.com",
  },
  aboutSummary: [
    "I am a third-year Computer Science and Engineering student at Joginpally B.R. Engineering College, Hyderabad. My focus is on software development, algorithmic problem solving, and building intuitive, resilient applications.",
    "I enjoy exploring how foundational concepts—like graph traversals and dynamic programming—translate into real-world software, while continually expanding my skills in full-stack engineering and machine learning workflows.",
    "Whether developing practical utility tools, puzzle games, or AI-assisted platforms, I prioritize writing clean, maintainable code and delivering thoughtful user experiences.",
  ],
};
