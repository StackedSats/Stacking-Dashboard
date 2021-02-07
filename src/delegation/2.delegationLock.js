import { openContractCall } from "@stacks/connect";
import {
  bufferCV,
  uintCV,
  tupleCV,
  standardPrincipalCV,
  noneCV,
} from "@stacks/transactions";
import BN from "bn.js";
import logo from "../icons/logo.svg";
import { decodeBtcAddress } from "./utils";
import buffer from "buffer";
import { getPerson } from "../scripts/auth";
import axios from "axios";
const Buffer = buffer.Buffer;

// ST000000000000000000002AMW42H
// name : pox
export default async function delegationLock({
  stxValue,

  htLockPeriod,
  amountustx,
}) {
  const poxaddr = "n2VrgRFbKvcesbqerVtJEC8p5Lr2LQKtmB";
  const { hashMode, data } = decodeBtcAddress(poxaddr);
  const hashModeBuffer = bufferCV(new BN(hashMode, 10).toArrayLike(Buffer));
  const hashbytes = bufferCV(data);
  console.log(hashbytes, hashModeBuffer);
  const poxAddressCV = tupleCV({
    hashbytes,
    version: hashModeBuffer,
  });
  console.log(poxAddressCV.data);

  const options = {
    contractAddress: "ST000000000000000000002AMW42H",
    contractName: "pox",
    functionName: "delegate-stack-stx",
    functionArgs: [
      standardPrincipalCV(getPerson()._profile.stxAddress),
      uintCV(stxValue),
      poxAddressCV,
      uintCV(amountustx),
      uintCV(htLockPeriod),
    ],
    appDetails: {
      name: "StakedStats",
      icon: { logo },
    },
    finished: (data) => {
      console.log("TX ID:", data.txId);
      console.log("Raw TX:", data.txRaw);
    },
  };

  await openContractCall(options);
}
