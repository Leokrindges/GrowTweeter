import { TweetType } from "../tweet/tweet.types";

export interface FeedRequestParams {
  token: string;
}

export interface FeedResponse {
  ok: boolean;
  message: string;
  data: {
    tweet: [
      {
        id: string;
        content: string;
        type: TweetType;
        userId: string;
        createdAt: Date;
        like: [
          {
            user: {
              name: string;
              username: string;
            };
          }
        ];
        reply: [
          {
            tweet: {
              content: string;
              user: {
                name: string;
                username: string;
              };
            };
            user: {
              name: string;
              username: string;
            };
          }
        ];
      }
    ];
  };
  pagination: {
    limit: number;
    page: number;
    count: number;
    totalPages: number;
  };
}
