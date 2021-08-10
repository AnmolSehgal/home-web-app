import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

const Navbar = (): ReactElement => {
  return (
    <ul className="navbar-container navbar-ul">
      <li>
        <Link to="/" className="li-style">
          Home
        </Link>
      </li>
      <li>
        <Link to="/SignIn">About</Link>
      </li>
      <li>
        <Link to="/link3">Sign In</Link>
      </li>
    </ul>
  );
};
export default Navbar;
