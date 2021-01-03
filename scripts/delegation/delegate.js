import { openContractCall } from "@blockstack/connect";

async function delegateStx(delegateTo, poxAddr, amountUstx, delegateStx) {
  const options = {
    contractAddress: "ST000000000000000000002AMW42H",
    contractName: "pox",
    functionName: "delegate-stx",
    functionArgs: [
      {
        "pox-add": poxAddr,
        "amount-ustx": amountUstx,
        "delegate-to": delegateTo,
        "delegate-stx": delegateStx,
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
