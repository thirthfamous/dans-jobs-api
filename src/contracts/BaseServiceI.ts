export interface BaseServiceI<T> {
    create(data: T): Promise<T>;
    read(id: string): Promise<T>;
    update(id: string, data: T): Promise<T>;
    delete(id: string): Promise<void>;
    list(): Promise<T[]>;
}