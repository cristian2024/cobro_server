import {  Request, Response, NextFunction } from "express";


//@ts-ignore
function getUserRoute(req: Request, res: Response, next: NextFunction) {
  try {
    const userData = res.locals.user;
    res.locals.mssg = 'hola mundo';
    res.locals.data = userData;
    

    
  } catch (error) {
    next(error);
  }
}

export {
  getUserRoute,
}