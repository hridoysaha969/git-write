"use client";
import { Download, Home } from "lucide-react";
import { SidebarTrigger, useSidebar } from "./ui/sidebar";
// import { Moon, Sun } from "lucide-react";
// import { Button } from "./ui/button";
import { Separator } from "@/components/ui/separator";
import { useSections } from "@/contexts/SectionContext";
import Link from "next/link";

const SidebarPageHeader = () => {
  const { readmeContent } = useSections();

  const downloadReadme = () => {
    if (readmeContent.trim().length === 0) return;

    const blob = new Blob([readmeContent], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");

    a.href = url;
    a.download = "README.md";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b px-4">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        {/* <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
        {isDarkMode ? (
          <Sun className="w-4 h-4" />
        ) : (
          <Moon className="w-4 h-4" />
        )}
      </Button> */}
        <Link href={"/"}>
          <Home className="h-4 w-4 -ml-1" />
        </Link>
      </div>

      <div>
        <button
          className="flex items-center gap-1 py-2 px-4 bg-gradient-to-r from-[#FF512F] to-[#DD2476] disabled:from-gray-400 disabled:to-gray-600 disabled:cursor-not-allowed text-white rounded-md"
          onClick={downloadReadme}
          disabled={readmeContent.trim().length === 0}
        >
          <span className="text-sm font-semibold">Download</span>
          <Download className="w-4 h-4 ml-1" />
        </button>
      </div>
    </header>
  );
};

export default SidebarPageHeader;
