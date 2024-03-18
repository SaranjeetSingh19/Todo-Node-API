import express from "express";
import userRouter from "./routes/users.route.js";
import taskRouter from "./routes/tasks.route.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

export const app = express();

config({
  path: "./data/config.env",
});

// ** Using MiddleWares **
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: [process.env.FRONTEND_URL],
  methods: ["GET", "POST" , "PUT", "DELETE"],
  credentials: true
}))

app.use("/api/v1/users", userRouter);
app.use("/api/v1/tasks", taskRouter);

app.get("/", (req, res) => {
  res.send("WOrking");
});
