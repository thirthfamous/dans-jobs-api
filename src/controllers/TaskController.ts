import { injectable } from "inversify";
import { Task } from "../entity/Task";
import { BaseController } from "./BaseController";

@injectable()
export class TaskController extends BaseController<Task> {

}