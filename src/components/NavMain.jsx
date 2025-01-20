"use client";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function NavMain({
  items,
  title,
  availableSlugs,
  setAvailableSlugs,
  chosenSlugs,
  setChosenSlugs,
}) {
  // Handle choosing an item
  const handleChoose = (slug) => {
    const updatedAvailableSlugs = availableSlugs.filter(
      (item) => item !== slug
    );
    const updatedChosenSlugs = [...chosenSlugs, slug];

    // Update state
    setAvailableSlugs(updatedAvailableSlugs);
    setChosenSlugs(updatedChosenSlugs);

    // Update local storage
    localStorage.setItem(
      "availableSlugs",
      JSON.stringify(updatedAvailableSlugs)
    );
    localStorage.setItem("chosenSlugs", JSON.stringify(updatedChosenSlugs));
  };

  return (
    <SidebarGroup>
      <SidebarGroupLabel>{title}</SidebarGroupLabel>
      <SidebarMenu>
        {items && items.length > 0 ? (
          items.map((tab, ind) => (
            <SidebarMenuItem key={ind}>
              <SidebarMenuButton tooltip={"Tooltip"}>
                <span>{tab.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))
        ) : (
          <SidebarMenuItem>
            <SidebarMenuButton>
              <span>No section!</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        )}
      </SidebarMenu>
    </SidebarGroup>
  );
}
