import { openContractCall } from "@stacks/connect";
import { standardPrincipalCV } from "@stacks/transactions";
import logo from "../icons/logo.svg";
import { getPerson } from "../scripts/auth";
import contract from "./readOnlyFunciton";

// ST000000000000000000002AMW42H
// name : pox
export default async function delegationLock() {
  const options = {
    contractAddress: "SP000000000000000000002Q6VF78.pox",
    contractName: "pox",
    functionName: "get-stacker-info",
    readOnlyFunctionArgs: [
      standardPrincipalCV(getPerson()._profile.stxAddress),
    ],
    // appDetails: {
    //   name: "StakedStats",
    //   icon: { logo },
    // },
    // finished: (data) => {
    //   console.log("TX ID:", data.txId);
    //   console.log("Raw TX:", data.txRaw);
    // },
  };
  console.log("trying..");
  await contract.callReadOnlyFunction(options);
}
