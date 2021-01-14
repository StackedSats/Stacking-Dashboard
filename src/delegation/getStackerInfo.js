import { openContractCall } from "@stacks/connect";
import { standardPrincipalCV } from "@stacks/transactions";
import logo from "../icons/logo.svg";
import buffer from "buffer";
import { getPerson } from "../scripts/auth";
const Buffer = buffer.Buffer;

// ST000000000000000000002AMW42H
// name : pox
export default async function delegationLock() {
  const options = {
    contractAddress: "ST000000000000000000002AMW42H",
    contractName: "pox",
    functionName: "get-stacker-info",
    functionArgs: [standardPrincipalCV(getPerson()._profile.stxAddress)],
    appDetails: {
      name: "StakedStats",
      icon: { logo },
    },
    finished: (data) => {
      console.log("TX ID:", data.txId);
      console.log("Raw TX:", data.txRaw);
    },
  };
  console.log("trying..");
  await openContractCall(options);
}
