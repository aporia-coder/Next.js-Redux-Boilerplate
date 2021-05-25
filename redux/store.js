import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";
import dataReducer from "./reducers/dataReducer";

const middleware = [thunk];

const makeStore = () =>
  createStore(dataReducer, compose(applyMiddleware(...middleware)));

export const wrapper = createWrapper(makeStore, { debug: true });
