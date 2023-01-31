import { Request, Response, NextFunction } from "express";

//@ts-ignore
function getUserRoute(req: Request, res: Response, next: NextFunction) {
  try {
    const userData = res.locals.user;
    res.locals.mssg = "hola mundo";
    res.locals.data = userData;
    next();
  } catch (error) {
    res.locals.mssg = "User couldnt be obtained";
    next(error);
  }
}

export default {
  getUserRoute,
};

export { getUserRoute };
