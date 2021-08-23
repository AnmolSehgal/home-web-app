import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import productsReducer from "./productsReducer";
import history from "../history";
import signInReducer from "./signInReducer";
import wishListReducer from "./wishListReducer";
import cartReducer from "./cartReducer";

export default combineReducers({
  signIn: signInReducer,
  products: productsReducer,
  wishlist: wishListReducer,
  cart: cartReducer,
  router: connectRouter(history),
});
