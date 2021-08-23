import React from "react";

export interface RoutesProps {
  children?: JSX.Element | JSX.Element[] | string | string;
  component: React.ComponentType;
  exact?: boolean | undefined;
  path: string;
}
