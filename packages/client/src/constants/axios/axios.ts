import axios from "axios";
import { AUTH_API } from "@/constants";

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
