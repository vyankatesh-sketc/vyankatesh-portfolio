# Compile Time // Developer Portfolio

An anime-inspired personal developer portfolio for **Vyankatesh Nilesh Kale**, third-year Computer Science & Engineering undergraduate at Joginpally B.R. Engineering College, Hyderabad.

The portfolio is architected around the **"Compile Time"** concept: an anime title card hero section, panel-cut chapter transitions, oversized Anton typography with cream highlight blocks, and a palette of burgundy, maroon, cream, blush, sage, and ink.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, latest stable)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation**: [Motion for React](https://motion.dev/) (`motion/react`)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Anton, Inter, JetBrains Mono via `next/font/google`
- **Zero Backend**: Completely static and client-side safe (no external databases, auth, or tracking)

---

## 🚀 How to Run Locally

1. **Navigate to the portfolio directory**:
   ```bash
   cd D:\portfolio-projects\portfolio
   ```

2. **Install dependencies** (if not already installed):
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Verify Type-Checking and Linting**:
   ```bash
   npm run lint
   npx tsc --noEmit
   ```

5. **Build for Production**:
   ```bash
   npm run build
   ```

---

## 📁 Editing Content (`src/data/*.ts`)

All personal information, projects, coursework, and profile data are centralized inside `src/data/`. These are the **only files** you need to edit to customize your portfolio:

| File | Purpose |
| :--- | :--- |
| `src/data/site.ts` | Site metadata, navigation items, and **Feature Flags** (detailed below). |
| `src/data/profile.ts` | Full name, college, degree, graduation timeline, verified coursework, and social URLs. |
| `src/data/skills.ts` | Grouped skill competencies across Languages, DSA & Algorithms, Frameworks, and Tools. |
| `src/data/projects.ts` | Complete project registry including status badges, summaries, tech stack, implemented features, planned improvements, and external links. |
| `src/data/internships.ts` | Factual descriptions of professional internships. |

---

## 🎛️ The 4 Feature Flags in `src/data/site.ts`

To give you complete control over what is published publicly, `src/data/site.ts` exposes four boolean flags:

```typescript
// src/data/site.ts

export const siteConfig = {
  // ...
  showEmail: false,        // Flag 1
  email: "",               // Your contact email
  showCgpa: false,         // Flag 2
  cgpa: "",                // Your CGPA string (e.g. "8.5")
  resumeAvailable: false,  // Flag 3
  showInternships: false,  // Flag 4
};
```

### 1. `showEmail` (Default: `false`)
- **When `false`**: The Contact section displays only your verified GitHub and LinkedIn profiles. Your email address is never revealed, and phone numbers are never rendered anywhere.
- **When `true`**: Set your email address in `email: "your.email@example.com"`. A clean "Direct Email" card will appear in the Contact section.

### 2. `showCgpa` (Default: `false`)
- **When `false`**: CGPA is completely hidden across the entire portfolio (especially in Education).
- **When `true`**: Set `cgpa: "X.XX"`. A verified CGPA pill will be rendered alongside your university degree record.

### 3. `resumeAvailable` (Default: `false`)
- **When `false`**: The "Download Resume" CTA in the Hero section is hidden, and the Resume section displays an elegant status card reading `"Resume coming soon"`.
- **When `true`**: The Hero CTA appears, and the Resume section renders a high-contrast `"Download Resume (PDF)"` button pointing to `/resume.pdf` with the `download` attribute.

### 4. `showInternships` (Default: `false`)
- **When `false`**: The entire Internships chapter is completely omitted from the page and navigation.
- **When `true`**: The Internships section renders factual summary cards for Prodigy InfoTech, CodSoft, and CodeAlpha with no unverifiable claims or metrics.

---

## 🎨 How to Replace the Character Image

The Hero section is designed to feature an anime character or portrait avatar:

1. **Target Location**:
   Save your image file at:
   ```
   public/character/hero.png
   ```

2. **Image Requirements**:
   - **Format**: PNG or WebP with a transparent background.
   - **Resolution**: Approximately 1200px in height (e.g., 900px × 1200px or 1200px × 1600px).
   - **Palette**: Works best when matching the Compile Time color scheme (Burgundy `#7A1020`, Maroon `#4A0A14`, Cream `#F4E9DC`, Blush `#E8C9C4`, Sage `#C9D3C2`, Ink `#14090B`).

3. **Zero-Broken Fallback**:
   - If `public/character/hero.png` is not provided or fails to load, `HeroCharacter` automatically displays a clean, original SVG hooded chibi coder silhouette in the site palette. Nothing in the layout ever breaks!

---

## 📄 How to Add Your Resume (`/resume.pdf`)

1. Export your resume as a standard PDF file.
2. Rename the file to:
   ```
   resume.pdf
   ```
3. Place the file directly in the public root:
   ```
   public/resume.pdf
   ```
4. Open `src/data/site.ts` and switch the flag:
   ```typescript
   resumeAvailable: true,
   ```
5. Your resume will immediately become downloadable from both the Hero CTA and the Resume chapter.

---

## 🖼️ Open Graph (`og-image`) Setup Note

The metadata configuration in `src/app/layout.tsx` is fully prepared with Open Graph and Twitter Card tags. To prevent broken link lookups or 404 console errors, no image file is referenced until you create one.

To add an Open Graph preview image:
1. Create a `1200px × 630px` social share image (PNG/JPEG) representing your portfolio.
2. Save it as `public/og-image.png`.
3. In `src/app/layout.tsx`, add the image to the `openGraph` and `twitter` objects:
   ```typescript
   openGraph: {
     // ...
     images: [
       {
         url: "/og-image.png",
         width: 1200,
         height: 630,
         alt: "Vyankatesh Kale Portfolio",
       },
     ],
   },
   twitter: {
     // ...
     images: ["/og-image.png"],
   },
   ```

---

## ♿ Accessibility & Motion Compliance

- **`prefers-reduced-motion`**: Fully supported. When a user requests reduced motion in system settings, sakura petals are removed, 3D card tilt is neutralized, parallax is halted, and transitions become instantaneous while keeping all content completely accessible and visible.
- **Keyboard Navigation**: Skip-to-content anchor link (`#main-content`), visible outline rings on all interactive elements (`focus-visible:ring-2 focus-visible:ring-cream`), and ESC-closable mobile drawer.
