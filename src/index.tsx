import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase/app";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import firebaseConfig from "./services/firebase/firebaseConfig";
import store from "./store/store";

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
