import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import history from "../history";
import signInReducer from "./signInReducer";

export default combineReducers({
  signIn: signInReducer,
  router: connectRouter(history),
});
