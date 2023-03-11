import { injectable, inject } from 'inversify';
import { BaseControllerI } from '../contracts/BaseControllerI';
import { BaseServiceI } from '../contracts/BaseServiceI';
import { CustomResponse } from '../types/CustomResponse';
import {TYPES} from '../types/inversion';

@injectable()
export abstract class BaseController<T> implements BaseControllerI<T> {
    service: BaseServiceI<T>

    /**
     *
     */
    constructor(
        @inject(TYPES.BaseService) service: BaseServiceI<T>
        ) {
        this.service = service
    }
    
    async list(): Promise<CustomResponse> {
        const data: T[] = await this.service.list()
        return {
            data: data,
            message: 'ok'
        }
    }

    async create(data: T): Promise<CustomResponse> {
        await this.service.create(data)
        return {
            message: 'ok'
        }
    }

    async read(id: string): Promise<CustomResponse> {
        const data: T = await this.service.read(id)
        return {
            data: data,
            message: 'ok'
        }
    }

    async update(id: string, data: T): Promise<CustomResponse> {
        await this.service.update(id, data);
        return {
            message: 'ok'
        }
    }

    async delete(id: string): Promise<CustomResponse> {
        await this.service.delete(id)
        return {
            message: 'ok'
        }
    }
    

   


}
