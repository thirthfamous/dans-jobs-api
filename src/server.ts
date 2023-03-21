import dotenv from "dotenv";
import express from "express";
import loginRouter from "./routes/loginRoute";
import "reflect-metadata";
import { errorHandler } from "./middlewares/errorHandler";
import jobRouter from "./routes/jobRoute";

const app = express();

dotenv.config();

app.use(express.json());

app.use('/login', loginRouter)
app.use('/jobs', jobRouter)

app.use(errorHandler)

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

export default app