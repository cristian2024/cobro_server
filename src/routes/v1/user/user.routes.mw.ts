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

//@ts-ignore
function updateUserRoute(req: Request, res: Response, next: NextFunction) {
  try {
    const userData = res.locals.user;
    res.locals.mssg = "User updated correctly";
    res.locals.data = userData;
    res.locals.hasData = true;
    next();
  } catch (error) {
    res.locals.mssg = "User couldnt be updated";
    next(error);
  }
}

//@ts-ignore
function deleteUserRoute(req: Request, res: Response, next: NextFunction) {
  try {
    const amount = res.locals.amountDeleted;
    res.locals.mssg = "Process of user deleting completed";
    res.locals.data = {
      count: amount,
    };
    //it says to the next route that middlewares were executre
    res.locals.hasData = true;
    next();
  } catch (error) {
    res.locals.mssg = "User couldnt be updated";
    next(error);
  }
}

export default {
  getUserRoute,
  createUserRoute,
  updateUserRoute,
  deleteUserRoute,
};

export { getUserRoute, createUserRoute, updateUserRoute, deleteUserRoute };
