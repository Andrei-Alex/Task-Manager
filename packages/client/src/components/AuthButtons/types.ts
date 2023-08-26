import { UrlObject } from "url";
import { NextLink } from "@/utils";

export interface IAuthButtons {
  haveProfile: boolean;
  logout: () => void;
  registerPath: __next_route_internal_types__.RouteImpl<string>;
  loginPath: NextLink;
}
