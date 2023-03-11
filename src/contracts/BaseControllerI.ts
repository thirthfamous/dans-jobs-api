import { CustomResponse } from "../types/CustomResponse";

export interface BaseControllerI<T> {
  create(data: T): Promise<CustomResponse>;
  read(id: string): Promise<CustomResponse>;
  update(id: string, data: T): Promise<CustomResponse>;
  delete(id: string): Promise<CustomResponse>;
  list(): Promise<CustomResponse>;
}