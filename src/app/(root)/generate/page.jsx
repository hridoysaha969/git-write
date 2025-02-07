import { AppSidebar } from "@/components/AppSidebar";
import Preview from "@/components/Preview";
import SidebarPageHeader from "@/components/SidebarPageHeader";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { SectionProvider } from "@/contexts/SectionContext";

export default function Page() {
  return (
    <SectionProvider>
      <SidebarProvider>
        <AppSidebar />

        <SidebarInset>
          <SidebarPageHeader />

          <Preview />
        </SidebarInset>
      </SidebarProvider>
    </SectionProvider>
  );
}

export async function generateMetadata() {
  return {
    title: "README Generator - GitWrite",
    description:
      "Generate professional README files for your GitHub projects with GitWrite. Input your project details, preview your README, and download it instantly.",
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
      "GitWrite",
      "GitWrite README Generator",
      "GitWrite README Maker",
      "Professional README Generatot",
      "Professional README Maker",
      "GitHub README Generator",
    ],
    openGraph: {
      title: "README Generator - GitWrite",
      description:
        "Generate professional README files for your GitHub projects with GitWrite. Input your project details, preview your README, and download it instantly.",
      url: "https://gitwrite.vercel.app",
      type: "website",
      images: [
        {
          url: "/gitwrite_logo.png", // Replace with your image URL
          width: 1200,
          height: 1200,
          alt: "README Generator - GitWrite",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "README Generator - GitWrite",
      description:
        "Generate professional README files for your GitHub projects with GitWrite. Input your project details, preview your README, and download it instantly.",
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
}
