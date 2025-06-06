import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { Inter, Roboto } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Specify weights you need
  variable: "--font-roboto",
  display: "swap",
});

export const metadata = {
  title: "GitWrite - Simplify Your README Creation",
  description:
    "GitWrite is the ultimate tool for developers to create professional README files effortlessly. Input your project details, preview your README, and download it instantly—saving you time and effort.",
  keywords: [
    "README Generator",
    "README maker",
    "Professional README Tool",
    "Effortless README Creator",
    "GitHub README Maker",
    "Generate README Files Instantly",
    "Developer README Tool",
    "Automated README Generator",
    "Time-Saving README Generator",
    "README Generator for Developers",
    "README Generator for GitHub",
  ],
  openGraph: {
    title: "GitWrite - Simplify Your README Creation",
    description:
      "GitWrite is the ultimate tool for developers to create professional README files effortlessly. Input your project details, preview your README, and download it instantly—saving you time and effort.",
    url: "https://gitwrite.vercel.app", // Replace with your domain
    type: "website",
    images: [
      {
        url: "/gitwrite_logo.png", // Replace with your image URL
        width: 1200,
        height: 1200,
        alt: "GitWrite - Effortless README Generator for Developers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GitWrite - Simplify Your README Creation",
    description:
      "GitWrite is the ultimate tool for developers to create professional README files effortlessly. Input your project details, preview your README, and download it instantly—saving you time and effort.",
    images: ["/gitwrite_logo.png"], // Replace with your image URL
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto.variable}`}>
      <body>
        {children} <Toaster />
      </body>
    </html>
  );
}
