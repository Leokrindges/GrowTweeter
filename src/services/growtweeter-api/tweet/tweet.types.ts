import { User } from "../users/user.types";

export interface CreateTweetRequestBody {
  token: string;
  content: string | null;
}

export interface UpdateTweetRequestBody {
  token: string;
  id: string;
  content?: string;
}

export interface DeleteTweetrequestParams {
  token: string;
  tweetId: string;
}

export interface ListAllRequestParams {
  token: string;
  limit?: number;
  page?: number;
}

export type TweetType = {
  type: "N" | "R";
};

export interface Tweet {
  id: string;
  content: string | null;
  type: TweetType;
  userId: string;
  createdAt: Date;
}

export interface ListAllTweetsResponse {
  ok: boolean;
  message: string;
  user: User;
  tweets: TweetResponse[];
  pagination: Pagination;
}

export interface TweetResponse extends Tweet {
  like: User[];
  reply: User[];
}

export interface Pagination {
  limit: number;
  page: number;
  count: number;
  totalPages: number;
}

// export interface CreateTweetResponse {
//   ok: boolean;
//   message: string;
//   data?: {
//     id: string;
//     content: string;
//     type: TweetType;
//     userId: string;
//     createdaAt: Date;
//   };
// }

// export interface UpdateTweetResponse {
//   ok: boolean;
//   message: string;
//   data?: {
//     id: string;
//     content: string | null;
//     type: TweetType;
//     userId: string;
//     createdAt: Date;
//   };
// }

// export interface DeleteTweetResponse {
//   ok: boolean;
//   message: string;
//   data?: {
//     id: string;
//     content: string | null;
//     type: TweetType;
//     userId: string;
//     createdAt: Date;
//   };
// }
