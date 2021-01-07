import React, { useState } from "react";
import { Dropdown } from "@windmill/react-ui";

function ContextNav({ menuItems, buttonIcon }) {
  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);
  function handleContextClick() {
    setIsContextMenuOpen(!isContextMenuOpen);
  }
  return (
    <div className="relative flex items-center">
      <button onClick={handleContextClick}>{buttonIcon}</button>

      <Dropdown
        className="z-50 w-32 dark:bg-gray-700"
        isOpen={isContextMenuOpen}
        onClose={() => setIsContextMenuOpen(false)}
      >
        {menuItems}
      </Dropdown>
    </div>
  );
}

export default ContextNav;
