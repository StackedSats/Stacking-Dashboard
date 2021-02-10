// src/auth.js

import { AppConfig, UserSession, showConnect } from "@stacks/connect";
import { Person } from "@stacks/profile";
import logo from "../icons/logo.svg";
import { StacksMainnet, StacksTestnet } from "@stacks/network";

const testnet = new StacksTestnet();
const mainnet = new StacksMainnet();

const appConfig = new AppConfig(
  ["store_write", "publish_data"],
  document.location.href,
  undefined,
  undefined,
  "https://core.blockstack.org"
);

export const userSession = new UserSession({ appConfig });

export function authenticate(history) {
  showConnect({
    network: testnet,
    appDetails: {
      name: "StackingDashboard",
      icon: logo,
    },
    finished: () => {
      history.push("/app/my-portfolio");
    },
    userSession: userSession,
  });
}

export function authenticMainnet(history) {
  showConnect({
    network: mainnet,
    appDetails: {
      name: "StackingDashboard",
      icon: logo,
    },
    finished: () => {
      history.push("/app/my-portfolio");
    },
    userSession: userSession,
  });
}

export function getUserData() {
  return userSession.loadUserData();
}

export function getPerson() {
  return new Person(getUserData().profile);
}
