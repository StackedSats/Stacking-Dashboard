import { openContractCall } from "@blockstack/connect";
import logo from "../icons/logo.svg";
import btcAddress from "./setup";

async function delegateStx(delegateTo, poxAddr, rewardCycle) {
  const options = {
    contractAddress: "ST000000000000000000002AMW42H",
    contractName: "pox",
    functionName: "stack-aggregation-commit",
    functionArgs: [
      {
        type: "buff",
        value: btcAddress(poxAddr),
      },
      {
        type: "uint",
        value: rewardCycle,
      },
    ],
    appDetails: {
      name: "StakedStats",
      icon: logo,
    },
    finished: (data) => {
      console.log("TX ID:", data.txId);
      console.log("Raw TX:", data.txRaw);
    },
  };

  await openContractCall(options);
}
