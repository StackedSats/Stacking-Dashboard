import { openContractCall } from "@stacks/connect";
import {
  bufferCV,
  uintCV,
  tupleCV,
  standardPrincipalCV,
  noneCV,
  someCV,
} from "@stacks/transactions";
import BN from "bn.js";
import logo from "../icons/logo.svg";
import { decodeBtcAddress } from "./utils";
import buffer from "buffer";
import axios from "axios";
import { getPerson } from "../scripts/auth";
import { StacksTestnet } from "@stacks/network";
const Buffer = buffer.Buffer;
const network = new StacksTestnet();

async function delegateSTX({
  poxAddr,
  amountSTX,
  delegateToo,
  burnHt,
  delegateStx,
  username,
}) {
  const { hashMode, data } = decodeBtcAddress(poxAddr);
  const hashModeBuffer = bufferCV(new BN(hashMode, 10).toArrayLike(Buffer));
  const hashbytes = bufferCV(data);
  const poxAddressCV = tupleCV({
    hashbytes,
    version: hashModeBuffer,
  });
  console.log(poxAddressCV.data);

  const options = {
    contractAddress: "ST000000000000000000002AMW42H",
    contractName: "pox",
    functionName: "delegate-stx",
    functionArgs: [
      uintCV(amountSTX),
      standardPrincipalCV("ST3K2B2FH1AYXD26WV6YZY4DAA82AZNK967BNB9BK"),
      noneCV(),
      noneCV(),
    ],

    appDetails: {
      name: "StakedStats",
      icon: { logo },
    },
    network,
    finished: async (data) => {
      console.log("TX ID:", data.txId);
      console.log("Raw TX:", data.txRaw);

      const check = setInterval(async () => {
        const status = await axios.get(
          `https://stacks-node-api.testnet.stacks.co/extended/v1/tx/${data.txId}`
        );
        if (status.data.tx_status === "success") {
          try {
            const hash = await axios({
              url: `${process.env.REACT_APP_BACKENDURL}/transactionRecords`,
              method: "post",
              headers: {
                "a-auth-token": localStorage.getItem("auth"),
                "Content-type": "application/json",
              },
              data: {
                username,
                stacker: getPerson()._profile.stxAddress,
                amountSTX,
              },
            });
            alert(`${hash} : Delegation Lock confirmed. Thank You!!`);
            stop();
            return hash;
          } catch (e) {
            alert("Failed");
            stop();
          }
        } else if (status.data.tx_status === "pending") {
        } else {
          alert(`Please try again or reach nako@stackedstats.com`);
        }
      }, 5000);

      function stop() {
        clearInterval(check);
      }
    },
  };

  console.log(options);
  await openContractCall(options);
}

export default delegateSTX;
