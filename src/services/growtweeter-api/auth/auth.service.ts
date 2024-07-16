import { isAxiosError } from "axios";
import { growtweeterApi, ResponseAPI } from "../api.cliente.http";
import { Credentials } from "./auth.types";

export async function login(credentials: Credentials) {
  try {
    const response = await growtweeterApi.post("/auth/signin", credentials);

    console.log(response);
    
    return response.data as ResponseAPI<string>;
  } catch (err: unknown) {
    if (isAxiosError(err)) {
      return err.response!.data as ResponseAPI<undefined>;
    }

    console.log(err);

    return {
      ok: false,
      message: "Erro ao realizar login",
    };
  }
}
