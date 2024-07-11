import axios from "axios";

export const growtweeterApi = axios.create({
  baseURL: "http://localhost:8081",
});
