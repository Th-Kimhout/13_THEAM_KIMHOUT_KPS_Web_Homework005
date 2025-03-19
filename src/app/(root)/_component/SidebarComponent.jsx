"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { items } from "../../../components/data/sidebarContent";
import Image from "next/image";
import { Settings } from "lucide-react";
import { usePathname } from "next/navigation";
export function AppSidebar() {
  const pathName = usePathname();
  return (
    <Sidebar className="!border-r-0">
      <SidebarContent className="gap-0 !text-base-color">
        <SidebarGroup>
          <SidebarGroupContent className="mt-4">
            <Image
              width={100}
              height={100}
              priority={true}
              className="rounded-full mx-auto"
              src="https://i.pinimg.com/736x/b6/55/57/b65557871402f9358ae8d6d8891f623c.jpg"
              alt="chin chang"
            ></Image>
            <div className="mt-4 text-center">
              <p className="text-xl">Theam Kimhout</p>
              <p className="text-main-color text-xl">th.kimhout@gmail.com</p>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="p-4 gap-1.5">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="text-base">
                    <a
                      href={item.url}
                      className={`!py-0 hover:font-semibold ${
                        pathName === item.url ? "bg-main-color/5 " : ""
                      }`}
                    >
                      <item.icon className="!w-5 !h-5 stroke-[1.5px] stroke-[#C81D25]" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <SidebarMenuItem className="mt-5 bg-[#F5F7F8]  rounded-sm">
                <SidebarMenuButton asChild className="text-base ">
                  <Link href={"#"} className="!py-0">
                    <Settings className="!w-5 !h-5 stroke-[1.5px]" />
                    <span>Settings</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
