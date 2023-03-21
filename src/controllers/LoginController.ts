import { injectable } from "inversify";
import { LoginControllerI } from "../contracts/controllers/LoginControllerI";
import { LoginServiceI } from "../contracts/services/LoginServiceI";
import { CustomResponse } from "../types/CustomResponse";

@injectable()
export class LoginController implements LoginControllerI {

  service: LoginServiceI
  
  constructor(service: LoginServiceI) {
    this.service = service
  }

  async login(username: string, password: string): Promise<CustomResponse> {
    if (!username) {
      throw new Error("username is required");
    }

    if (!password) {
      throw new Error("password is required"); 
    }

    const token = await this.service.login(username, password)
    return {
      message: "ok",
      data: {
        token: token
      }
    }
  }
  

}