import { combineReducers } from "redux";

export const STXTotalVolume = "STXTotalVolume";

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

export const reducer = combineReducers({ updateVolume });
