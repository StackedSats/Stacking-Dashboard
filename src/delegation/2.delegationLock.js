import { openContractCall } from "@blockstack/connect";
import logo from "../icons/logo.svg";
import btcAddress from "./setup";
import { bufferCV, uintCV, tupleCV } from "@stacks/transactions";
import BN from "bn.js";
import { decodeBtcAddress } from "./utils";

// ST000000000000000000002AMW42H
// name : pox
export default async function delegationLock({
  stxValue,
  stacker,
  poxaddr,
  htLockPeriod,
  amountustx,
}) {
  const { hashMode, data } = decodeBtcAddress(poxAddr);
  const hashModeBuffer = bufferCV(new BN(hashMode, 10).toBuffer());
  const hashbytes = bufferCV(data);
  const poxAddressCV = tupleCV({
    hashbytes,
    version: hashModeBuffer,
  });

  const options = {
    contractAddress: "ST000000000000000000002AMW42H",
    contractName: "pox",
    functionName: "delegate-stack-stx",
    functionArgs: [
      {
        type: "uint",
        value: uintCV(stxValue.toString()),
      },
      {
        type: "principal",
        value: bufferCV(stacker.toValue()),
      },
      {
        type: "uint",
        value: uintCV(amountustx.toString()),
      },

      {
        type: "buff",
        value: poxAddressCV,
      },
      {
        type: "uint",
        value: uintCV(htLockPeriod.toString()),
      },
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
