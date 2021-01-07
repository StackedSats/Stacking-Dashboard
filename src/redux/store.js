import { createStore, applyMiddleware, compose } from "redux";
import { reducer } from "./reducers";
import thunk from "redux-thunk";

const composeEnhancers =
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      trace: true,
      traceLimit: 25,
    })) ||
  compose;

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);
