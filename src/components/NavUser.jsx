"use client";

import {
  BookOpen,
  ChevronsUpDown,
  Loader2,
  LogIn,
  LogOut,
  Sparkles,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "./ui/button";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import Credits from "./Credits";

export function NavUser() {
  const { isMobile } = useSidebar();

  const { currentUser, signout, loading } = useAuth();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            {loading ? (
              <DropdownMenuGroup>
                <div className="py-2 px-3 w-full flex items-center justify-center">
                  <Loader2 className="w-4 h-4 animate-spin" />{" "}
                </div>
              </DropdownMenuGroup>
            ) : (
              <SidebarMenuButton
                size="lg"
                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              >
                <Avatar className="h-8 w-8 rounded-lg">
                  {currentUser ? (
                    <AvatarFallback className="rounded-full bg-gradient-to-r from-[#FF512F] to-[#DD2476] font-bold text-white">
                      {currentUser.name.charAt(0)}
                    </AvatarFallback>
                  ) : (
                    <AvatarFallback className="rounded-full bg-zinc-300 font-bold text-zinc-800">
                      G
                    </AvatarFallback>
                  )}
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">
                    {currentUser ? currentUser.name : "Guest"}
                  </span>
                  <span className="truncate text-xs">
                    {currentUser ? currentUser.email : "Welcome to GitWrite"}
                  </span>
                </div>
                <ChevronsUpDown className="ml-auto size-4" />
              </SidebarMenuButton>
            )}
          </DropdownMenuTrigger>

          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  {currentUser ? (
                    <AvatarFallback className="rounded-full bg-gradient-to-r from-[#FF512F] to-[#DD2476] font-bold text-white">
                      {currentUser.name.charAt(0)}
                    </AvatarFallback>
                  ) : (
                    <AvatarFallback className="rounded-full bg-zinc-300 font-bold text-zinc-800">
                      G
                    </AvatarFallback>
                  )}
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">
                    {currentUser ? currentUser.name : "Guest"}
                  </span>
                  <span className="truncate text-xs">
                    {currentUser ? <Credits /> : "Sign up to access"}
                  </span>
                </div>
              </div>
            </DropdownMenuLabel>

            <DropdownMenuSeparator />

            {currentUser ? (
              <>
                {" "}
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Link href="/pricing" className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      Upgrade to Pro
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <BookOpen />
                    My README
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={signout} className="cursor-pointer">
                  <LogOut />
                  Log out
                </DropdownMenuItem>{" "}
              </>
            ) : (
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Button asChild>
                    <Link href={"/sign-in"} className="w-full">
                      <LogIn />
                      Login
                    </Link>
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
