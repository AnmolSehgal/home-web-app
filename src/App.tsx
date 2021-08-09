import { ReactElement } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Routes from "./routes/Routes";

const App = (): ReactElement => {
  return (
    <Router>
      <Navbar />
      <Routes />
    </Router>
  );
};
export default App;
