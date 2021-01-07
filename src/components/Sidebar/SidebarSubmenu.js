import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavIconOpen, NavIconClosed } from "../../icons";
import * as Icons from "../../icons";
import { Transition } from "@windmill/react-ui";

const buttonClasses =
  "inline-flex focus:outline-none items-center px-6 py-3 w-full text-sm font-medium text-gray-300 transition-colors duration-150 text-gray-200 hover:text-gray-100 justify-between";

function Icon({ icon, ...props }) {
  const Icon = Icons[icon];
  return <Icon {...props} />;
}

function SidebarSubmenu({ route }) {
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);

  function handleDropdownMenuClick() {
    setIsDropdownMenuOpen(!isDropdownMenuOpen);
  }

  return (
    <li className="relative" key={route.name}>
      <button
        className={
          isDropdownMenuOpen ? buttonClasses + " bg-gray-800" : buttonClasses
        }
        onClick={handleDropdownMenuClick}
        aria-haspopup="true"
      >
        <span className="inline-flex items-center">
          <span className="mr-4">{route.name}</span>
        </span>
        {isDropdownMenuOpen ? (
          <NavIconOpen className="w-2 h-2" aria-hidden="true" />
        ) : (
          <NavIconClosed className="w-2 h-2" aria-hidden="true" />
        )}
      </button>
      <Transition
        show={isDropdownMenuOpen}
        enter="transition-all ease-in-out duration-300"
        enterFrom="opacity-25 max-h-0"
        enterTo="opacity-100 max-h-xl"
        leave="transition-all ease-in-out duration-300"
        leaveFrom="opacity-100 max-h-xl"
        leaveTo="opacity-0 max-h-0"
      >
        <ul
          className="p-2 space-y-6 overflow-hidden text-sm text-gray-200 bg-gray-800"
          aria-label="submenu"
        >
          {route.routes.map((r) => (
            <li
              className="px-2 pl-4 font-medium transition-colors duration-150 hover:text-gray-100"
              key={r.name}
            >
              <Link className="flex w-full" to={r.path}>
                <Icon
                  className="mr-2 text-gray-300 wh-4"
                  aria-hidden="true"
                  icon={r.icon}
                />
                {r.name}
              </Link>
            </li>
          ))}
        </ul>
      </Transition>
    </li>
  );
}

export default SidebarSubmenu;
