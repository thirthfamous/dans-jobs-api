import AppDataSource from '../data-source';
import { Task } from '../entity/Task';

export const TaskRepository = AppDataSource.then((dataSource) => {
    return dataSource.getRepository(Task)
})