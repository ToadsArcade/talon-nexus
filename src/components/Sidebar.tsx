import { Gamepad2, Globe, Youtube, Home } from "lucide-react";
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
                <SidebarMenuButton asChild>
                  <NavLink to="/" end className={getNavCls}>
                    <Home className="h-5 w-5" />
                    {!isCollapsed && <span>Home</span>}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink to="/games" className={getNavCls}>
                    <Gamepad2 className="h-5 w-5" />
                    {!isCollapsed && <span>Games</span>}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink to="/proxies" className={getNavCls}>
                    <Globe className="h-5 w-5" />
                    {!isCollapsed && <span>Proxies</span>}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem className="mt-6">
                <div className={`grid ${isCollapsed ? "grid-cols-1 gap-2" : "grid-cols-2 gap-2"} px-2`}>
                  <a
                    href="https://discord.gg/your-server"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-lg py-2 px-3 transition-all duration-300"
                  >
                    <FaDiscord className="h-4 w-4" />
                    {!isCollapsed && <span className="text-sm font-medium">Discord</span>}
                  </a>
                  <a
                    href="https://youtube.com/@your-channel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#FF0000] hover:bg-[#CC0000] text-white rounded-lg py-2 px-3 transition-all duration-300"
                  >
                    <Youtube className="h-4 w-4" />
                    {!isCollapsed && <span className="text-sm font-medium">YouTube</span>}
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
