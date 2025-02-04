"use client";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { PlusCircle, Trash2 } from "lucide-react";

export function NavMain({ items, title, addSection, removeSection }) {
  // Handle choosing an item

  return (
    <SidebarGroup>
      <SidebarGroupLabel>{title}</SidebarGroupLabel>
      <SidebarMenu>
        {items && items.length > 0 ? (
          items.map((tab, ind) => (
            <SidebarMenuItem key={ind}>
              <SidebarMenuButton
                tooltip={"Tooltip"}
                className="flex items-center justify-between py-1 px-3 rounded bg-white shadow-sm"
              >
                <span>{tab.title}</span>
                {addSection && (
                  <PlusCircle
                    className="cursor-pointer text-blue-500"
                    onClick={() => addSection(tab.tab_id)}
                  />
                )}
                {removeSection && (
                  <Trash2
                    className="cursor-pointer text-red-400"
                    onClick={() => removeSection(tab.tab_id)}
                  />
                )}
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
