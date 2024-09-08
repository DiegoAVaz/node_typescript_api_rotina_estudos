import express from "express";
import userRoutes from "./routes/UserRoutes";
import movieRoutes from "./routes/MovieRoutes";
import { authMiddleware } from "./middlewares/authMiddleware";
import { errorMiddleware } from "./middlewares/errorMiddleware";

const app = express();

app.use(express.json());

app.use("/api", authMiddleware, userRoutes);
app.use("/external", movieRoutes);

app.use(errorMiddleware);

export default app;
