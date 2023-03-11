import request from 'supertest';
import { Task } from '../../entity/Task';
import { TaskRepository } from '../../repositories/TaskRepository';
import app from '../../server';

describe('CRUD Task Routes', () => {
    beforeEach(async () => {
        (await TaskRepository).clear()
    });

    it('read the data', async () => {

        const tasks: Task[] = [
            {
                name: 'coding',
                description: 'coding express JS',
                done: false,
            },
            {
                name: 'reading',
                description: 'light reading novel',
                done: false,
            }
        ]

        await (await TaskRepository).save(tasks)

        const response = await request(app).get('/task');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            data: tasks,
            message: 'ok',
        });
    });
});
