import { Tweet } from "../tweet/tweet.types";
import { User } from "../users/user.types";

export interface Reply extends Tweet {}

export interface CreateReplyRequestBody {
  token: string;
  tweetId: string;
  content?: string;
}

export interface DeleteReplyRequestBody {
  token: string;
  replyId: string;
}

export interface ReplyResponse {
  ok: boolean;
  message: string;
  tweet?: Tweet;
}

export interface CreateReplyResponse extends ReplyResponse {}

export interface GetReplyResponse {
  tweet: Tweet;
  user: User;
}
