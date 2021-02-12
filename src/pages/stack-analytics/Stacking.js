import React, { useEffect, useState } from "react";

import PageTitle from "../../components/Typography/PageTitle";
import CountdownTimer from "../../components/CountdownTimer";
import PreviousCycles from "../../components/Chart/PreviousCycles";

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

import { TabGroup } from "@statikly/funk";
import { useSelector, useDispatch } from "react-redux";
import { FiSearch } from "react-icons/fi";

import tf from "../../assets/img/graph-transaction-fees.png";
import { Right } from "../../components/right";
import axios from "axios";

const Left = () => {
  return (
    <>
      <h1 className="mb-3 text-2xl">Stacking</h1>
      <div>{new Date().toLocaleDateString()}</div>
    </>
  );
};

function Blank() {
  const [txs, setTxs] = useState([]);
  const [cycle, setCycle] = useState({});
  const prices = useSelector((state) => state.prices);

  useEffect(() => {
    const fetch = async () => {
      const data = await axios.get(
        `${process.env.REACT_APP_BACKENDURL}/rewardHistory`
      );
      setTxs(data.data);
      const cycle = await axios.get(
        `${process.env.REACT_APP_BACKENDURL}/cycleInfo`
      );
      setCycle(cycle.data);
      console.log(cycle.data);
    };

    fetch();
  }, []);

  return (
    <>
      <PageTitle left={<Left />} right={<Right />}></PageTitle>

      <div className="p-4 space-y-6">
        <Card className="mb-8 shadow-md">
          <CardBody className="space-y-8 text-white">
            <div className="grid grid-cols-1 mb-8 xl:gap-6 xl:grid-cols-5">
              <div>
                <h3 className="mb-10 text-2xl font-medium">Previous Cycles</h3>
                <div className="flex justify-center">
                  <PreviousCycles data={cycle}></PreviousCycles>
                </div>
              </div>
              <div className="col-span-4">
                <TabGroup numTabs={3} direction={TabGroup.direction.HORIZONTAL}>
                  <div className="flex items-center justify-between text-gray-400 dark:text-white">
                    <div className="flex items-center">
                      <TabGroup.TabList>
                        <TabGroup.Tab
                          index={0}
                          className="px-4 py-2 mr-3 text-xl transition-colors duration-150"
                          activeClassName="text-primary-500 dark:text-white"
                          inactiveClassName="text-gray-400 dark:text-gray-300"
                        >
                          Distributed Rewards
                        </TabGroup.Tab>
                        {/* <TabGroup.Tab
                          index={1}
                          className="px-4 py-2 mr-3 text-xl transition-colors duration-150"
                          activeClassName="text-primary-500 dark:text-white"
                          inactiveClassName="text-gray-400 dark:text-gray-300"
                        >
                          Total BTC Rewards
                        </TabGroup.Tab> */}
                      </TabGroup.TabList>
                    </div>
                    <div>
                      <Select className="py-1 pl-2 mt-1 leading-1 dark:bg-transparent dark:border-gray-300">
                        <option>Sort By</option>
                      </Select>
                    </div>
                  </div>
                  <TabGroup.TabPanel
                    index={0}
                    className="py-6 text-gray-200 transition-all transform"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                  >
                    <div className="relative text-gray-500 focus-within:text-primary-600 dark:focus-within:text-primary-400">
                      <Input
                        className="py-3 pl-10 mb-3 text-white bg-gray-900 border-none"
                        placeholder="Search by name, hash or number"
                      />
                      <div className="absolute inset-y-0 flex items-center ml-3 pointer-events-none">
                        <FiSearch className="w-5 h-5" aria-hidden="true" />
                      </div>
                    </div>
                    <TableContainer className="mb-8">
                      <Table>
                        <TableHeader>
                          <tr>
                            <TableCell>Date</TableCell>
                            <TableCell>Send to</TableCell>
                            <TableCell>Reward Distributed</TableCell>
                          </tr>
                        </TableHeader>
                        <TableBody className="text-lg dark:divide-gray-500">
                          {txs.map((value, index) => {
                            return (
                              <TableRow>
                                <TableCell>
                                  <div className="text-lg text-white">
                                    Today
                                  </div>
                                  <span className="text-base">
                                    {value.date} GMT
                                  </span>
                                </TableCell>
                                <TableCell>
                                  <span>{value.to}</span>
                                </TableCell>
                                <TableCell>
                                  <div className="text-white ">
                                    {value.reward} STX
                                  </div>
                                  <div className="">
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
                              </TableRow>
                            );
                          })}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </TabGroup.TabPanel>
                  <TabGroup.TabPanel
                    index={1}
                    className="flex flex-col py-10 text-gray-200 transition-all transform"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                  >
                    Total BTC Rewards
                  </TabGroup.TabPanel>
                </TabGroup>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default Blank;
