import express, { Router } from "express";
import router from "./routes.config";
import { basicErrorHandler } from "./error.handler";

const v1: Router = express.Router();

v1.get("/ping", (_req, res) => {
  res.send("pong");
});

router.use(basicErrorHandler);

export default v1;
