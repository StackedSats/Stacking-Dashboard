import React, { useEffect, useState } from "react";

import PageTitle from "../../components/Typography/PageTitle";

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
import { FiDownload } from "react-icons/fi";
import { TabGroup } from "@statikly/funk";
import ts from "../../assets/img/graph-transfer-summary.png";
import tf from "../../assets/img/graph-transaction-fees.png";
import { Right } from "../../components/right";
import axios from "axios";
import { prices } from "../../redux/reducers";
import ThemedSuspense from "../../components/ThemedSuspense";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { UPDATETX } from "../../redux/reducers";

const Left = () => {
  return (
    <>
      <h1 className="mb-3 text-2xl">Transfer Activity</h1>
      <div>Dec 20, 2020 01:38</div>
    </>
  );
};

function Blank() {
  const [list, setList] = useState([]);
  const prices = useSelector((state) => state.prices);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetch = async () => {
      const data = await axios.get(
        `https://stacks-node-api.testnet.stacks.co/extended/v1/address/ST000000000000000000002AMW42H/transactions`
      );
      console.log(data.data);
      setList(data.data.results);
    };
    fetch();
  }, []);

  const redirect = (tx) => {
    console.log(tx);
    dispatch({ type: UPDATETX, payload: tx });
    history.push("/app/stack-analytics/transaction");
  };

  if (list.length === 0) {
    return <ThemedSuspense />;
  }
  return (
    <>
      <PageTitle left={<Left />} right={<Right />}></PageTitle>
      <div className="p-4 space-y-6">
        <div className="grid grid-cols-1 mb-8 xl:gap-6 xl:grid-cols-3">
          <div class="col-span-2">
            <Card className="mb-8 shadow-md">
              <CardBody>
                <TabGroup numTabs={3} direction={TabGroup.direction.HORIZONTAL}>
                  <div className="flex items-center justify-between text-gray-400 dark:text-white">
                    <div className="flex items-center">
                      <TabGroup.TabList>
                        <TabGroup.Tab
                          index={0}
                          className="px-1 py-2 mr-3 text-xl transition-colors duration-150"
                          activeClassName="text-primary-500 dark:text-white"
                          inactiveClassName="text-gray-400 dark:text-gray-300"
                        >
                          Transfers
                        </TabGroup.Tab>
                        <TabGroup.Tab
                          index={1}
                          className="px-1 py-2 mr-3 text-xl transition-colors duration-150"
                          activeClassName="text-primary-500 dark:text-white"
                          inactiveClassName="text-gray-400 dark:text-gray-300"
                        >
                          Largest Transfers
                        </TabGroup.Tab>
                      </TabGroup.TabList>
                      <div className="flex items-center ml-10 text-primary-400">
                        <FiDownload />
                        <span className="ml-1">Export</span>
                      </div>
                    </div>
                    {/* <div>
                      <Select className="py-1 pl-2 mt-1 leading-1 dark:bg-transparent dark:border-gray-300">
                        <option>Sort By</option>
                      </Select>
                    </div> */}
                  </div>
                  <TabGroup.TabPanel
                    index={0}
                    className="py-10 text-gray-500 transition-all transform dark:text-gray-200"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                  >
                    <TableContainer className="mb-8">
                      <Table>
                        <TableHeader>
                          <tr>
                            <TableCell>Date</TableCell>
                            <TableCell>Block Height</TableCell>
                            <TableCell>Sender</TableCell>
                            <TableCell>Receiver</TableCell>
                            <TableCell>Volume</TableCell>
                          </tr>
                        </TableHeader>
                        <TableBody className="text-lg dark:divide-gray-500">
                          {list
                            .filter((value) => {
                              return value.token_transfer === undefined
                                ? false
                                : true;
                            })
                            .map((value, index) => {
                              return (
                                <TableRow
                                  key={index}
                                  onClick={(e) => redirect(value.tx_id)}
                                >
                                  <TableCell>
                                    <div className="text-lg text-white">
                                      Today
                                    </div>
                                    <span className="text-sm">
                                      {new Date(
                                        value.burn_block_time_iso
                                      ).toLocaleDateString()}{" "}
                                      GMT
                                    </span>
                                  </TableCell>
                                  <TableCell>
                                    <span className="text-white">
                                      {value.block_height}
                                    </span>
                                  </TableCell>
                                  <TableCell>
                                    {/* <div className="text-error-500">Karim</div> */}
                                    <span>{value.sender_address}</span>
                                  </TableCell>
                                  <TableCell>
                                    {/* <div className="text-primary-500">Karim</div> */}
                                    <span>
                                      {value.token_transfer.recipient_address}
                                    </span>
                                  </TableCell>
                                  <TableCell>
                                    <div className="float-right text-white">
                                      {value.token_transfer.amount} STX
                                    </div>
                                    <div className="float-right text-sm">
                                      <span className="text-warning-500">
                                        {(value.token_transfer.amount *
                                          prices.stxusd) /
                                          prices.btcusd}
                                      </span>{" "}
                                      BTC |{" "}
                                      <span className="text-success-600">
                                        {value.token_transfer.amount *
                                          prices.stxusd}
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
                  {/* <TabGroup.TabPanel
                    index={1}
                    className="flex flex-col py-10 text-gray-500 transition-all transform dark:text-gray-200"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                  >
                    Largest Transfers
                  </TabGroup.TabPanel> */}
                </TabGroup>
              </CardBody>
            </Card>
          </div>
          {/* <div className="space-y-6">
            <Card>
              <CardBody className="-mb-8 space-y-8 text-white">
                <div className="flex flex-wrap justify-between">
                  <div className="flex flex-wrap items-center">
                    <h2 className="mr-3 text-xl font-medium">Total balance</h2>
                  </div>
                  <div>
                    <Select className="py-1 pl-2 mt-1 leading-1 dark:bg-transparent dark:border-gray-300">
                      <option>24 Hrs</option>
                    </Select>
                  </div>
                </div>
                <div className="pb-3 mb-3 border-b border-gray-500">
                  <div className="flex flex-wrap justify-between">
                    <div>Total Transfer</div>
                    <div className="flex font-medium">45459.59 STX</div>
                  </div>
                  <div className="flex flex-wrap justify-between text-sm text-gray-300">
                    <div className="flex">Transfered with 1k txn</div>
                    <span>
                      <span className="text-yellow-500">3.25</span> BTC |{" "}
                      <span className="text-green-600">245,635</span> USD
                    </span>
                  </div>
                </div>
                <img className="align-middle" src={ts} alt="" />
              </CardBody>
            </Card>
            <Card>
              <CardBody className="-mb-8 space-y-8 text-white">
                <h2 className="mr-3 text-xl font-medium">Transaction fees</h2>
                <img className="align-middle" src={tf} alt="" />
              </CardBody>
            </Card>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Blank;
