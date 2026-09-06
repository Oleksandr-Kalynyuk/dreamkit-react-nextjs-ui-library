"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Sidebar from "./sidebar";
import TopBar from "./topbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const hideSidebarPaths = [
    "/",
    "/changelog",
    "/terms",
    "/privacy",
  ];

  const shouldHideSidebar = hideSidebarPaths.includes(pathname);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col antialiased">
      <TopBar />

      <div className="flex flex-1 w-full">
        {!shouldHideSidebar && <Sidebar />}

        <main
          className={`flex-1 min-w-0 ${
            !shouldHideSidebar ? "p-6 lg:p-8" : ""
          }`}
        >
          {children}
        </main>
      </div>
    </div>
  );
}