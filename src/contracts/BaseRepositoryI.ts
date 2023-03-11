import { Repository } from "typeorm";

export interface BaseRepositoryI<T> {
    getInstance(): Repository<T>;
}