import React, { useEffect, useState } from "react";
import axios from "axios";
import PageTitle from "../components/Typography/PageTitle";
import {
  Card,
  CardBody,
  Select,
  Table,
  TableHeader,
  TableCell,
  TableBody,
  TableRow,
  TableContainer,
} from "@windmill/react-ui";
import {
  FiTrash2,
  FiCopy,
  FiSettings,
  FiInfo,
  FiDownload,
  FiArrowRight,
} from "react-icons/fi";
import ContextNav from "../components/ContextNav";
import { DummyGraph, DummyGraph2, Explorer } from "../icons";
import { userSession, getPerson, getUserData } from "../scripts/auth";

import "../assets/css/tippy.css";

import { Tooltip } from "react-tippy";

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

const Left = () => {
  return (
    <>
      <h1 className="mb-3 text-2xl">My Portfolio</h1>
      <div>Dec 20, 2020 01:38</div>
    </>
  );
};

const Right = () => {
  return (
    <>
      <div className="text-gray-300 ">
        <p className="mb-2">Total Volume</p>
        <div>
          <b className="mr-2 text-3xl font-normal text-white">253,548 STX</b>{" "}
          <span>
            <span className="text-yellow-500">3.25</span> BTC |{" "}
            <span className="text-green-600">245,635</span> USD
          </span>
        </div>
      </div>
    </>
  );
};

function MyPortfolio() {
  const [portfolio, setPortfolio] = useState({
    balance: "0",
    total_sent: "0",
    total_received: "0",
    total_fees_sent: "0",
    total_miner_rewards_received: "0",
    lock_tx_id: "",
    locked: "0",
    lock_height: 0,
    burnchain_lock_height: 0,
    burnchain_unlock_height: 0,
  });

  useEffect(() => {
    const data = getPerson();
    const fetchData = async () => {
      const result = await axios.get(
        `https://stacks-node-api.blockstack.org/extended/v1/address/${data._profile.stxAddress}/balances`
      );
      console.log(result);
      setPortfolio(result.data.stx);
    };
    fetchData();
  }, []);

  console.log(portfolio);
  return (
    <>
      <PageTitle left={<Left />} right={<Right />}></PageTitle>
      <div className="p-4 space-y-6">
        <Card>
          <CardBody className="text-white">
            <div className="flex flex-wrap">
              <div className="w-full xl:pr-10 xl:w-1/3">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-medium">BTC Reward</h3>
                    <FiInfo />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center justify-between py-2 border-b border-gray-400">
                      <span>Total BTC Reward</span>
                      <span className="text-lg text-warning-500">
                        896k sats
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center justify-between py-2 border-b border-gray-400">
                      <span>Daily BTC Reward</span>
                      <span className="">896k sats</span>
                    </div>
                    <div className="flex flex-wrap items-center justify-between py-2 text-gray-300 border-b border-gray-400">
                      <span>Pending BTC Reward</span>
                      <span>50k sats</span>
                    </div>
                    <div className="flex flex-wrap items-center justify-between py-2 ">
                      <span>Compound BTC Reward</span>
                      <span className="">896k sats</span>
                    </div>
                  </div>
                  <button className="mt-4 mb-6 btn btn-outline-warning btn-sm btn-block">
                    Claim your BTC Reward
                  </button>
                  <div className="xl:-mb-8">
                    <div className="flex justify-end mb-4">
                      <div>
                        <Select className="py-1 pl-2 mt-1 leading-1 dark:bg-transparent dark:border-gray-300">
                          <option>Daily</option>
                        </Select>
                      </div>
                    </div>
                    <DummyGraph2 className="w-full"></DummyGraph2>
                  </div>
                </div>
              </div>
              <div className="w-full xl:w-2/3">
                <div className="flex flex-wrap justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span>
                      {" "}
                      <h3 className="mr-4 text-lg font-medium">
                        BTC Reward History
                      </h3>
                    </span>
                    <div className="flex items-center ml-10 text-primary-400">
                      <FiDownload />
                      <span className="ml-1">Export</span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="btn btn-primary btn-xs">Received</button>
                    <button className="text-white btn btn-outline-gray btn-xs">
                      Pending
                    </button>
                  </div>
                </div>
                <TableContainer className="mb-8">
                  <Table>
                    <TableHeader>
                      <tr>
                        <TableCell>Date</TableCell>
                        <TableCell>Network</TableCell>
                        <TableCell>From</TableCell>
                        <TableCell>To</TableCell>
                        <TableCell>Reward</TableCell>
                        <TableCell>Explorer</TableCell>
                      </tr>
                    </TableHeader>
                    <TableBody className="text-lg dark:divide-gray-500">
                      <TableRow>
                        <TableCell>
                          <div className="text-lg text-white">17 Dec 2020</div>
                          <span className="text-sm">09:06:30 GMT</span>
                        </TableCell>
                        <TableCell>
                          <span className="text-white btn btn-outline-gray btn-xs">
                            Testnet
                          </span>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm text-white">Stackedsats</div>
                          <span>OneI5ka...68das65</span>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm text-white">
                            OneI5ka...68das65
                          </div>
                          <div className="flex items-center text-sm text-primary-400">
                            <FiArrowRight />
                            <span className="ml-1">Stacks</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm text-white">800 STX</div>
                          <div className="text-sm">
                            <span className="text-warning-500">3.25</span> BTC |{" "}
                            <span className="text-success-600">245,635</span>{" "}
                            USD
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex justify-center">
                            <Explorer />
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="text-lg text-white">17 Dec 2020</div>
                          <span className="text-sm">09:06:30 GMT</span>
                        </TableCell>
                        <TableCell>
                          <span className="text-white btn btn-outline-gray btn-xs">
                            Testnet
                          </span>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm text-white">Stackedsats</div>
                          <span>OneI5ka...68das65</span>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm text-white">
                            OneI5ka...68das65
                          </div>
                          <div className="flex items-center text-sm text-warning-500">
                            <FiArrowRight />
                            <span className="ml-1">Bitcoin</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm text-white">800 STX</div>
                          <div className="text-sm">
                            <span className="text-warning-500">3.25</span> BTC |{" "}
                            <span className="text-success-600">245,635</span>{" "}
                            USD
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex justify-center">
                            <Explorer />
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="text-lg text-white">17 Dec 2020</div>
                          <span className="text-sm">09:06:30 GMT</span>
                        </TableCell>
                        <TableCell>
                          <span className="text-white btn btn-outline-gray btn-xs">
                            Testnet
                          </span>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm text-white">Stackedsats</div>
                          <span>OneI5ka...68das65</span>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm text-white">
                            OneI5ka...68das65
                          </div>
                          <div className="flex items-center text-sm text-primary-400">
                            <FiArrowRight />
                            <span className="ml-1">Stacks</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm text-white">800 STX</div>
                          <div className="text-sm">
                            <span className="text-warning-500">3.25</span> BTC |{" "}
                            <span className="text-success-600">245,635</span>{" "}
                            USD
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex justify-center">
                            <Explorer />
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="text-lg text-white">17 Dec 2020</div>
                          <span className="text-sm">09:06:30 GMT</span>
                        </TableCell>
                        <TableCell>
                          <span className="text-white btn btn-outline-gray btn-xs">
                            Testnet
                          </span>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm text-white">Stackedsats</div>
                          <span>OneI5ka...68das65</span>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm text-white">
                            OneI5ka...68das65
                          </div>
                          <div className="flex items-center text-sm text-warning-500">
                            <FiArrowRight />
                            <span className="ml-1">Bitcoin</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm text-white">800 STX</div>
                          <div className="text-sm">
                            <span className="text-warning-500">3.25</span> BTC |{" "}
                            <span className="text-success-600">245,635</span>{" "}
                            USD
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex justify-center">
                            <Explorer />
                          </div>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </div>
          </CardBody>
        </Card>

        <div className="grid gap-6 mb-8 xl:grid-cols-3">
          <Card>
            <CardBody className="space-y-8 text-white">
              <div className="flex flex-wrap justify-between">
                <div className="flex flex-wrap items-center">
                  <h2 className="mr-3 text-2xl font-medium">Portfolio</h2>
                  <span className="text-gray-200">11 Addreses</span>
                </div>
                <button className="flex items-center btn btn-outline-primary btn-xs">
                  <span className="mr-2 text-lg">+</span> Add Address
                </button>
              </div>
              {/* body */}
              <div className="flex flex-wrap justify-between">
                <div className="flex items-baseline space-x-2">
                  <span className="text-2xl">STX</span>
                  <span className="text-gray-200">100%</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">459.48</span>
                  <span className="font-medium text-gray-200">STX</span>
                </div>
              </div>
              <div>
                <div className="flex flex-wrap justify-between mb-3 text-gray-200">
                  <div className="flex">
                    <span>3 Addresses</span>
                  </div>
                  <div className="flex">
                    <span>$89.56</span>
                  </div>
                </div>

                <ul>
                  <li className="p-2 mb-1 border-l-4 cursor-pointer hover:bg-primary-400 bg-primary-600 border-primary-300">
                    <div className="flex flex-wrap justify-between">
                      <div className="flex flex-wrap items-center space-x-3">
                        <span>OneI5ka...</span>
                        <ContextNav
                          menuItems={<MenuItems />}
                          buttonIcon={<MenuIcon />}
                        ></ContextNav>
                      </div>
                      <div className="flex">
                        <span>$89.56</span>
                      </div>
                    </div>
                  </li>
                  <li className="p-2 mb-1 border-l-4 cursor-pointer hover:bg-primary-400 bg-primary-600 border-primary-300">
                    <div className="flex flex-wrap justify-between">
                      <div className="flex flex-wrap items-center space-x-3">
                        <span>OneI5ka...</span>
                        <ContextNav
                          menuItems={<MenuItems />}
                          buttonIcon={<MenuIcon />}
                        ></ContextNav>
                      </div>
                      <div className="flex">
                        <span>$89.56</span>
                      </div>
                    </div>
                  </li>
                  <li className="p-2 mb-1 border-l-4 cursor-pointer hover:bg-primary-400 bg-primary-600 border-primary-300">
                    <div className="flex flex-wrap justify-between">
                      <div className="flex flex-wrap items-center space-x-3">
                        <span>OneI5ka...</span>
                        <ContextNav
                          menuItems={<MenuItems />}
                          buttonIcon={<MenuIcon />}
                        ></ContextNav>
                      </div>
                      <div className="flex">
                        <span>$89.56</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <hr className="border-gray-500" />
              <div className="flex flex-wrap justify-between">
                <div className="flex flex-wrap items-baseline space-x-2">
                  <span className="text-2xl">BTC</span>
                  <span className="text-gray-200">100%</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">459.48</span>
                  <span className="font-medium text-gray-200">BTC</span>
                </div>
              </div>
              <div className="flex flex-wrap justify-between mb-3 text-gray-200">
                <span>2 Addresses</span>
                <div>
                  <span className="text-warning-500">3.25</span> BTC |{" "}
                  <span className="text-success-600">245,635</span> USD
                </div>
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardBody className="space-y-8 text-white">
              <div className="flex flex-wrap justify-between">
                <div className="flex flex-wrap items-center">
                  <h2 className="mr-3 text-2xl font-medium">Total balance</h2>
                </div>
                <div>
                  <Select className="py-1 pl-2 mt-1 leading-1 dark:bg-transparent dark:border-gray-300">
                    <option>USD</option>
                  </Select>
                </div>
              </div>
              <div>
                <div className="flex flex-wrap items-center justify-between py-2 border-b border-gray-400">
                  <div className="flex space-x-2">
                    <span>Total Balance</span>
                  </div>
                  <div className="flex space-x-2">
                    <span className="text-lg font-medium text-success-400">
                      80,000 STX
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-between py-2 border-b border-gray-400">
                  <div className="flex space-x-2">
                    <span>Available Balance</span>
                  </div>
                  <div className="flex space-x-2">
                    <span>80,000 STX</span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-between py-2">
                  <div className="flex space-x-2">
                    <span>Stacking Balance</span>
                  </div>
                  <div className="flex space-x-2">
                    <span>100 STX</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-end mb-4">
                  <div>
                    <Select className="py-1 pl-2 mt-1 leading-1 dark:bg-transparent dark:border-gray-300">
                      <option>Daily</option>
                    </Select>
                  </div>
                </div>
                <DummyGraph className="w-full"></DummyGraph>
              </div>
              <button className="mt-4 mb-6 btn btn-outline-primary btn-sm btn-block">
                Stack now
              </button>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-medium">Total Reward</h3>
                  <Tooltip
                    // options
                    maxWidth="100px"
                    html={
                      <div className="text-xs" style={{ width: 180 }}>
                        XTZ rewards are automatically transfered to you
                        delegation address
                      </div>
                    }
                    position="top"
                  >
                    <FiInfo />
                  </Tooltip>
                </div>
                <div>
                  <div className="flex flex-wrap items-center justify-between py-2 border-b border-gray-400">
                    <span>Total Reward</span>
                    <span className="text-lg text-warning-500">$3.53</span>
                  </div>
                  <div className="flex flex-wrap items-center justify-between py-2 border-b border-gray-400">
                    <span>Daily Reward</span>
                    <span className="">$3.53</span>
                  </div>
                  <div className="flex flex-wrap items-center justify-between py-2 text-gray-300">
                    <span>Pending Reward</span>
                    <span>$3.53</span>
                  </div>
                </div>
                <button className="mt-4 mb-6 btn btn-outline-warning btn-sm btn-block">
                  Claim your BTC Reward
                </button>
                <div className="-mb-8">
                  <div className="flex justify-end mb-4">
                    <div>
                      <Select className="py-1 pl-2 mt-1 leading-1 dark:bg-transparent dark:border-gray-300">
                        <option>Daily</option>
                      </Select>
                    </div>
                  </div>
                  <DummyGraph2 className="w-full"></DummyGraph2>
                </div>
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardBody className="space-y-8 text-white">
              <div className="flex flex-wrap justify-between">
                <div className="flex flex-wrap items-center">
                  <h2 className="mr-3 text-2xl font-medium">STX balance</h2>
                </div>
                <div>
                  <Select className="py-1 pl-2 mt-1 leading-1 dark:bg-transparent dark:border-gray-300">
                    <option>USD</option>
                  </Select>
                </div>
              </div>
              <div>
                <div className="flex flex-wrap items-center justify-between py-2 border-b border-gray-400">
                  <div className="flex space-x-2">
                    <span>Total Balance</span>
                  </div>
                  <div className="flex space-x-2">
                    <span className="text-lg font-medium text-success-400">
                      80,000 STX
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-between py-2 border-b border-gray-400">
                  <div className="flex space-x-2">
                    <span>Available Balance</span>
                  </div>
                  <div className="flex space-x-2">
                    <span>80,000 STX</span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-between py-2">
                  <div className="flex space-x-2">
                    <span>Stacking Balance</span>
                  </div>
                  <div className="flex space-x-2">
                    <span>100 STX</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-end mb-4">
                  <div>
                    <Select className="py-1 pl-2 mt-1 leading-1 dark:bg-transparent dark:border-gray-300">
                      <option>Staked</option>
                    </Select>
                  </div>
                </div>
                <DummyGraph className="w-full"></DummyGraph>
              </div>
              <button className="mt-4 mb-6 btn btn-outline-gray btn-sm btn-block">
                Stack now
              </button>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-medium">STX Reward</h3>
                  <FiInfo />
                </div>
                <div>
                  <div className="flex flex-wrap items-center justify-between py-2 border-b border-gray-400">
                    <span>STX Mining Reward</span>
                    <span className="text-lg text-warning-500">
                      125,000 STX
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center justify-between py-2 border-b border-gray-400">
                    <span>Daily STX Mining Reward</span>
                    <span className="">5,000 STX</span>
                  </div>
                  <div className="flex flex-wrap items-center justify-between py-2 text-gray-300">
                    <span>Pending STX Mining Reward</span>
                    <span>10,000 STX</span>
                  </div>
                </div>
                <button className="mt-4 mb-6 btn btn-outline-warning btn-sm btn-block">
                  Claim your STX Mining Reward
                </button>
                <div className="-mb-8">
                  <div className="flex justify-end mb-4">
                    <div>
                      <Select className="py-1 pl-2 mt-1 leading-1 dark:bg-transparent dark:border-gray-300">
                        <option>Daily</option>
                      </Select>
                    </div>
                  </div>
                  <DummyGraph2 className="w-full"></DummyGraph2>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default MyPortfolio;
