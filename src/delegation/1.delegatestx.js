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
  setTxLoader,
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
      setTxLoader(true);

      try {
        console.log(localStorage.getItem("auth"));
        axios({
          url: `${process.env.REACT_APP_BACKENDURL}/transactionRecords`,
          method: "post",
          headers: {
            "x-auth-token": localStorage.getItem("auth"),
            "Content-type": "application/json",
          },
          data: {
            username,
            stacker: getPerson()._profile.stxAddress,
            amountSTX,
            txId: data.tx,
          },
        });
        setTxLoader(false);
        alert(
          `Delegation Lockup Relationship Setup. Thank You!!. Tx id is: ${data.txId}`
        );
      } catch (e) {
        setTxLoader(false);
        alert("Failed");
      }
    },
  };

  console.log(options);
  await openContractCall(options);
}

export default delegateSTX;
