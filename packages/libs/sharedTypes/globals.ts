import React from "react";

export type children = React.ReactNode | React.ReactNode[];
export type Obj = { [key: string]: string | number | boolean | Function };
export interface ILayouts {
  children: children;
}
