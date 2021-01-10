import { openContractCall } from "@blockstack/connect";
import logo from "../icons/logo.svg";
import btcAddress from "./setup";
// ST000000000000000000002AMW42H
// name : pox
export default async function delegationLock({
  stxValue,
  stacker,
  poxaddr,
  htLockPeriod,
  amountustx,
}) {
  // Here's an example of options:
  const options = {
    contractAddress: "ST000000000000000000002AMW42H",
    contractName: "pox",
    functionName: "delegate-stack-stx",
    functionArgs: [
      {
        type: "uint",
        value: stxValue,
      },
      {
        type: "principal",
        value: stacker,
      },
      {
        type: "uint",
        value: amountustx,
      },

      {
        type: "buff",
        value: btcAddress(poxaddr),
      },
      {
        type: "uint",
        value: htLockPeriod,
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
