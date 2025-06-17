"use client";

import { useState } from "react";
import Sidebar from "./sidebar";
import Navbar from "./navbar";

interface LayoutAdminComponentProps {
  children: React.ReactNode;
}

const LayoutAdminComponent = ({
  children,
}: LayoutAdminComponentProps) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <div className="h-full flex-1 w-[640px]">
        <div className="flex h-full flex-col overflow-y-scroll">
          <div className="z-[100] sticky top-0 w-full">
            <Navbar toggleSidebar={toggleSidebar} />
          </div>
          <div className="drawer">
            <div className="py-2 px-5 drawer-content">
              <main>{children}</main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LayoutAdminComponent;
