import express, {Application} from 'express';
import userRouter from "./routes/user.routes";

const app: Application = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/users", userRouter);

export default app;