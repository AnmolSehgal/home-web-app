import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { logger } from "redux-logger";
import combineReducer from "./reducer/index";
const sagaMiddleWare = createSagaMiddleware();
const store = createStore(
  combineReducer,
  applyMiddleware(logger, sagaMiddleWare)
);

export default store;
