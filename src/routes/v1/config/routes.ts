import express, { Router } from "express";
import { notNull } from "../../../utils/utils";
import { basicErrorHandler } from "./error.handler";
import { successHandler } from "./common.responses";

const v1: Router = express.Router();

v1.get("/ping", (_req, res, next) => {
  res.locals.mssg = "pong";
  res.locals.hasData = true;
  next();
});

// router for not implemented routes
v1.use("***", (_req, res, next) => {
  if (notNull(res.locals.hasData) && res.locals.hasData) {
    next();
  } else {
    res.status(404).json({
      success: false,
      mssg: "We haven't implemented this functionality yet",
    });
  }
  
});

v1.use(basicErrorHandler);
v1.use(successHandler);

export default v1;
