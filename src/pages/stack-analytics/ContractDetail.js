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
import axios from "axios";
import tc from "../../assets/img/graph-fn-calls.svg";
import tf from "../../assets/img/graph-transaction-fees.png";

const Left = () => {
  return (
    <>
      <h1 className="mb-3 text-2xl">Contract Detail</h1>
      <div>KsdfkjkfjsJDFhdaskjhsH56542246.formate.name</div>
    </>
  );
};

const Right = () => {
  return <></>;
};

function Blank() {
  const [calls, setCalls] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const data = await axios.get(
        `${process.env.REACT_APP_BACKENDURL}/callHistory`
      );
      setCalls(data.data);
    };
    fetch();
  }, []);
  return (
    <>
      <PageTitle left={<Left />} right={<Right />}></PageTitle>
      <div className="p-4 space-y-6">
        <div className="grid grid-cols-1 mb-8 xl:gap-6 xl:grid-cols-3">
          <div class="col-span-2">
            <Card className="mb-8 shadow-md">
              <CardBody className="text-white">
                <div className="flex flex-wrap justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span>
                      <h3 className="mr-4 text-lg font-medium">Call History</h3>
                    </span>
                    <div className="flex items-center ml-10 text-primary-400">
                      <FiDownload />
                      <span className="ml-1">Export</span>
                    </div>
                  </div>
                  <div>
                    <Select className="py-1 pl-2 mt-1 bg-transparent border-gray-300 leading-1">
                      <option>Sort By</option>
                    </Select>
                  </div>
                </div>
                <TableContainer className="mb-8">
                  <Table>
                    <TableHeader>
                      <tr>
                        <TableCell>Function</TableCell>
                        <TableCell>Contracts</TableCell>
                        <TableCell>Fee</TableCell>
                        <TableCell>Time</TableCell>
                      </tr>
                    </TableHeader>
                    <TableBody className="text-lg divide-gray-500">
                      {calls.map((value, index) => {
                        return (
                          <TableRow className="text-white" key={index}>
                            <TableCell>{value.functionName}</TableCell>
                            <TableCell>{value.stxAddress}</TableCell>
                            <TableCell>{value.fee} STX</TableCell>
                            <TableCell>
                              {parseInt(
                                (Date.now() - new Date(value.date)) /
                                  (1000 * 60 * 24),
                                10
                              )}{" "}
                              min. ago
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardBody>
            </Card>
          </div>
          <div className="space-y-6">
            <Card>
              <CardBody className="-mb-8 space-y-8 text-white">
                <div className="flex flex-wrap justify-between">
                  <div className="flex flex-wrap items-center">
                    <h2 className="mr-3 text-xl font-medium">Function Calls</h2>
                  </div>
                  <div>
                    <Select className="py-1 pl-2 mt-1 bg-transparent border-gray-300 leading-1">
                      <option>24 Hrs</option>
                    </Select>
                  </div>
                </div>
                <div className="pb-3 mb-3 border-b border-gray-500">
                  <div className="flex flex-wrap justify-between">
                    <div>Total # of Function Calls</div>
                    <div className="flex font-medium text-success-500">200</div>
                  </div>
                </div>
                <img className="w-full align-middle" src={tc} alt="" />
              </CardBody>
            </Card>
            <Card>
              <CardBody className="-mb-8 space-y-8 text-white">
                <h2 className="mr-3 text-xl font-medium">Transaction fees</h2>
                <img className="align-middle" src={tf} alt="" />
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blank;
