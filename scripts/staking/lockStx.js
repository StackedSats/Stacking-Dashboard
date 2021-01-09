const { TransactionsApi } = require("@stacks/blockchain-api-client");

const apiConfig = new Configuration({
  fetchApi: fetch,
  basePath: "https://stacks-node-api.blockstack.org", // defaults to http://localhost:3999
});

const tx = new TransactionsApi(apiConfig);

let txid = "";

async function getCoreInfo() {
  const coreInfo = await client.getCoreInfo();
  return coreInfo;
  // coreInfo:
  // {
  //   peer_version: 385875968,
  //   pox_consensus: 'bb88a6e6e65fa7c974d3f6e91a941d05cc3dff8e',
  //   burn_block_height: 2133,
  //   stable_pox_consensus: '2284451c3e623237def1f8caed1c11fa46b6f0cc',
  //   stable_burn_block_height: 2132,
  //   server_version: 'blockstack-core 0.0.1 => 23.0.0.0 (HEAD:a4deb7a+, release build, linux [x86_64])',
  //   network_id: 2147483648,
  //   parent_network_id: 3669344250,
  //   stacks_tip_height: 1797,
  //   stacks_tip: '016df36c6a154cb6114c469a28cc0ce8b415a7af0527f13f15e66e27aa480f94',
  //   stacks_tip_consensus_hash: 'bb88a6e6e65fa7c974d3f6e91a941d05cc3dff8e',
  //   unanchored_tip: '6b93d2c62fc07cf44302d4928211944d2debf476e5c71fb725fb298a037323cc',
  //   exit_at_block_height: null
  // }
}

export async function lockStxToStack() {
  // set the amount to lock in microstacks
  const amountMicroStx = new BN(100000000000);

  // set the burnchain (BTC) block for stacking lock to start
  // you can find the current burnchain block height from coreInfo above
  // and adding 3 blocks to provide a buffer for transaction to confirm
  const burnBlockHeight = (await getCoreInfo()) + 3;

  // execute the stacking action by signing and broadcasting a transaction to the network
  client
    .stack({
      amountMicroStx,
      poxAddress: btcAddress,
      cycles: 3,
      privateKey,
      burnBlockHeight,
    })
    .then((response) => {
      // If successful, stackingResults will contain the txid for the Stacking transaction
      // otherwise an error will be returned
      if (response.hasOwnProperty("error")) {
        console.log(response.error);
        throw new Error("Stacking transaction failed");
      } else {
        console.log(`txid: ${response}`);
        // txid: f6e9dbf6a26c1b73a14738606cb2232375d1b440246e6bbc14a45b3a66618481
        txid = response;
        return response;
      }
    });
}

export default async function waitTransaction() {
  const waitForTransactionSuccess = (txId) =>
    new Promise((resolve, reject) => {
      const pollingInterval = 3000;
      const intervalID = setInterval(async () => {
        const resp = await tx.getTransactionById({ txId });
        if (resp.tx_status === "success") {
          // stop polling
          clearInterval(intervalID);
          // update UI to display stacking status
          return resolve(resp);
        }
      }, pollingInterval);
    });

  // note: txId should be defined previously
  const resp = await waitForTransactionSuccess(txId);
}
