import { CustomResponse } from "../../types/CustomResponse";

export interface LoginControllerI {
  login(username: string, password: string): Promise<CustomResponse>
}