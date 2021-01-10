import { InfoApi } from "@stacks/blockchain-api-client";
const btc = require("bitcoinjs-lib");

const btcAddress = (addr) =>
  "0x" +
  btc.address
    .fromBase58Check("1C56LYirKa3PFXFsvhSESgDy2acEHVAEt6")
    .hash.toString("hex");

export { btcAddress };

async function abc() {
  const infoApi = new InfoApi();
  const [contractAddress, contractName] = (
    await infoApi.getPoxInfo()
  ).contract_id.split(".");
  console.log(contractAddress, contractName);
}
