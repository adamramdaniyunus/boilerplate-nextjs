"use client";

import { useSession } from "next-auth/react";
import React, { use } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar";

// This component is used to wrap the dashboard layout and provide a consistent structure for the dashboard pages.
// It can include a sidebar, header, and main content area.
// The `children` prop will be used to render the specific content of each dashboard page.
// The `useSession` hook is used to access the current session data, which can be useful for displaying user-specific information or controlling access to certain parts of the dashboard.

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { data: session } = useSession();
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
};

export default DashboardLayout;
