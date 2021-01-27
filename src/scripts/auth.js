// src/auth.js

import { AppConfig, UserSession, showConnect } from "@stacks/connect";
import { Person } from "@stacks/profile";
import logo from "../icons/logo.svg";

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
