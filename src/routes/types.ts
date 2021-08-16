import React from "react";
import { LoginState, ProductStateInterface } from "../store/types";
export interface RoutesProps {
  children?: JSX.Element | JSX.Element[] | string | string;
  component: React.ComponentType;
  exact?: boolean | undefined;
  path: string;
}

export interface ProductsState {
  products: ProductStateInterface;
  signIn: LoginState;
}
