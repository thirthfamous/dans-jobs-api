import express, { Request, Response } from 'express'
import { iocContainer } from '../container'
import { TaskController } from '../controllers/TaskController'

const taskRouter = express.Router()
const taskController: TaskController = iocContainer.get<TaskController>(TaskController);

taskRouter.get('/', async (request: Request, response: Response) => {
    return response.json(await taskController.list())
})

taskRouter.get('/:id', async (request: Request, response: Response) => {
    return response.json(await taskController.read(request.params.id))
})

taskRouter.delete('/:id', async (request: Request, response: Response) => {
    return response.json(await taskController.delete(request.params.id))
})

taskRouter.post('/', async (request: Request, response: Response) => {
    return response.json(await taskController.create(request.body))
})

taskRouter.put('/:id', async (request: Request, response: Response) => {
    return response.json(await taskController.update(request.params.id, request.body))
})

export default taskRouter