import { ConnectedRouter } from "connected-react-router";
import { ReactElement } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/Navbar";
import Routes from "./routes";
import history from "./store/history";

const App = (): ReactElement => {
  return (
    <ConnectedRouter history={history}>
      <Router>
        <Navbar />
        <Routes />
      </Router>
    </ConnectedRouter>
  );
};
export default App;
