import contract from "./setup";

export default async function delegationLock() {
  contract.callReadOnlyFunction({
    contractAddress: "ST000000000000000000002AMW42H.pox",
    contractName: "ST000000000000000000002AMW42H.pox",
    functionName: "delegate-stack-stx",
    readOnlyFunctionArgs: {
      stacker: delegateTo,
      "delegate-stack-stx": delegateStx,
      "pox-add": poxAddr,
      "amount-ustx": amountUstx,
    },
  });
}
