import { openContractCall } from "@stacks/connect";
import {
  bufferCV,
  uintCV,
  tupleCV,
  standardPrincipalCV,
} from "@stacks/transactions";
import BN from "bn.js";
import logo from "../icons/logo.svg";
import { decodeBtcAddress } from "./utils";
import buffer from "buffer";
const Buffer = buffer.Buffer;

async function delegateStx(delegateTo, poxAddr, rewardCycle) {
  const { hashMode, data } = decodeBtcAddress(poxAddr);
  const hashModeBuffer = bufferCV(new BN(hashMode, 10).toArrayLike(Buffer));
  const hashbytes = bufferCV(data);
  console.log(hashbytes, hashModeBuffer);
  const poxAddressCV = tupleCV({
    hashbytes,
    version: hashModeBuffer,
  });

  const options = {
    contractAddress: "SP000000000000000000002Q6VF78.pox",
    contractName: "pox",
    functionName: "stack-aggregation-commit",
    functionArgs: [poxAddressCV, uintCV(rewardCycle)],
    appDetails: {
      name: "StakedStats",
      icon: logo,
    },
    finished: (data) => {
      console.log("TX ID:", data.txId);
      console.log("Raw TX:", data.txRaw);
    },
  };

  await openContractCall(options);
}

export default delegateStx;
