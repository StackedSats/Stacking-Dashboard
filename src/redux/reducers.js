import { combineReducers } from "redux";

export const STXTotalVolume = "STXTotalVolume";
export const userDetails = "userDetails";
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

export const reducer = combineReducers({ updateVolume, user });
