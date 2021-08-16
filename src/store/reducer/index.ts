import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import productsReducer from "./productsReducer";
import history from "../history";
import signInReducer from "./signInReducer";

export default combineReducers({
  signIn: signInReducer,
  products: productsReducer,
  router: connectRouter(history),
});
