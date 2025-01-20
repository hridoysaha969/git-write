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
import { SECTIONS, VERSION } from "@/lib/constant";

export function AppSidebar({ ...props }) {
  const version = VERSION;

  const sections = SECTIONS;
  const [availableSlugs, setAvailableSlugs] = React.useState([]);
  const [chosenSlugs, setChosenSlugs] = React.useState([]);

  React.useEffect(() => {
    const savedAvailableSlugs = JSON.parse(
      localStorage.getItem("availableSlugs")
    );
    const savedChosenSlugs = JSON.parse(localStorage.getItem("chosenSlugs"));

    if (savedAvailableSlugs && savedChosenSlugs) {
      setAvailableSlugs(savedAvailableSlugs);
      setChosenSlugs(savedChosenSlugs);
      console.log(savedAvailableSlugs);
    } else {
      setAvailableSlugs(sections.map((item) => item.tab_id));
      setChosenSlugs([]);
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("availableSlugs", JSON.stringify(availableSlugs));
    localStorage.setItem("chosenSlugs", JSON.stringify(chosenSlugs));
  }, [availableSlugs, chosenSlugs]);

  // Get filtered data based on slugs
  const availableContent = sections.filter((item) =>
    availableSlugs.includes(item.tab_id)
  );
  const chosenContent = sections.filter((item) =>
    chosenSlugs.includes(item.tab_id)
  );

  // Handle choosing an item
  const handleChoose = (slug) => {
    setAvailableSlugs(availableSlugs.filter((item) => item !== slug));
    setChosenSlugs([...chosenSlugs, slug]);
  };

  // Handle removing an item
  const handleRemove = (slug) => {
    setChosenSlugs(chosenSlugs.filter((item) => item !== slug));
    setAvailableSlugs([...availableSlugs, slug]);
  };

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <VersionSwitcher versions={version} defaultVersion={version[0]} />
      </SidebarHeader>

      <SidebarContent>
        {/* <NavMain items={chosenContent} title="Your Section" /> */}
        <NavMain
          items={availableContent}
          title="Available Section"
          availableSlugs={availableSlugs}
          setAvailableSlugs={setAvailableSlugs}
          chosenSlugs={chosenSlugs}
          setChosenSlugs={setChosenSlugs}
        />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
