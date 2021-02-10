import React from "react";
import axios from "axios";
import { userDetails } from "../../redux/reducers";
import { useDispatch } from "react-redux";

import { FiTrash2, FiCopy } from "react-icons/fi";

const MenuItems = ({ stx, btc, username }) => {
  const dispatch = useDispatch();

  const deleteAddress = async () => {
    console.log(username, stx, btc);
    const makeTheCal = await axios({
      method: "delete",
      url: `${process.env.REACT_APP_BACKENDURL}/addresses`,
      data: {
        username: username,
        stxAddress: stx,
        btcAddress: btc,
      },
    });
    console.log(makeTheCal);
    dispatch({ payload: makeTheCal.data, type: userDetails });
  };

  return (
    <>
      <li
        className="flex items-center text-sm leading-8 text-gray-200 cursor-pointer hover:text-white"
        onClick={deleteAddress}
      >
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

export { MenuItems };
