import dotenv from "dotenv";
dotenv.config();

import morgan from "morgan";
import express from "express";
import bodyParser from "body-parser";

import routes from "./routes/index.js";

const PORT = process.env.PORT || "🥰😡🥲😵‍💫";

const app = express();

app
  .use(morgan("dev"))
  .use(express.urlencoded({ extended: true }))
  .use(express.json())
  .use("/", routes);

app.listen(PORT, () => {
  console.log(`Listening Server to ${PORT}`);
});
