import dotenv from "dotenv";
import express from "express";
import taskRouter from "./routes/taskRoute";
import "reflect-metadata";

const app = express();

dotenv.config();

app.use(express.json());

app.use('/task', taskRouter)


app.listen(3000, () => {
  console.log('Server started on port 3000');
});

export default app