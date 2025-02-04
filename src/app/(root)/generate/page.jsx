"use client";
import { AppSidebar } from "@/components/AppSidebar";
import Preview from "@/components/Preview";
import SidebarPageHeader from "@/components/SidebarPageHeader";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { SectionProvider } from "@/contexts/SectionContext";
import { useState } from "react";

export default function Page() {
  const [markdown, setMarkdown] = useState(
    "## Acknowledgements\n\n- [Awesome Readme Templates](https://awesomeopensource.com/project/elangsundar/awesome-README-templates)\n- [Awesome README](https://github.com/matiassingers/awesome-readme)\n- [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)"
  );

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
