import { combineReducers } from "redux";

export const STXTotalVolume = "STXTotalVolume";
export const userDetails = "userDetails";
export const PRICES = "prices";
export const UPDATETX = "updatetx";
export const CHANGENETWORK = "changeNetwork";

export const updateVolume = (
  state = { STXTotalVolume: "Please Sign In" },
  action
) => {
  switch (action.type) {
    case STXTotalVolume:
      return action.payload;
    default:
      return state;
  }
};

export const user = (
  state = { btcAddress: [], stxAddress: [], username: "" },
  action
) => {
  switch (action.type) {
    case userDetails:
      return action.payload;
    default:
      return state;
  }
};

const stateValues = {
  stxusd: 40068.1243982181,
  btcusd: 0.49098332415705,
  btcTxFeeResult: 3.3745078800000003,
  liquidStxSupplyResult: 41006245332819816,
  stxTransactionFeeReult: 1,
};

export const prices = (state = stateValues, action) => {
  switch (action.type) {
    case PRICES:
      return action.payload;
    default:
      return state;
  }
};

export const txid = (state = "", action) => {
  switch (action.type) {
    case UPDATETX:
      return action.payload;
    default:
      return state;
  }
};

export const network = (state = "mainnet", action) => {
  switch (action.type) {
    case CHANGENETWORK:
      return action.payload;
    default:
      return state;
  }
};

export const reducer = combineReducers({
  updateVolume,
  user,
  prices,
  txid,
  network,
});
