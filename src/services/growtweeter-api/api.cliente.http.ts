import axios from "axios";
import { TweetType } from "./tweet/tweet.types";

export const growtweeterApi = axios.create({
  baseURL: "http://localhost:8081",
});

export interface ResponseAPI {
  ok: boolean;
  message: string;
  data?: {
    id: string;
    content: string | null;
    type: TweetType;
    userId: string;
    createdAt: Date;
  };
  pagination?: {
    limit: number;
    page: number;
    count: number;
    totalPages: number;
  };
}
