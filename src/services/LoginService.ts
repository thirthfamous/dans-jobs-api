import { inject, injectable } from 'inversify';
import { Repository } from 'typeorm';
import { LoginServiceI } from "../contracts/services/LoginServiceI";
import { User } from '../entity/User';
import { compareSync } from "bcrypt";
import { sign } from "jsonwebtoken";
import { SECRET_KEY } from '../config';

@injectable()
export class LoginService implements LoginServiceI {
  repository: Promise<Repository<User>>;

  /**
   *
   */
  constructor(repository: Promise<Repository<User>>) {
    this.repository = repository
  }

  async login(username: string, password: string): Promise<string> {
    const user = await (await this.repository).findOne({
      where: {
        'username': username
      }
    })

    if (!user) {
      throw new Error("username is not found");
      
    }

    const match = compareSync(password, user.password)

    if (!match) {
      throw new Error("username or password is incorrect")
    }
    
    const token = sign({
      id: user.id,
      name: user.username
    }, SECRET_KEY)

    return token
  }


}
