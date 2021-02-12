import React from "react";
import routes from "../../navigation/sidebar";
import { NavLink } from "react-router-dom";
import * as Icons from "../../icons";
import SidebarSubmenu from "./SidebarSubmenu";

import CountdownTimer from "../CountdownTimer";

function Icon({ icon, ...props }) {
  const Icon = Icons[icon];
  return <Icon {...props} />;
}

function SidebarContent() {
  return (
    <div className="pb-4 text-gray-400">
      <a
        className="flex items-center h-16 pl-6 text-lg font-bold text-gray-200 bg-gray-500"
        href="/"
      >
        <Icon width="104" aria-hidden="true" icon="Logo" />
      </a>
      <ul className="mt-6">
        {routes.map((route) =>
          route.routes ? (
            <SidebarSubmenu route={route} key={route.name} />
          ) : (
            <li className="relative" key={route.name}>
              <NavLink
                exact
                to={route.path}
                className="inline-flex items-center w-full px-6 py-3 text-sm font-medium text-gray-200 transition-colors duration-150 hover:text-gray-100"
                activeClassName="text-primary-500 bg-primary-800"
              >
                {route.icon ? (
                  <Icon
                    className="w-2 h-2 mr-4"
                    aria-hidden="true"
                    icon={route.icon}
                  />
                ) : null}
                <span className="">{route.name}</span>
              </NavLink>
            </li>
          )
        )}
      </ul>
      {/* <div className="px-6 my-6">
        <a href="/" className="text-sm btn btn-primary btn-block btn-icon">
          Become a STX Miner
          <span
            className="ml-2"
            dangerouslySetInnerHTML={{ __html: "&RightArrow;" }}
          ></span>
        </a>
      </div> */}
      <div className="px-6 my-6">
        <h4 className="mb-2">Next Reward Cycle</h4>
        <CountdownTimer stakingDuration="24" endDate="01/08/2021 11:13:01" />
      </div>
    </div>
  );
}

export default SidebarContent;
