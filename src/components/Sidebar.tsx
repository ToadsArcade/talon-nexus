import { Gamepad2, Globe, Youtube, Home, Newspaper } from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  Sidebar as SidebarContainer,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { FaDiscord } from "react-icons/fa";

export function Sidebar() {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-sidebar-accent text-sidebar-accent-foreground font-semibold" : "hover:bg-sidebar-accent/50";

  return (
    <SidebarContainer
      className={isCollapsed ? "w-16" : "w-64"}
      collapsible="icon"
    >
      <SidebarTrigger className="m-2 self-end text-sidebar-foreground" />

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="h-12">
                  <NavLink to="/" end className={getNavCls}>
                    <Home className="h-6 w-6" />
                    {!isCollapsed && <span className="text-base">Home</span>}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild className="h-12">
                  <NavLink to="/games" className={getNavCls}>
                    <Gamepad2 className="h-6 w-6" />
                    {!isCollapsed && <span className="text-base">Games</span>}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild className="h-12">
                  <NavLink to="/news" className={getNavCls}>
                    <Newspaper className="h-6 w-6" />
                    {!isCollapsed && <span className="text-base">News/Updates</span>}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem className="mt-6">
                <div className={`grid ${isCollapsed ? "grid-cols-1 gap-3" : "grid-cols-2 gap-3"} px-2`}>
                  <a
                    href="https://discord.gg/mh6DDJmrSn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-primary hover:bg-accent text-primary-foreground rounded-xl py-3 px-3 transition-all duration-300 border-2 border-accent hover:border-ring shadow-lg"
                  >
                    <FaDiscord className="h-5 w-5" />
                    {!isCollapsed && <span className="text-sm font-semibold">Discord</span>}
                  </a>
                  <a
                    href="https://www.youtube.com/@TalonGames13"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-primary hover:bg-accent text-primary-foreground rounded-xl py-3 px-3 transition-all duration-300 border-2 border-accent hover:border-ring shadow-lg"
                  >
                    <Youtube className="h-5 w-5" />
                    {!isCollapsed && <span className="text-sm font-semibold">YouTube</span>}
                  </a>
                </div>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </SidebarContainer>
  );
}
