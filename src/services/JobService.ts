import { injectable } from "inversify";
import { JobRepositoryI } from "../contracts/repositories/JobRepositoryI";
import { JobServiceI } from "../contracts/services/JobServiceI";
import { Job } from "../entity/Job";

@injectable()
export class JobService implements JobServiceI {

  repository: JobRepositoryI

  constructor(repository: JobRepositoryI) {
    this.repository = repository
  }

  async list(description?: string, location?: string, full_time?: boolean): Promise<Job[]> {
    let data = await this.repository.list(description, location)

    if (full_time) {
      data.filter(val => {
        return val.type === "Full Time"
      })
    } 

    return data
  }

  async detail(jobId: string): Promise<Job> {
    return this.repository.detail(jobId)
  }
  
}