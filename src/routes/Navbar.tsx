import { ReactElement } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signOutRequest } from "../store/actions/signOutAction";
import logo from "../icons/logo.svg";
import { UserTab } from "../components/UserTab";

const Navbar = (): ReactElement => {
  const dispatch = useDispatch();
  return (
    <ul className="flex flex-row bg-text-200 items-center justify-between mb-3.5">
      <li className="ml-12">
        <img src={logo} className="h-20 w-20" alt="logo" />
      </li>
      <li>
        <ul className="flex flex-row items-center">
          <li className="mr-4">
            <Link to="/" className="li-style">
              Home
            </Link>
          </li>
          <li className="mr-4">
            <Link to="/products">Products</Link>
          </li>
          <li className="mr-4">
            <Link to="/SignIn">SignIn</Link>
          </li>
          {localStorage.getItem("uid") ? (
            <li className="mr-4">
              <Link to="/Dashboard">Dashboard</Link>
            </li>
          ) : (
            ""
          )}
          {localStorage.getItem("uid") ? (
            <li
              className="mr-4"
              onClick={() => {
                dispatch(signOutRequest());
              }}
            >
              Sign Out
            </li>
          ) : (
            ""
          )}
          <li className="mr-4">
            <Link to="/About">About</Link>
          </li>
        </ul>
      </li>
      <li className="mr-4">{localStorage.getItem("uid") ? <UserTab /> : ""}</li>
    </ul>
  );
};

export default Navbar;
