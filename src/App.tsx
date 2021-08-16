import { ConnectedRouter } from "connected-react-router";
import { ReactElement } from "react";

import Navbar from "./routes/Navbar";
import Routes from "./routes";
import history from "./store/history";
import { useEffect } from "react";
import { Dispatch } from "redux";
import { fetchDataRequest } from "./store/actions/dataFetchAction";
import { connect } from "react-redux";

const App = ({
  fetchDataRequest,
}: ReturnType<typeof mapDispatchToProps>): ReactElement => {
  useEffect(() => {
    fetchDataRequest();
  }, [fetchDataRequest]);
  return (
    <ConnectedRouter history={history}>
      <Navbar />
      <Routes />
    </ConnectedRouter>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    fetchDataRequest: () => {
      dispatch(fetchDataRequest());
    },
  };
};
export default connect(null, mapDispatchToProps)(App);
