export interface CreateLikeRequestParams {
  token: string;
  tweetId: string;
}

export interface CreateLikeResponse {
  ok: boolean;
  message: string;
  data: {
    id: string;
    userId: string;
    tweetId: string;
    likedIn: Date;
  };
  totalLikes: number;
}
