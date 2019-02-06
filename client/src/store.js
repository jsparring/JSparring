import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducers/rootReducer";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
// import setUpSocket from "./actions/sockets/setUpSocket";
import thunk from "redux-thunk";

export const sageMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sageMiddleware, thunk))
);

// const socket = setUpSocket(store.dispatch);

export default store;
