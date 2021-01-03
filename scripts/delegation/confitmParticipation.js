import { openContractCall } from "@blockstack/connect";

export default async function confirmParticipation(poxAddr) {
  const options = {
    contractAddress: "ST000000000000000000002AMW42H",
    contractName: "pox",
    functionName: "stack-aggregation-commit",
    functionArgs: [
      {
        "pox-add": poxAddr,
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
