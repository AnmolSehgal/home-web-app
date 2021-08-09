import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/routes";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes />
    </Router>
  );
};
export default App;
