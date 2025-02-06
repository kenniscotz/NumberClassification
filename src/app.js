import express from "express";
import cors from "cors";
import classifyNumber from "../routes/classifyNumberRoute.js";

const app = express();

// MiddleWares
app.use(cors());
app.use(express.json());

// ROutes
app.use(classifyNumber);

app.get("/", (req, res) => {
  res.send("Hello World");
});

export default app;
