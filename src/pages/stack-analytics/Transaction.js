import React from "react";

import PageTitle from "../../components/Typography/PageTitle";
import { Card, CardBody, Select } from "@windmill/react-ui";
import { FiDownload, FiCopy } from "react-icons/fi";
import ts from "../../assets/img/graph-transfer-summary.png";
import tf from "../../assets/img/graph-transaction-fees.png";

const Left = () => {
  return (
    <>
      <h1 className="mb-3 text-2xl">Transaction</h1>
      <div className="flex items-center text-gray-200">
        <span className="mr-2 text-white">
          KsdfkjkfjsJDFhdaskjhsH56542246.formate.name
        </span>
        <FiCopy />
      </div>
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

function Blank() {
  return (
    <>
      <PageTitle left={<Left />} right={<Right />}></PageTitle>
      <div className="p-4 space-y-6">
        <div className="grid grid-cols-1 mb-8 xl:gap-6 xl:grid-cols-3">
          <div class="col-span-2">
            <Card className="mb-8 shadow-md">
              <CardBody className="space-y-8 text-white">
                <div className="flex justify-between">
                  <div className="flex items-center space-x-2">
                    <span>
                      <h3 className="mr-4 text-lg font-medium">
                        Transfer Information
                      </h3>
                    </span>
                    <div className="flex items-center ml-10 text-primary-400">
                      <FiDownload />
                      <span className="ml-1">Export</span>
                    </div>
                  </div>
                  <div className="flex">
                    <Select className="py-1 pl-2 mt-1 bg-transparent border-gray-300 leading-1">
                      <option>Sort By</option>
                    </Select>
                  </div>
                </div>
                <div className="grid gap-6 divide-x divide-gray-600 xl:grid-cols-2">
                  <div>
                    <div className="flex flex-wrap items-center justify-between py-2 border-b border-gray-600">
                      <span className="text-gray-200">Date & Time</span>
                      <span>Dec 19, 2020 20:47:04</span>
                    </div>
                    <div className="flex flex-wrap items-center justify-between py-2 border-b border-gray-600">
                      <span className="text-gray-200">Block</span>
                      <span>1,452,658</span>
                    </div>
                    <div className="flex flex-wrap items-center justify-between py-2 border-b border-gray-600">
                      <span className="text-gray-200">Confirmations</span>
                      <span className="text-success-500">100+</span>
                    </div>
                    <div className="flex flex-wrap items-center justify-between py-2 border-b border-gray-600">
                      <span className="text-gray-200">Node Fee</span>
                      <span>0.0125 STX</span>
                    </div>
                    <div className="flex flex-wrap items-center justify-between py-2 border-b border-gray-600">
                      <span className="text-gray-200">Sats Used</span>
                      <span>1,427 / 18,000 [7.93%]</span>
                    </div>
                    <div className="flex flex-wrap items-center justify-between py-2 border-b border-gray-600">
                      <span className="text-gray-200">Gaia Storage Used</span>
                      <span>0 / 257 [0.00%]</span>
                    </div>
                  </div>
                  <div className="pl-4">
                    <div className="flex flex-wrap items-center justify-between py-2 border-b border-gray-600">
                      <span className="text-error-500">Sender</span>
                      <span>STXs5d654896....dfg26fg</span>
                    </div>
                    <div className="flex flex-wrap items-center justify-between py-2 border-b border-gray-600">
                      <span className="text-primary-400">Receiver</span>
                      <span>STXtghyj4uj451....y6s9d81</span>
                    </div>
                    <div className="flex flex-wrap items-center justify-between py-2 border-b border-gray-600">
                      <span>Amount</span>
                      <span className="text-success-500">253,548 STX</span>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
          <div className="space-y-6">
            <Card>
              <CardBody className="-mb-8 space-y-8 text-white">
                <div className="flex flex-wrap justify-between">
                  <div className="flex flex-wrap items-center">
                    <h2 className="mr-3 text-xl font-medium">Total balance</h2>
                  </div>
                  <div>
                    <Select className="py-1 pl-2 mt-1 bg-transparent border-gray-300 leading-1">
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Blank;
