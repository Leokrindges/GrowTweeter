import axios from "axios";
import { Pagination } from "./tweet/tweet.types";
export const growtweeterApi = axios.create({
  baseURL: "http://localhost:8081",
});

export interface ResponseAPI<T> {
  ok: boolean;
  message: string;
  data?: T;
  pagination?: Pagination 
}