import "reflect-metadata"
import { Container } from 'inversify'
import { TaskService } from './services/TaskService'
import { buildProviderModule } from "inversify-binding-decorators";
import { TaskController } from './controllers/TaskController'
import { TaskRepository } from './repositories/TaskRepository'

const iocContainer = new Container()

iocContainer.bind<TaskController>(TaskController).toDynamicValue(() => {
    const taskService = new TaskService(TaskRepository)
    return new TaskController(taskService);
});

// make inversify aware of inversify-binding-decorators
iocContainer.load(buildProviderModule());

// export according to convention
export { iocContainer }