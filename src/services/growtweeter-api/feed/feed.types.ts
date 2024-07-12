import { Pagination, TweetResponse } from "../tweet/tweet.types";

export interface FeedRequestParams {
  token: string;
}

export interface FeedResponse {
  ok: boolean;
  message: string;
  tweets: TweetResponse;
  pagination: Pagination;
}
