import React from "react";

import PageTitle from "../components/Typography/PageTitle";
import ContextNav from "../components/ContextNav";
import { FiTrash2, FiCopy, FiSettings } from "react-icons/fi";

const MenuIcon = () => {
  return (
    <>
      <FiSettings
        aria-label="Context"
        aria-haspopup="true"
        className="mr-2 text-white wh-4"
      />
    </>
  );
};

const MenuItems = () => {
  return (
    <>
      <li className="flex items-center text-sm leading-8 text-gray-200 cursor-pointer hover:text-white">
        <FiTrash2 className="mr-2 wh-3" />
        <span>Delete</span>
      </li>
      <li className="flex items-center text-sm leading-8 text-gray-200 cursor-pointer hover:text-white">
        <FiCopy className="mr-2 wh-3" />
        <span>Copy Address</span>
      </li>
    </>
  );
};

function ContextMenus() {
  return (
    <>
      <PageTitle>Context Menu</PageTitle>
      <ContextNav
        menuItems={<MenuItems />}
        buttonIcon={<MenuIcon />}
      ></ContextNav>
    </>
  );
}

export default ContextMenus;
