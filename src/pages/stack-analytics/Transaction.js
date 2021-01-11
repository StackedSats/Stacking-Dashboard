import React, { useEffect, useState } from "react";
import { getPerson } from "../../scripts/auth";
import PageTitle from "../../components/Typography/PageTitle";
import { Card, CardBody, Select } from "@windmill/react-ui";
import { FiDownload, FiCopy } from "react-icons/fi";
import { useSelector } from "react-redux";
import ts from "../../assets/img/graph-transfer-summary.png";
import tf from "../../assets/img/graph-transaction-fees.png";
import axios from "axios";
import { Right } from "../../components/right";
import Error from "../404";

const Left = ({
  tx = "0x934893edfe93250acb8f2b51ea64d36e137e23ffb5f114bb7347bb5b098f53d4",
}) => {
  const data = getPerson();
  console.log(tx);
  return (
    <>
      <h1 className="mb-3 text-2xl">Transaction</h1>
      <div className="flex items-center text-gray-200">
        <span className="mr-2 text-white">{tx}</span>
        <FiCopy />
      </div>
    </>
  );
};

function Blank() {
  const [values, setValues] = useState({
    tx_id: "0x934893edfe93250acb8f2b51ea64d36e137e23ffb5f114bb7347bb5b098f53d4",
    tx_type: "token_transfer",
    fee_rate: "2000",
    sender_address: "ST11NJTTKGVT6D1HY4NJRVQWMQM7TVAR091EJ8P2Y",
    sponsored: false,
    post_condition_mode: "deny",
    tx_status: "success",
    block_hash:
      "0xb30e21326dfe99ecd179223bffbf54778aea3907464af9ff2b0bf83279a3d5cb",
    block_height: 119,
    burn_block_time: 1610146472,
    burn_block_time_iso: "2021-01-08T22:54:32.000Z",
    canonical: true,
    tx_index: 1,
    tx_result: {
      hex: "0x0703",
      repr: "(ok true)",
    },
    token_transfer: {
      recipient_address: "ST3HNB2BXW3ZWGFQHNRWJ140G36PWKGTA3EZHCKQR",
      amount: "95255300000000",
      memo:
        "0x00000000000000000000000000000000000000000000000000000000000000000000",
    },
    events: [
      {
        event_index: 0,
        event_type: "stx_asset",
        asset: {
          asset_event_type: "transfer",
          sender: "ST11NJTTKGVT6D1HY4NJRVQWMQM7TVAR091EJ8P2Y",
          recipient: "ST3HNB2BXW3ZWGFQHNRWJ140G36PWKGTA3EZHCKQR",
          amount: "95255300000000",
        },
      },
    ],
  });

  const totalBalance = useSelector((state) => state.prices);
  const tx_id = useSelector((state) => state.txid);

  useEffect(() => {
    if (tx_id) {
      axios
        .get(`https://stacks-node-api.blockstack.org/extended/v1/tx/${tx_id}`)
        .then((res) => {
          setValues(res.data);
        });
    } else {
    }
  }, [tx_id]);

  if (!tx_id) {
    return <Error />;
  } else {
    return (
      <>
        <PageTitle
          left={<Left />}
          right={<Right values={totalBalance} />}
        ></PageTitle>
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
                        <span>
                          {new Date(values.burn_block_time).toDateString()}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center justify-between py-2 border-b border-gray-600">
                        <span className="text-gray-200">Block</span>
                        <span>{values.block_height}</span>
                      </div>
                      <div className="flex flex-wrap items-center justify-between py-2 border-b border-gray-600">
                        <span className="text-gray-200">Confirmations</span>
                        <span className="text-success-500">100+</span>
                      </div>
                      <div className="flex flex-wrap items-center justify-between py-2 border-b border-gray-600">
                        <span className="text-gray-200">Node Fee</span>
                        <span>{values.fee_rate} STX</span>
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
                        <span>{values.sender_address}</span>
                      </div>
                      <div className="flex flex-wrap items-center justify-between py-2 border-b border-gray-600">
                        <span className="text-primary-400">Receiver</span>
                        <span>{values.token_transfer.recipient_address}</span>
                      </div>
                      <div className="flex flex-wrap items-center justify-between py-2 border-b border-gray-600">
                        <span>Amount</span>
                        <span className="text-success-500">
                          {values.token_transfer.amount}
                        </span>
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
                      <h2 className="mr-3 text-xl font-medium">
                        Total balance
                      </h2>
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
}

export default Blank;
