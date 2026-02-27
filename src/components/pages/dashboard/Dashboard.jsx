import React, { useEffect, useState } from "react";
import Sidebar from "../../dashboard/Sidebar";
import Navbar from "../../dashboard/Navbar";
import Content from "../../dashboard/Content";

const BREAKPOINT_7XL = 1280;

const Dashboard = () => {
  const [isBelow7xl, setIsBelow7xl] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < BREAKPOINT_7XL : false
  );
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      const below = window.innerWidth < BREAKPOINT_7XL;
      setIsBelow7xl(below);
      if (!below) {
        setSidebarOpen(false);
      }
    };

    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div
      className={`min-h-screen max-w-7xl mx-auto relative ${
        isBelow7xl ? "" : "grid grid-cols-15"
      }`}
    >
      <Sidebar
        isBelow7xl={isBelow7xl}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <div
        className={`min-w-0 mx-3 mb-3 ${
          isBelow7xl ? "mt-3" : "col-span-12 lg:mr-3 lg:ml-0 lg:my-3"
        }`}
      >
        <Navbar
          showSidebarToggle={isBelow7xl}
          onToggleSidebar={() => setSidebarOpen((prev) => !prev)}
        />
        <Content />
      </div>
    </div>
  );
};

export default Dashboard;
