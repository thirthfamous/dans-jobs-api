import axios from 'axios';
import { JobRepositoryI } from '../contracts/repositories/JobRepositoryI';
import { Job } from '../entity/Job';

export class JobRepository implements JobRepositoryI {

  async list(description?: string, location?: string, full_time?: string): Promise<Job[]> {
    const response = await axios.get(`http://dev3.dansmultipro.co.id/api/recruitment/positions.json`, {
      params: {
        description: description,
        location: location,
      }
    })
    const data: Job[] = response.data
    return data
  }

  async detail(jobId: string): Promise<Job> {
    const response = await axios.get('http://dev3.dansmultipro.co.id/api/recruitment/positions/'+jobId)
    const data: Job = response.data
    return data
  }

}