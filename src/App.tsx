import Navbar from "./components/navbar";
import { ReactElement, FC } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Routes";

const App: FC = (): ReactElement => {
  return (
    <Router>
      <Navbar />
      <Routes />
    </Router>
  );
};
export default App;
