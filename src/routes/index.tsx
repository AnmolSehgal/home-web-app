import React, { ReactElement } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import About from "./About";

import Dashboard from "./Dashboard";
import Home from "./Home";
import Products from "./Products";
import SignIn from "./SignIn";
import { RoutesProps } from "./types";
import WishList from "./Wishlist";

const PrivateRoute = ({ exact, path, component: Component }: RoutesProps) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={() => {
        return localStorage.getItem("uid") ? (
          <Component />
        ) : (
          <Redirect to="/SignIn" />
        );
      }}
    />
  );
};

const NonPrivateroutes = ({
  exact,
  path,
  component: Component,
}: RoutesProps) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={() => {
        return localStorage.getItem("uid") ? (
          <Redirect to="/dashboard" />
        ) : (
          <Component />
        );
      }}
    />
  );
};
console.log(typeof Dashboard);
const Routes = (): ReactElement => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/About" component={About} />
      <NonPrivateroutes exact={true} path="/SignIn" component={SignIn} />
      <PrivateRoute exact={true} path="/dashboard" component={Dashboard} />
      <PrivateRoute exact={true} path="/wishlist" component={WishList} />
    </Switch>
  );
};
export default Routes;
