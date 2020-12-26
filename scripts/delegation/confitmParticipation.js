import contract from "./setup";

export default async function confirmParticipation(poxAddr) {
  contract.callReadOnlyFunction({
    contractAddress: "ST000000000000000000002AMW42H.pox",
    contractName: "ST000000000000000000002AMW42H.pox",
    functionName: "stack-aggregation-commit",
    readOnlyFunctionArgs: {
      "pox-add": poxAddr,
    },
  });
}
