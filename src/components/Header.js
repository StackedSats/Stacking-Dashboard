import React, { useContext, useState } from "react";
import { SidebarContext } from "../context/SidebarContext";
import { SearchIcon, MenuIcon } from "../icons";
import { Avatar, Input, Dropdown } from "@windmill/react-ui";
import { useSelector } from "react-redux";
import { VscArrowSmallRight } from "react-icons/vsc";
import { FiCopy } from "react-icons/fi";
import { userSession, getPerson } from "../scripts/auth";
import { useHistory } from "react-router-dom";
/* -------------------------------------------------------------------------- */
/*    Avatar - Displays Avatar or placeholder if the avatar does not exist    */
/* -------------------------------------------------------------------------- */
// Check if user has photo stored in user profile in DB and set hasAvatar
// hasAvatar is a dummy check to simulate this process without a check in place
import UserImage from "../assets/img/avatar-0.jpg";
import AvatarPlaceholder from "react-avatar";
import axios from "axios";

const hasAvatar = false;

/* -------------------------------------------------------------------------- */
/*                              Header Component                              */
/* -------------------------------------------------------------------------- */
function Header() {
  const userAddress = userSession.isUserSignedIn()
    ? getPerson()._profile.stxAddress
    : "";
  const { toggleSidebar } = useContext(SidebarContext);
  const user = useSelector((state) => state.user);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const history = useHistory();
  function handleProfileClick() {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  }

  const logout = () => {
    axios.delete(`${process.env.REACT_APP_BACKENDURL}/logout`).then(() => {
      history.push("/login");
    });
  };

  const copy = () => {
    navigator.clipboard.writeText(userAddress.testnet).then(
      function () {
        alert("Copied!");
        console.log("Async: Copying to clipboard was successful!");
      },
      function (err) {
        console.error("Async: Could not copy text: ", err);
      }
    );
  };

  return (
    <header className="z-40 h-16 shadow-bottom bg-primary-500">
      <div className="flex items-center justify-between h-full px-6 mx-auto text-primary-300">
        {/* <!-- Mobile hamburger --> */}
        <button
          className="p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none focus:shadow-outline-purple"
          onClick={toggleSidebar}
          aria-label="Menu"
        >
          <MenuIcon className="w-6 h-6" aria-hidden="true" />
        </button>

        {/* <!-- Search input --> */}
        <div className="flex flex-1 lg:mr-32">
          {/* <div className="relative w-full max-w-3xl mr-6 focus-within:text-primary-500">
            <div className="absolute inset-y-0 flex items-center pl-2">
              <SearchIcon className="w-4 h-4" aria-hidden="true" />
            </div>
            <Input
              className="pl-8 text-gray-500 placeholder-white bg-blue-700 border-blue-700 outline-none"
              placeholder="Search by name, hash or number"
              aria-label="Search"
            />
          </div> */}
        </div>

        {/* <!-- Tools --> */}
        <div className="flex items-center flex-shrink-0 space-x-6">
          {/* <!-- Profile menu --> */}
          <div className="relative">
            <button
              className="rounded-full focus:shadow-outline-purple focus:outline-none"
              onClick={handleProfileClick}
              aria-label="Account"
              aria-haspopup="true"
            >
              <span className="hidden mr-3 text-sm text-white lg:inline-block">
                {user.username}
              </span>
              {hasAvatar ? (
                <Avatar
                  className="align-middle"
                  src={UserImage}
                  size="large"
                  aria-hidden="true"
                />
              ) : (
                <AvatarPlaceholder name="Username" round={true} size="32" />
              )}
            </button>
            <Dropdown
              align="right"
              className="p-8 text-center"
              isOpen={isProfileMenuOpen}
              onClose={() => setIsProfileMenuOpen(false)}
            >
              <div>
                {hasAvatar ? (
                  <Avatar
                    className="align-middle"
                    src={UserImage}
                    size="large"
                    aria-hidden="true"
                  />
                ) : (
                  <AvatarPlaceholder name="Andy James" round={true} size="64" />
                )}
              </div>

              <h2 className="mt-3 text-lg font-semibold text-gray-700">
                {user.username}
              </h2>
              <div className="flex items-center justify-center mt-4 mb-8">
                <span className="mr-4">{userAddress.testnet}</span>
                <FiCopy className="w-4 h-4" onClick={copy} />
              </div>
              <button className="btn btn-primary">Become a STX Miner</button>
              <div className="mt-4">
                <button className="text-red-600 btn-icon" onClick={logout}>
                  Log Out <VscArrowSmallRight />
                </button>
              </div>
            </Dropdown>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
