import { Response, Request,NextFunction } from "express";
// @ts-ignore
export const  basicErrorHandler=(error: Error,req: Request, res: Response, next: NextFunction):void =>{
  const mssg = "There was an error on server, please wait.";

  res.status(500).json({
    success: false,
    mssg: mssg,
    // error: error,?
  });
  return;
}

// export { basicErrorHandler };
