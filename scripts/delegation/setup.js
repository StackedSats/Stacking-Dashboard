import { InfoApi } from "@stacks/blockchain-api-client";

(async function abc() {
  const infoApi = new InfoApi();
  const [contractAddress, contractName] = (
    await infoApi.getPoxInfo()
  ).contract_id.split(".");
  console.log(contractAddress, contractName);
})();
