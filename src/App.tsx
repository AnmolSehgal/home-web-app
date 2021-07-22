import Navbar from "./Components/navbar";
import { ReactElement, FC } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes/Routes";

const App:FC = ():ReactElement=>{
    return (
            <Router>
                <Navbar/>
                <Routes/>
            </Router>
            );
}
export default App;