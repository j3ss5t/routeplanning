import {xObject} from "../../types";

export interface RouteObject {
  id: string;
  name: string;
  uri: string;
  consumingTime?: string;
  destination: xObject;
  origin: xObject;
  distance?: string;
  path?: string;
}

export interface RoutePolicyObject {
  id: string;
  name: string;
  uri: string;
}
