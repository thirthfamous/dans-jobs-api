import { FindOneOptions, Repository } from "typeorm"
import { BaseServiceI } from "../contracts/BaseServiceI"
import { inject, injectable } from 'inversify';
import { TYPES } from "../types/inversion";

@injectable()
export abstract class BaseService<T> implements BaseServiceI<T> {
    
    repository: Promise<Repository<T>>;

    /**
     *
     */
    constructor(
        @inject(TYPES.BaseRepository) repository: Promise<Repository<T>>
    ) {
        this.repository = repository
        
    }
    
    async create(data: T): Promise<T> {
        const repository = await this.repository;
        return await (await this.repository).save(data)
    }

    async read(id: string): Promise<T> {
        return await (await this.repository).findOneOrFail({
            where: {
                id: id
            } as FindOneOptions<T>
        } as FindOneOptions<T>)
    }
    
    async update(id: string, data: T): Promise<T> {
        const entityToUpdate = await (await this.repository).findOne({
            where: {
                id: id
            } as FindOneOptions<T>
        } as FindOneOptions<T>)

        if (!entityToUpdate) {
            throw new Error(`Entity with id ${id} not found`)
        }
        const updatedEntity = Object.assign(entityToUpdate, data)
        return await (await this.repository).save(updatedEntity)

    }

    async delete(id: string): Promise<void> {
        await (await this.repository).delete(id)
    }

    async list(): Promise<T[]> {
        return (await this.repository).find()
    }
    
}
