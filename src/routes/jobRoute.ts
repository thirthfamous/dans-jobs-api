import express, { Request, Response } from 'express'
import { iocContainer } from '../container'
import { JobControllerI } from '../contracts/controllers/JobControllerI';
import { JobController } from '../controllers/JobController';
import { jwtAuth } from '../middlewares/jwt';
import { CustomResponse } from '../types/CustomResponse';

const jobRouter = express.Router()
const jobController: JobControllerI = iocContainer.get<JobControllerI>(JobController);
const PAGE_SIZE = 10;


jobRouter.use(jwtAuth)

jobRouter.get('/', async (request: Request, response: Response, next) => {
  try {
    const page = parseInt(request.query.page as string, 10) || 1;
    // Calculate the start and end index for the current page
    const startIndex = (page - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;

    const fullTime = request.query.full_time === "true"

    const jobs = await jobController.list(request.query.description as string, request.query.location as string, fullTime)

    const data = jobs.slice(startIndex, endIndex)

    // Calculate the total number of pages
    const totalPages = Math.ceil(jobs.length / PAGE_SIZE);

    return response.json({
      message: 'ok',
      data: data,
      meta: {
        page: page,
        pageSize: PAGE_SIZE,
        totalPages: totalPages,
        totalItems: jobs.length
      }
    } as CustomResponse)
  } catch (error) {
    next(error)
  }
})

jobRouter.get('/:id', async (request: Request, response: Response, next) => {
  try {
    const job = await jobController.detail(request.params.id)

    if (Object.keys(job).length === 0) {
      return response.status(404).json({message: 'data not found'} as CustomResponse)
    }

    return response.json({
      message: 'ok',
      data: job
    } as CustomResponse)
  } catch (error) {
    next(error)
  }
})


export default jobRouter