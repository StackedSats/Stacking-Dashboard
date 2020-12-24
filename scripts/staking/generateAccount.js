import {
  makeRandomPrivKey,
  privateKeyToString,
  getAddressFromPrivateKey,
  TransactionVersion,
} from "@stacks/transactions";

import { StackingClient } from "@stacks/stacking";

import { StacksTestnet } from "@stacks/network";
import config from "../../config.js";

import BN from "bn.js";

const stxAddress = config.keyInfo.address;
const client = new StackingClient(stxAddress, new StacksTestnet());
// console.log(client);

export default client;
