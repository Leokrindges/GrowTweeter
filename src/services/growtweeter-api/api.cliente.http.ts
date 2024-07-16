import axios from "axios";

export const growtweeterApi = axios.create({
  baseURL: "http://localhost:8081",
});

export interface ResponseAPI<T> {
  ok: boolean;
  message: string;
  authToken?: string;
  data?: T;
  pagination?: {
    limit: number;
    page: number;
    count: number;
    totalPages: number;
  };
}
