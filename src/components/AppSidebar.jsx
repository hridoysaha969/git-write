"use client";
import * as React from "react";
import { VersionSwitcher } from "@/components/VersionSwitcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import { NavMain } from "./NavMain";
import { NavUser } from "./NavUser";
import { useSections } from "@/contexts/SectionContext";

export function AppSidebar({ ...props }) {
  const { availableSection, selectedSection, addSection, removeSection } =
    useSections();

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <VersionSwitcher />
      </SidebarHeader>

      <SidebarContent>
        <NavMain
          items={selectedSection}
          title="Selected Section"
          removeSection={removeSection}
        />
        <NavMain
          items={availableSection}
          title="Available Section"
          addSection={addSection}
        />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
