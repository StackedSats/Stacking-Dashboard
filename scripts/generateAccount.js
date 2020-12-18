import {
  makeRandomPrivKey,
  privateKeyToString,
  getAddressFromPrivateKey,
  TransactionVersion,
} from "@stacks/transactions";

import { StackingClient } from "@stacks/stacking";

import { StacksTestnet } from "@stacks/network";

import BN from "bn.js";

const privateKey = privateKeyToString(makeRandomPrivKey());

const stxAddress = getAddressFromPrivateKey(
  privateKey,
  TransactionVersion.Testnet
);

const client = new StackingClient(stxAddress, new StacksTestnet());
// console.log(client);

export default client;
