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

export interface ListAllResponse {
  ok: boolean;
  message: string;
  user?: {
    id: string;
    name: string;
    email: string;
    username: string;
    password: string;
    createdAt: Date;
    deleted: boolean;
    deletedAt: Date | null;
    authToken: string | null;
  };
  tweet: [
    {
      id: string;
      content: string | null;
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
          user: {
            name: string;
            username: string;
          };
        }
      ];
    }
  ];
  pagination: {
    limit: number;
    page: number;
    count: number;
    totalPages: number;
  };
}

export interface CreateTweetResponse {
  ok: boolean;
  message: string;
  data?: {
    id: string;
    content: string;
    type: TweetType;
    userId: string;
    createdaAt: Date;
  };
}

export interface UpdateTweetResponse {
  ok: boolean;
  message: string;
  data?: {
    id: string;
    content: string | null;
    type: TweetType;
    userId: string;
    createdAt: Date;
  };
}

export interface DeleteTweetResponse {
  ok: boolean;
  message: string;
  data?: {
    id: string;
    content: string | null;
    type: TweetType;
    userId: string;
    createdAt: Date;
  };
}
