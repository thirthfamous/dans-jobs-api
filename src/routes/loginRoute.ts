import express, { Request, Response } from 'express'
import { iocContainer } from '../container'
import { LoginControllerI } from '../contracts/controllers/LoginControllerI';
import { LoginController } from '../controllers/LoginController';

const loginRouter = express.Router()
const loginController: LoginControllerI = iocContainer.get<LoginControllerI>(LoginController);

loginRouter.post('/', async (request: Request, response: Response, next) => {
  try {
    return response.json(await loginController.login(request.body.username, request.body.password))    
  } catch (error) {
    next(error)
  }
})

export default loginRouter