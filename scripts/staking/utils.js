import client from "./generateAccount.js";
import config from "../../config.js";
import { secondsUntilNextCycle, cycleDuration } from "./displayStaking.js";

export async function isUserEligible() {
  const hasMinStxAmount = await client.hasMinimumStx();
  console.log(hasMinStxAmount);
}

export async function numberOfCycles() {
  let numberOfCycles = 3;
  const unlockingAt = new Date(secondsUntilNextCycle);
  console.log(unlockingAt);
  unlockingAt.setSeconds(
    unlockingAt.getSeconds() + cycleDuration * numberOfCycles
  );
  console.log(unlockingAt);
}

export async function stackingEligibility() {
  // user supplied parameters
  let btcAddress = config.keyInfo.btcAddress;
  let numberOfCycles = 3;

  const stackingEligibility = await client.canStack({
    btcAddress,
    numberOfCycles,
  });

  console.log(stackingEligibility);

  // this assumes user is stacking is entire balance
}

export async function getStatus() {
  const status = await client.getStatus();
  console.log(status);
}
isUserEligible();
// numberOfCycles();
// stackingEligibility();
getStatus();
