import { Job } from "../../entity/Job";
import { CustomResponse } from "../../types/CustomResponse";

export interface JobControllerI {
  list(description?: string, location?: string, full_time?: boolean): Promise<Job[]>
  detail(jobId: string): Promise<Job>
}