export interface SignUpRequestBody {
  ok: boolean;
  message: string;
  data: User;
}

export interface User {
  id: string;
  name: string;
  email: string;
  username: string;
  password: string;
  createdAt: Date;
  deleted: boolean;
  deletedAt: Date | null;
  authToken: string | null;
}
