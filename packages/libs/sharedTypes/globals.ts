import React, { ReactNode } from "react";

export type AsyncComponent = Promise<ReactNode>;
export type children = React.ReactNode | React.ReactNode[];
export type Obj = { [key: string]: string | number | boolean | Function };
export interface ILayouts {
  children: children;
}
