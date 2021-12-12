import dotenv from "dotenv";
dotenv.config();

import express from "express";

import cors from "cors";

const app = express();

const PORT = process.env.PORT || 8001;

app.use(cors());

app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());

import mongoClient from "./config/db.js";
mongoClient();

// LOAD ROUTERS
import AdminRouter from "./router/AdminRouter.js";
// APIS
app.use("/api/v1/registerAdmin", AdminRouter);
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, (error) => {
  if (error) console.log(error);
  console.log(`server running at http://localhost:${PORT}`);
});
