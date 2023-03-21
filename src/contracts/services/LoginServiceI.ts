import { User } from "../../entity/User";

export interface LoginServiceI {
  login(username: string, password: string): Promise<string>
}