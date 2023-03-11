import { BaseService } from "./BaseService";
import { injectable } from 'inversify';
import { Task } from "../entity/Task";

@injectable()
export class TaskService extends BaseService<Task> {

}