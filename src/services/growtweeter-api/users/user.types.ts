export interface SignUpRequestBody {
  ok: boolean;
  message: string;
  data: {
    name: string;
    email: string;
    username: string;
    password: string;
    createdAt: Date;
    deleted: boolean;
    deletedAt: Date | null;
    authToken: string | null;
  };
}

export interface SignUpResponse {
  ok: boolean;
  message: string;
  data: {
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
