import React, {
  FC,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  useState,
  ReactElement,
} from "react";
import { Route, Switch } from "react-router-dom";
import Link1 from "./Home";
import Link2 from "./SignIn";
import Link3 from "./SignUp";

const Routes: FC = (): ReactElement => {
  return (
    <Switch>
      <Route exact path="/" component={Link1}></Route>
      <Route path="/link2" component={Link2}></Route>
      <Route path="/link3" component={Link3}></Route>
    </Switch>
  );
};
export default Routes;
