import axios from "axios";
import { API } from "@/constants";

export const loginInstance = axios.create({
  method: "post",
  baseURL: API.toString(),
  timeout: 8000,
  headers: {
    Accept: "application/json",
  },
});

export const userInstance = axios.create({
  method: "get",
  baseURL: API.toString(),
  timeout: 8000,
  headers: {
    Accept: "application/json",
  },
});
