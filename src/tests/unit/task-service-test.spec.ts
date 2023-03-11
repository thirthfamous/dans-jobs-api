import { Task } from "../../entity/Task";
import { TaskRepository } from "../../repositories/TaskRepository";
import { TaskService } from "../../services/TaskService";

process.env.mode = 'test'


describe('TaskService', () => {
    beforeEach(async () => {
        // Clear the tasks table before each test
        (await TaskRepository).clear()
    });

    it('should create a new data, and read it', async () => {
        const task: Task = {
            name: 'light coding'
        }
        const service: TaskService = new TaskService(TaskRepository)

        await service.create({
            name: task.name
        })

        const foundData: Task = await service.read('1')

        expect(foundData.name).toBe(task.name)
        
    })
})