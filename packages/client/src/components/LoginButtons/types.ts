import { UrlObject } from "url";

export interface IAuthButtons {
  haveProfile: boolean;
  logout: () => void;
  registerPath: __next_route_internal_types__.RouteImpl<string>;
  loginPath: __next_route_internal_types__.RouteImpl<string>;
}
