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
  Input,
} from "@windmill/react-ui";
import {
  FiTrash2,
  FiCopy,
  FiSettings,
  FiInfo,
  FiDownload,
  FiArrowRight,
} from "react-icons/fi";

import ChartCard from "../components/Chart/ChartCard";
import { Doughnut, Line, Bar } from "react-chartjs-2";
import ChartLegend from "../components/Chart/ChartLegend";

import { userDetails } from "../redux/reducers";

import ContextNav from "../components/ContextNav";
import { DummyGraph2, Explorer } from "../icons";
import { userSession, getPerson, getUserData } from "../scripts/auth";
import { useDispatch, useSelector } from "react-redux";
import delegateSTX from "../delegation/1.delegatestx";
import "../assets/css/tippy.css";
import { Right } from "../components/right";
import delegationLock from "../delegation/2.delegationLock";
import getStackerInfor from "../delegation/getStackerInfo";

import { Tooltip } from "react-tippy";
const micro = 1000000;

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

export const lineOptions = {
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Organic",
        /**
         * These colors come from Tailwind CSS palette
         * https://tailwindcss.com/docs/customizing-colors/#default-color-palette
         */
        backgroundColor: "#0694a2",
        borderColor: "#0694a2",
        data: [43, 48, 40, 54, 67, 73, 70],
        fill: true,
      },
    ],
  },
  options: {
    responsive: true,
    tooltips: {
      mode: "index",
      intersect: false,
    },
    hover: {
      mode: "nearest",
      intersect: true,
    },
    scales: {
      x: {
        display: true,
        scaleLabel: {
          display: true,
          labelString: "Month",
        },
      },
      y: {
        display: true,
        scaleLabel: {
          display: true,
          labelString: "Value",
        },
      },
    },
  },
  legend: {
    display: false,
  },
};

export const lineLegends = [{ title: "Organic", color: "bg-teal-600" }];

const Left = () => {
  return (
    <>
      <h1 className="mb-3 text-2xl">My Portfolio</h1>
      <div>{new Date().toLocaleDateString()}</div>
    </>
  );
};

function MyPortfolio() {
  const prices = useSelector((state) => state.prices);
  const state = useSelector((state) => state.user);
  const [txs, setTxs] = useState([]);
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
  const [addressValue, setaddressValue] = useState([]);
  const [stxAddress, setStxAddress] = useState([]);
  const [btcAddress, addBTCAddress] = useState([]);
  const [stx, setSTX] = useState(0);

  const wallet = getPerson();

  useEffect(() => {
    const data = getPerson();
    console.log(data);
    const fetchData = async () => {
      const result = await axios.get(
        `https://stacks-node-api.blockstack.org/extended/v1/address/${data._profile.stxAddress}/balances`
      );
      setPortfolio(result.data.stx);

      const values = await axios({
        url: `${process.env.REACT_APP_BACKENDURL}/btcAddressReward`,
        method: "post",
        data: state,
      });

      const vs = [];

      for (let i of state.stxAddress) {
        try {
          const result = await axios.get(
            `https://stacks-node-api.blockstack.org/extended/v1/address/${i}/balances`
          );
          vs.push(result);
        } catch (e) {
          vs.push(0);
        }
      }

      setaddressValue(vs);
      console.log(values.data.txs);
      if (values.data.txs) setTxs(values.data.txs);
    };
    fetchData();
    getStackerInfor();
  }, [state, state.username]);

  const addAddress = async () => {
    const makeTheCal = await axios({
      url: `${process.env.REACT_APP_BACKENDURL}/addresses}`,
      data: {
        username: state.username,
        stxAddress: wallet._profile.stxAddress,
        btcAddress,
      },
    });
    console.log(makeTheCal);
  };

  const onStack = async () => {
    const delegateStx = await delegateSTX({
      poxAddr: "n2VrgRFbKvcesbqerVtJEC8p5Lr2LQKtmB",
      amountSTX: stx * micro,
      delegateToo: "ST3K2B2FH1AYXD26WV6YZY4DAA82AZNK967BNB9BK",
      burnHt: 3,
    });
    const delegateLock = await delegationLock({
      stxValue: stx * micro,
      htLockPeriod: 10,
      amountustx: stx * micro,
    });
    console.log(delegateLock, delegateStx);
  };

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
                  </div>
                  <button className="mt-4 mb-6 btn btn-outline-warning btn-sm btn-block">
                    Claim your BTC Reward
                  </button>
                  <div className="xl:-mb-8">
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
                    <TableBody className="text-lg divide-gray-500">
                      {txs.length > 0 &&
                        txs.map((value, index) => {
                          return (
                            <TableRow>
                              <TableCell>
                                <div className="text-lg text-white">
                                  {value.date}
                                </div>
                                <span className="text-sm">{value.date}</span>
                              </TableCell>
                              <TableCell>
                                <span className="text-white btn btn-outline-gray btn-xs">
                                  Testnet
                                </span>
                              </TableCell>
                              <TableCell>
                                <div className="text-sm text-white">
                                  Stackedsats
                                </div>
                                <span>{value.from}</span>
                              </TableCell>
                              <TableCell>
                                <div className="text-sm text-white">
                                  {value.to}
                                </div>
                                <div className="flex items-center text-sm text-warning-500">
                                  <FiArrowRight />
                                  <span className="ml-1">Bitcoin</span>
                                </div>
                                {/* <div className="flex items-center text-sm text-primary-400">
                                <FiArrowRight />
                                <span className="ml-1">Stacks</span>
                              </div> */}
                              </TableCell>
                              <TableCell>
                                <div className="text-sm text-white">
                                  {value.reward} STX
                                </div>
                                <div className="text-sm">
                                  <span className="text-warning-500">
                                    {parseFloat(
                                      value.reward /
                                        (prices.stxusd * prices.btcusd)
                                    ).toFixed(2)}
                                  </span>{" "}
                                  BTC |{" "}
                                  <span className="text-success-600">
                                    {parseFloat(
                                      prices.stxusd / value.reward
                                    ).toFixed(2)}
                                  </span>{" "}
                                  USD
                                </div>
                              </TableCell>
                              <TableCell>
                                <a href="https://testnet-explorer.blockstack.org/txid/0x7f5db3a604f738af695b0b10c0369c42fd7a0efbcc25115fa5711f074abf92b6">
                                  <div className="flex justify-center">
                                    <Explorer />
                                  </div>
                                </a>
                              </TableCell>
                            </TableRow>
                          );
                        })}
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
                  <span className="text-gray-200">
                    {wallet._profile.stxAddress.length +
                      state.btcAddress.length}
                  </span>
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
                  <span className="text-2xl">
                    {prices.stxusd * addressValue.reduce((a, b) => a + b, 0)}
                  </span>
                  <span className="font-medium text-gray-200">STX</span>
                </div>
              </div>
              <div>
                <div className="flex flex-wrap justify-between mb-3 text-gray-200">
                  <div className="flex">
                    <span>{state.stxAddress.length} addresses</span>
                  </div>
                  <div className="flex">
                    <span>
                      {prices.stxusd * addressValue.reduce((a, b) => a + b, 0)}
                    </span>
                  </div>
                </div>

                <ul>
                  {state.stxAddress.map((value, index) => {
                    return (
                      <li className="p-2 mb-1 border-l-4 cursor-pointer hover:bg-primary-400 bg-primary-600 border-primary-300">
                        <div className="flex flex-wrap justify-between">
                          <div className="flex flex-wrap items-center space-x-3">
                            <span>{value}</span>
                            <ContextNav
                              menuItems={
                                <MenuItems
                                  stx={value}
                                  username={state.username}
                                />
                              }
                              buttonIcon={<MenuIcon />}
                            ></ContextNav>
                          </div>
                          <div className="flex">
                            <span>{addressValue[index]}</span>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <hr className="border-gray-500" />
              <div className="flex flex-wrap justify-between">
                <div className="flex items-baseline space-x-2">
                  <span className="text-2xl">BTC</span>
                  <span className="text-gray-200">100%</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">
                    {addressValue.reduce((a, b) => a + b, 0)}
                  </span>
                  <span className="font-medium text-gray-200">BTC</span>
                </div>
              </div>
              <div>
                <div className="flex flex-wrap justify-between mb-3 text-gray-200">
                  <div className="flex">
                    <span>2 Addresses</span>
                  </div>
                  <div className="flex">
                    <span>
                      {prices.stxusd * addressValue.reduce((a, b) => a + b, 0)}
                    </span>
                  </div>
                </div>

                <ul>
                  {state.btcAddress.map((value, index) => {
                    return (
                      <li className="p-2 mb-1 border-l-4 cursor-pointer hover:bg-primary-400 bg-primary-600 border-primary-300">
                        <div className="flex flex-wrap justify-between">
                          <div className="flex flex-wrap items-center space-x-3">
                            <span>{value}</span>
                            <ContextNav
                              menuItems={
                                <MenuItems
                                  btc={value}
                                  username={state.username}
                                />
                              }
                              buttonIcon={<MenuIcon />}
                            ></ContextNav>
                          </div>
                          <div className="flex">
                            <span>{addressValue[index]}</span>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
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
                  <Select className="py-1 pl-2 mt-1 bg-transparent border-gray-300 leading-1">
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
                      {portfolio.balance / 1000000}
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-between py-2 border-b border-gray-400">
                  <div className="flex space-x-2">
                    <span>Available Balance</span>
                  </div>
                  <div className="flex space-x-2">
                    <span>
                      {(portfolio.balance - portfolio.locked) / 1000000}
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-between py-2">
                  <div className="flex space-x-2">
                    <span>Stacking Balance</span>
                  </div>
                  <div className="flex space-x-2">
                    <Input
                      className="py-3 mb-3 text-white bg-gray-800 border-none text-right"
                      placeholder="STX Value"
                      type="number"
                      value={stx}
                      onChange={(e) => {
                        setSTX(e.target.value);
                      }}
                    ></Input>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-end mb-4">
                  <div>
                    <Select className="py-1 pl-2 mt-1 bg-transparent border-gray-300 leading-1">
                      <option>Daily</option>
                    </Select>
                  </div>
                </div>
                {/* <ChartCard title="Lines">
                  <Line {...lineOptions} />
                  <ChartLegend legends={lineLegends} />
                </ChartCard> */}
              </div>
              <button
                className="mt-4 mb-6 btn btn-outline-primary btn-sm btn-block"
                onClick={onStack}
              >
                Stack now
              </button>
            </CardBody>
          </Card>
          <Card>
            <CardBody className="space-y-8 text-white">
              <div className="flex flex-wrap justify-between">
                <div className="flex flex-wrap items-center">
                  <h2 className="mr-3 text-2xl font-medium">BTC balance</h2>
                </div>
                <div>
                  <Select className="py-1 pl-2 mt-1 bg-transparent border-gray-300 leading-1">
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
                      {parseFloat(
                        portfolio.balance /
                          1000000 /
                          (prices.stxusd * prices.btcusd)
                      ).toFixed(2)}
                      BTC
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-between py-2 border-b border-gray-400">
                  <div className="flex space-x-2">
                    <span>Available Balance</span>
                  </div>
                  <div className="flex space-x-2">
                    <span>
                      {" "}
                      {parseFloat(
                        (portfolio.balance - portfolio.locked) /
                          1000000 /
                          (prices.stxusd * prices.btcusd)
                      ).toFixed(2)}{" "}
                      BTC
                    </span>
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
                    <Select className="py-1 pl-2 mt-1 bg-transparent border-gray-300 leading-1">
                      <option>Staked</option>
                    </Select>
                  </div>
                </div>
                {/* <ChartCard title="Lines">
                  <Line {...lineOptions} />
                  <ChartLegend legends={lineLegends} />
                </ChartCard> */}
              </div>
              <button className="mt-4 mb-6 btn btn-outline-gray btn-sm btn-block">
                Stack now
              </button>
            </CardBody>
          </Card>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default MyPortfolio;
