// src/auth.js

import { AppConfig, UserSession, showConnect } from "@stacks/connect";
import { Person } from "@stacks/profile";
import logo from "../icons/logo.svg";

const appConfig = new AppConfig(["store_write", "publish_data"]);

export const userSession = new UserSession({ appConfig });

export function authenticate() {
  showConnect({
    appDetails: {
      name: "StackingDashboard",
      icon: logo,
    },
    redirectTo: "/app/my-portfolio",
    finished: () => {
      window.location.reload();
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
