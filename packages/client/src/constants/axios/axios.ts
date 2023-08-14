import axios from "axios";
import { APPDATA_API, AUTH_API, HEALTH_API, SS_APPDATA_API } from "@/constants";

export const loginInstance = axios.create({
  method: "post",
  baseURL: AUTH_API.toString(),
  timeout: 8000,
  headers: {
    Accept: "application/json",
  },
});

export const userInstance = axios.create({
  method: "get",
  baseURL: AUTH_API.toString(),
  timeout: 8000,
  headers: {
    Accept: "application/json",
  },
});
export const registerInstance = axios.create({
  method: "post",
  baseURL: AUTH_API.toString(),
  timeout: 8000,
  headers: {
    Accept: "application/json",
  },
});

export const appDataServerSideInstance = axios.create({
  method: "get",
  baseURL: SS_APPDATA_API.toString(),
  timeout: 8000,
  headers: {
    Accept: "application/json",
  },
});
export const appDateInstance = axios.create({
  method: "get",
  baseURL: APPDATA_API.toString(),
  timeout: 8000,
  headers: {
    Accept: "application/json",
  },
});
export const healthInstance = axios.create({
  method: "get",
  baseURL: HEALTH_API.toString(),
  timeout: 8000,
  headers: {
    Accept: "application/json",
  },
});
