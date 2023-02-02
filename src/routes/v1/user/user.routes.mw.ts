import { Request, Response, NextFunction } from "express";

//@ts-ignore
function getUserRoute(req: Request, res: Response, next: NextFunction) {
  try {
    const userData = res.locals.user;

    res.locals.mssg = "User obtained";
    res.locals.data = userData;
    res.locals.hasData = true;
    next();
  } catch (error) {
    res.locals.mssg = "User couldnt be obtained";

    next(error);
  }
}

//@ts-ignore
function createUserRoute(req: Request, res: Response, next: NextFunction) {
  try {
    const userData = res.locals.user;
    res.locals.mssg = "User created correctly";
    res.locals.data = userData;
    res.locals.hasData = true;
    next();
  } catch (error) {
    res.locals.mssg = "User couldnt be obtained";
    next(error);
  }
}

export default {
  getUserRoute,
  createUserRoute,
};

export { getUserRoute, createUserRoute };
