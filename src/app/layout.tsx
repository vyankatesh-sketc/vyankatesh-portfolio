import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";
import { MotionProvider } from "@/components/providers/MotionProvider";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FAF7F2",
  colorScheme: "light",
};

export const metadata: Metadata = {
  title: "Vyankatesh Nilesh Kale | Software Developer",
  description:
    "Personal developer portfolio of Vyankatesh Nilesh Kale — Computer Science and Engineering student at Joginpally B.R. Engineering College, building useful software, algorithms, and AI-powered applications.",
  authors: [{ name: "Vyankatesh Nilesh Kale" }],
  creator: "Vyankatesh Nilesh Kale",
  openGraph: {
    title: "Vyankatesh Nilesh Kale | Software Developer",
    description:
      "Computer Science student exploring software development, algorithms, and AI applications.",
    url: "https://vyankatesh-kale.dev",
    siteName: "Vyankatesh Nilesh Kale",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vyankatesh Nilesh Kale | Software Developer",
    description:
      "Computer Science student exploring software development, algorithms, and AI applications.",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#FAF7F2] text-[#1C1917] font-inter antialiased selection:bg-[#7A1020] selection:text-[#FAF7F2] flex flex-col relative overflow-x-hidden">
        {/* App Content with Motion Configuration */}
        <MotionProvider>
          <div className="relative z-10 flex flex-col min-h-screen">
            {children}
          </div>
        </MotionProvider>
      </body>
    </html>
  );
}
