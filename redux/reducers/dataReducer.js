import { HYDRATE } from "next-redux-wrapper";

let initialState = {
  tick: "init",
};

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload,
      };
    case "TICK":
      return {
        ...state,
        tick: action.payload,
      };
    default:
      return initialState;
  }
}
