import { UrlObject } from "url";
import { NextLink } from "@/utils";
import { CSSProperties } from "react";

export interface IAuthButtons {
  haveProfile: boolean;
  logout: () => void;
  registerPath: __next_route_internal_types__.RouteImpl<string>;
  loginPath: NextLink;
  customNavStyles?: CSSProperties;
  customListStyles?: CSSProperties;
}
