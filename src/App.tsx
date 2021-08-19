import { ConnectedRouter } from "connected-react-router";
import { ReactElement } from "react";

import Navbar from "./routes/Navbar";
import Routes from "./routes";
import history from "./store/history";

const App = (): ReactElement => {
  return (
    <ConnectedRouter history={history}>
      <Navbar />
      <Routes />
    </ConnectedRouter>
  );
};

export default App;
