import contract from "./setup";

async function delegateStx(delegateTo, poxAddr, amountUstx, delegateStx) {
  contract.callReadOnlyFunction({
    contractAddress: "ST000000000000000000002AMW42H.pox",
    contractName: "ST000000000000000000002AMW42H.pox",
    functionName: "delegate-stx",
    readOnlyFunctionArgs: {
      "delegate-to": delegateTo,
      "delegate-stx": delegateStx,
      "pox-add": poxAddr,
      "amount-ustx": amountUstx,
    },
  });
}
