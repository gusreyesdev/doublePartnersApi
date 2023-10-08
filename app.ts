import express from "express";
import cors from "cors";

require("dotenv").config();


//Router
import router from "./routes/index";

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static("public"));

app.use("/", router);

export default app;