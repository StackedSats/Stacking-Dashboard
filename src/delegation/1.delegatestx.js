import { openContractCall } from "@blockstack/connect";
import { bufferCV, uintCV, tupleCV } from "@stacks/transactions";
import BN from "bn.js";
import logo from "../icons/logo.svg";
import { decodeBtcAddress } from "./utils";

async function delegateSTX({ poxAddr, amountSTX, delegateToo }) {
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
    functionName: "delegate-stx",
    functionArgs: [
      {
        type: "uint",
        value: uintCV(amountSTX.toString()),
      },
      {
        // delegate too
        type: "principal",
        value: delegateToo,
      },
      {
        // poxaddr
        type: "buff",
        value: uintCV(poxAddressCV.toString()),
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

export default delegateSTX;
