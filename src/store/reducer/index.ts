import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import productsReducer from "./productsReducer";
import history from "../history";
import signInReducer from "./signInReducer";
import wishListReducer from "./wishListReducer";

export default combineReducers({
  signIn: signInReducer,
  products: productsReducer,
  wishlist: wishListReducer,
  router: connectRouter(history),
});
