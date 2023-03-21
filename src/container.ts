import "reflect-metadata"
import { Container } from 'inversify'
import { buildProviderModule } from "inversify-binding-decorators";
import { LoginControllerI } from "./contracts/controllers/LoginControllerI";
import { LoginController } from "./controllers/LoginController";
import { UserRepository } from "./repositories/UserRepository";
import { LoginService } from "./services/LoginService";
import { JobControllerI } from "./contracts/controllers/JobControllerI";
import { JobController } from "./controllers/JobController";
import { JobService } from "./services/JobService";
import { JobRepository } from "./repositories/JobRepository";

const iocContainer = new Container()

iocContainer.bind<LoginControllerI>(LoginController).toDynamicValue(() => {
    const loginService = new LoginService(UserRepository)
    return new LoginController(loginService);
});

iocContainer.bind<JobControllerI>(JobController).toDynamicValue(() => {
  const jobRepository = new JobRepository()
  const jobService = new JobService(jobRepository)
  return new JobController(jobService);
});

// make inversify aware of inversify-binding-decorators
iocContainer.load(buildProviderModule());

// export according to convention
export { iocContainer }