import { openContractCall } from "@blockstack/connect";
import logo from "../icons/logo.svg";
import btcAddress from "./setup";
export default async function delegateSTX({ poxAddr, amountSTX, delegateToo }) {
  const options = {
    contractAddress: "ST000000000000000000002AMW42H",
    contractName: "pox",
    functionName: "delegate-stx",
    functionArgs: [
      {
        type: "uint",
        value: amountSTX,
      },
      {
        // delegate too
        type: "principal",
        value: delegateToo,
      },
      {
        // poxaddr
        type: "buff",
        value: btcAddress(poxAddr),
      },
    ],

    appDetails: {
      name: "StakedStats",
      icon: { logo },
    },
    finished: (data) => {
      console.log("TX ID:", data.txId);
      console.log("Raw TX:", data.txRaw);
    },
  };

  await openContractCall(options);
}

export default delegateSTX;
