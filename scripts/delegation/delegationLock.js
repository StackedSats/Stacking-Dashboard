import { openContractCall } from "@blockstack/connect";

// ST000000000000000000002AMW42H
// name : pox
export default async function delegationLock() {
  // Here's an example of options:
  const options = {
    contractAddress: "ST000000000000000000002AMW42H",
    contractName: "pox",
    functionName: "delegate-stack-stx",
    functionArgs: [
      {
        "pox-add": poxAddr,
        "amount-ustx": amountUstx,
        stacker: delegateTo,
      },
    ],
    authOrigin,
    appDetails: {
      name: "SuperApp",
      icon: "https://example.com/icon.png",
    },
    finished: (data) => {
      console.log("TX ID:", data.txId);
      console.log("Raw TX:", data.txRaw);
    },
  };

  await openContractCall(options);
}
