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
import { useAuth } from "@/contexts/AuthContext";
import FeatureContainer from "./FeatureContainer";

export function AppSidebar({ ...props }) {
  const {
    version,
    availableSection,
    selectedSection,
    addSection,
    removeSection,
  } = useSections();

  const { currentUser } = useAuth();

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
        ) : currentUser ? (
          <FeatureContainer />
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
