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
import { TabGroup } from "@statikly/funk";
import axios from "axios";
import { getPerson } from "../../scripts/auth";
import { useHistory } from "react-router-dom";
import { UPDATETX } from "../../redux/reducers";
import { useSelector, useDispatch } from "react-redux";
import { Right } from "../../components/right";

const Left = () => {
  return (
    <>
      <h1 className="mb-3 text-2xl">Account</h1>
      <div>KsdfkjkfjsJDFhdaskjhsH56542246.formate.name</div>
    </>
  );
};

// const Right = () => {
//   return (
//     <>
//       <div className="flex justify-between">
//         <div className="pr-6 mr-6 text-gray-300 border-r border-gray-400">
//           <p className="mb-1">Total STX in circulation</p>
//           <div className="text-xl font-medium text-success-400">
//             4,647,916,016 XTZ
//           </div>
//           <div>$0.016</div>
//         </div>
//         <div>
//           <p className="mb-1">Circulation with</p>
//           <div className="text-xl text-white">
//             <b>34000</b> Wallet
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

function Blank() {
  const [date, setDate] = useState([]);
  const history = useHistory();
  const dispatch = useDispatch();

  const redirect = (tx) => {
    console.log(tx);
    dispatch({ type: UPDATETX, payload: tx });
    history.push("/app/stack-analytics/transaction");
  };
  useEffect(() => {
    const fetch = async () => {
      const addr = getPerson();
      const data = await axios.get(
        `https://stacks-node-api.blockstack.org/extended/v1/address/${addr._profile.stxAddress}/transactions`
      );
      console.log(data);
      setDate(data.data.results);
    };
    fetch();
  }, []);

  return (
    <>
      <PageTitle left={<Left />} right={<Right />}></PageTitle>

      <div className="p-4 space-y-6">
        <div className="grid grid-cols-1 mb-8 xl:gap-6 xl:grid-cols-2">
          <Card className="mb-8 shadow-md">
            <CardBody className="text-white">
              <h3 className="mb-10 text-2xl font-medium">Summary of STX</h3>
              <TableContainer className="mb-8">
                <Table>
                  <TableHeader>
                    <tr>
                      <TableCell>Date</TableCell>
                      <TableCell>Block</TableCell>
                      <TableCell>Sender</TableCell>
                      <TableCell>Volume</TableCell>
                    </tr>
                  </TableHeader>
                  <TableBody className="text-lg divide-gray-500">
                    {date.map((value, index) => {
                      return (
                        <TableRow
                          className="text-white"
                          onClick={(e) => redirect(value.tx_id)}
                        >
                          <TableCell>
                            {new Date(
                              value.burn_block_time
                            ).toLocaleDateString()}
                          </TableCell>
                          <TableCell>{value.block_height}</TableCell>
                          <TableCell>{value.sender_address}</TableCell>
                          <TableCell>
                            <div className="text-white "> STX</div>
                            <div className="">
                              <span className="text-warning-500">3.25</span> BTC
                              |{" "}
                              <span className="text-success-600">245,635</span>{" "}
                              USD
                            </div>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardBody>
          </Card>
          <Card className="mb-8 shadow-md">
            <CardBody className="text-white">
              <TabGroup numTabs={3} direction={TabGroup.direction.HORIZONTAL}>
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center">
                    <TabGroup.TabList>
                      <TabGroup.Tab
                        index={0}
                        className="px-4 py-2 mr-3 text-xl transition-colors duration-150"
                        activeClassName="text-primary-500 text-white"
                        inactiveClassName="text-gray-400 text-gray-300"
                      >
                        Largest Wallet
                      </TabGroup.Tab>
                      <TabGroup.Tab
                        index={1}
                        className="px-4 py-2 mr-3 text-xl transition-colors duration-150"
                        activeClassName="text-primary-500 text-white"
                        inactiveClassName="text-gray-400 text-gray-300"
                      >
                        Exchange Wallet
                      </TabGroup.Tab>
                    </TabGroup.TabList>
                  </div>
                  <div>
                    <Select className="py-1 pl-2 mt-1 bg-transparent border-gray-300 leading-1">
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
                  <TableContainer className="mb-8">
                    <Table>
                      <TableHeader>
                        <tr>
                          <TableCell>Rank</TableCell>
                          <TableCell>Name</TableCell>
                          <TableCell>Balance</TableCell>
                        </tr>
                      </TableHeader>
                      <TableBody className="text-lg divide-gray-500">
                        <TableRow className="text-white">
                          <TableCell>1</TableCell>
                          <TableCell>Binance</TableCell>
                          <TableCell>
                            <div className="text-white ">465,465,416 STX</div>
                            <div className="">
                              <span className="text-warning-500">3.25</span> BTC
                              |{" "}
                              <span className="text-success-600">245,635</span>{" "}
                              USD
                            </div>
                          </TableCell>
                        </TableRow>
                        <TableRow className="text-white">
                          <TableCell>2</TableCell>
                          <TableCell>Stackedsats</TableCell>
                          <TableCell>
                            <div className="text-white ">465,465,416 STX</div>
                            <div className="">
                              <span className="text-warning-500">3.25</span> BTC
                              |{" "}
                              <span className="text-success-600">245,635</span>{" "}
                              USD
                            </div>
                          </TableCell>
                        </TableRow>
                        <TableRow className="text-white">
                          <TableCell>3</TableCell>
                          <TableCell>OkCoin</TableCell>
                          <TableCell>
                            <div className="text-white ">465,465,416 STX</div>
                            <div className="">
                              <span className="text-warning-500">3.25</span> BTC
                              |{" "}
                              <span className="text-success-600">245,635</span>{" "}
                              USD
                            </div>
                          </TableCell>
                        </TableRow>
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
                  Exhange Wallet
                </TabGroup.TabPanel>
              </TabGroup>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Blank;
