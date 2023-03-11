import { TaskRepository } from "../../repositories/TaskRepository";

process.env.mode = 'test'

describe('TaskRepository', () => {
      beforeEach(async () => {
        // Clear the tasks table before each test
        await (await TaskRepository).clear();
      });

    it('should create a new task and read', async () => {

        const name = 'light coding'
        const id = 1
        await (await TaskRepository).save({
            id: id,
            name: name
        })
        let data = await (await TaskRepository).findOneOrFail({
            where: {
                id: id
            }
        })
        expect(name).toBe(data.name)
        expect(id).toBe(data.id)
    });

    it('should update the data', async () => {
        // save first
        const name = 'light coding'
        const newName = 'python coding'
        const id = 1
        await (await TaskRepository).save({
            id: id,
            name: name
        })
        
        // entity to update
        const entityToUpdate = await (await TaskRepository).findOne({
            where: {
                id: id
            }
        })

        // update the data
        if (!entityToUpdate) {
            throw new Error(`Entity with id ${id} not found`)
        }
        const updatedEntity = Object.assign(entityToUpdate, {
            name: newName
        })
        await (await TaskRepository).save(updatedEntity)

        // check the updated data
        let data = await (await TaskRepository).findOneOrFail({
            where: {
                id: id
            }
        })
        expect(data.name).toBe(newName)
        
    })
});