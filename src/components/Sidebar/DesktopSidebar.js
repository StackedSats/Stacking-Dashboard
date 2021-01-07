import React from "react";

import SidebarContent from "./SidebarContent";

function DesktopSidebar(props) {
  return (
    <aside className="z-30 flex-shrink-0 hidden w-64 overflow-y-auto bg-white border-r dark:bg-gray-900 lg:block border-gray-50 dark:border-gray-800">
      <SidebarContent />
    </aside>
  );
}

export default DesktopSidebar;
