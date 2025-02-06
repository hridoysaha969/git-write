"use client";
import * as React from "react";
import { VersionSwitcher } from "@/components/VersionSwitcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavMain } from "./NavMain";
import { NavUser } from "./NavUser";
import { useSections } from "@/contexts/SectionContext";
import NotRegister from "./NotRegister";

export function AppSidebar({ ...props }) {
  const {
    version,
    updateVersion,
    availableSection,
    selectedSection,
    addSection,
    removeSection,
  } = useSections();

  console.log(version);

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <VersionSwitcher />
      </SidebarHeader>

      <SidebarContent>
        {version === "free" ? (
          <>
            {" "}
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
          </>
        ) : (
          <NotRegister />
        )}
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
