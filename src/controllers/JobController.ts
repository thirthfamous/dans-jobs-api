import { JobControllerI } from "../contracts/controllers/JobControllerI";
import { JobServiceI } from "../contracts/services/JobServiceI";
import { Job } from "../entity/Job";
import { CustomResponse } from "../types/CustomResponse";

export class JobController implements JobControllerI {

  service: JobServiceI

  constructor(service: JobServiceI) {
    this.service = service
  }

  async list(description?: string, location?: string, full_time?: boolean): Promise<Job[]> {
    return await this.service.list(description, location)
  }

  async detail(jobId: string): Promise<Job> {
    return await this.service.detail(jobId)
  }
  
}