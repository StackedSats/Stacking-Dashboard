import { openContractCall } from "@stacks/connect";

import logo from "../icons/logo.svg";

import { StacksTestnet } from "@stacks/network";

const network = new StacksTestnet();

async function delegateSTX() {
  const options = {
    contractAddress: "ST000000000000000000002AMW42H",
    contractName: "pox",
    functionName: "revoke-delegate-stx",
    appDetails: {
      name: "StakedStats",
      icon: { logo },
    },
    network,
    finished: async (data) => {
      console.log("TX ID:", data.txId);
      console.log("Raw TX:", data.txRaw);
    },
  };

  console.log(options);
  await openContractCall(options);
}

export default delegateSTX;
