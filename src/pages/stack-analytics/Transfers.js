import React, { useEffect, useState } from "react";

import PageTitle from "../../components/Typography/PageTitle";

import {
  Card,
  CardBody,
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
import fileDownload from "js-file-download";

const Left = () => {
  return (
    <>
      <h1 className="mb-3 text-2xl">Transfer Activity</h1>
      <div>{new Date().toLocaleDateString()}</div>
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

  const exportCSV = () => {
    const downloadelist = list.map((value) => {
      return JSON.stringify(value);
    });
    fileDownload(downloadelist, "report.csv");
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
                      </TabGroup.TabList>
                      <div className="flex items-center ml-10 text-primary-400">
                        <FiDownload />
                        <button onClick={exportCSV} className="ml-1">
                          Export
                        </button>
                      </div>
                    </div>
                  </div>
                  <TabGroup.TabPanel
                    index={0}
                    className="py-10 text-gray-500 transition-all transform dark:text-gray-200"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                  >
                    <TableContainer className="mb-1">
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
                          {list.map((value, index) => {
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
                                    {value.token_transfer
                                      ? value.token_transfer.recipient_address
                                      : null}
                                  </span>
                                </TableCell>
                                <TableCell>
                                  <div className="float-right text-white">
                                    {value.token_transfer
                                      ? value.token_transfer.amount
                                      : 0}{" "}
                                    STX
                                  </div>
                                  <div className="float-right text-sm">
                                    <span className="text-warning-500">
                                      {value.token_transfer
                                        ? (value.token_transfer.amount *
                                            prices.stxusd) /
                                          prices.btcusd
                                        : 0}
                                    </span>{" "}
                                    BTC |{" "}
                                    <span className="text-success-600">
                                      {value.token_transfer
                                        ? value.token_transfer.amount *
                                          prices.stxusd
                                        : 0}
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
                </TabGroup>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blank;
