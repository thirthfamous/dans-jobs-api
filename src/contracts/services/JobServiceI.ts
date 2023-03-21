import { Job } from "../../entity/Job"

export interface JobServiceI {
  list(description?: string, location?: string, full_time?: boolean): Promise<Job[]>
  detail(jobId: string): Promise<Job>
}