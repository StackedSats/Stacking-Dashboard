import { openContractCall } from "@stacks/connect";
import { StacksTestnet } from "@stacks/network";
import {
  callReadOnlyFunction,
  standardPrincipalCV,
} from "@stacks/transactions";
import logo from "../icons/logo.svg";
import { getPerson } from "../scripts/auth";
import contract from "./readOnlyFunciton";

const network = new StacksTestnet();

// ST000000000000000000002AMW42H
// name : pox
export default async function delegationLock() {
  const { testnet } = getPerson()._profile.stxAddress;
  console.log(getPerson()._profile.stxAddress);
  const options = {
    contractAddress: "ST000000000000000000002AMW42H",
    contractName: "pox",
    functionName: "get-stacker-info",
    functionArgs: [standardPrincipalCV(testnet)],
    senderAddress: "ST000000000000000000002AMW42H",
    // appDetails: {
    //   name: "StakedStats",
    //   icon: { logo },
    // },
    // finished: (data) => {
    //   console.log("TX ID:", data.txId);
    //   console.log("Raw TX:", data.txRaw);
    // },
    network,
  };
  console.log("trying..");
  await callReadOnlyFunction(options);
}
