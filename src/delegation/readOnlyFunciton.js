import {
  Configuration,
  SmartContractsApi,
} from "@stacks/blockchain-api-client";

const Contract = new SmartContractsApi(
  new Configuration({
    basePath: "https://stacks-node-api.testnet.stacks.co",
  })
);
export default Contract;
