import dotenv from "dotenv";
import express from "express";
import loginRouter from "./routes/loginRoute";
import "reflect-metadata";
import { errorHandler } from "./middlewares/errorHandler";
import jobRouter from "./routes/jobRoute";
import cors from "cors";

const app = express();

dotenv.config();

app.use(cors())
app.use(express.json());

app.use('/login', loginRouter)
app.use('/jobs', jobRouter)

app.use(errorHandler)

app.listen(8080, () => {
  console.log('Server started on port 8080');
});

export default app