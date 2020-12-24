import client from "./generateAccount.js";

export async function stackingEnabledNextCycle() {
  const stackingEnabledNextCycle = await client.isStackingEnabledNextCycle();
  console.log(stackingEnabledNextCycle);
}

export async function cycleDuration() {
  const cycleDuration = await client.getCycleDuration();
  console.log(cycleDuration);
}

export async function secondsUntilNextCycle() {
  const secondsUntilNextCycle = await client.getSecondsUntilNextCycle();
  console.log(secondsUntilNextCycle);
}

// const data1 = stackingEnabledNextCycle();
// const data2 = cycleDuration();
// const data3 = secondsUntilNextCycle();
