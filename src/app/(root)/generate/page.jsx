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
