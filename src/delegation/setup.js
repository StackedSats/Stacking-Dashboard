import { InfoApi } from "@stacks/blockchain-api-client";
// const btc = require("bitcoinjs-lib");
import { StackingClient } from "@stacks/stacking";
import { StacksTestnet } from "@stacks/network";
import { getPerson } from "../scripts/auth";

const client = new StackingClient(
  getPerson()._profile.stxAddress,
  new StacksTestnet()
);

export { client };

async function abc() {
  const infoApi = new InfoApi();
  const [contractAddress, contractName] = (
    await infoApi.getPoxInfo()
  ).contract_id.split(".");
  console.log(contractAddress, contractName);
}
