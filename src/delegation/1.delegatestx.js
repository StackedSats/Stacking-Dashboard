import { openContractCall } from "@stacks/connect";
import {
  bufferCV,
  uintCV,
  tupleCV,
  standardPrincipalCVFromAddress,
  standardPrincipalCV,
  noneCV,
} from "@stacks/transactions";
import BN from "bn.js";
import logo from "../icons/logo.svg";
import { decodeBtcAddress } from "./utils";
import buffer from "buffer";
const Buffer = buffer.Buffer;

async function delegateSTX({ poxAddr, amountSTX, delegateToo, burnHt }) {
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
      poxAddressCV,
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

  console.log(options);
  await openContractCall(options);
}

export default delegateSTX;
