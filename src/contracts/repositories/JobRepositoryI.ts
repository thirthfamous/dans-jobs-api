import { Job } from "../../entity/Job"

export interface JobRepositoryI {
  list(description?: string, location?: string): Promise<Job[]>
  detail(jobId: string): Promise<Job>
}