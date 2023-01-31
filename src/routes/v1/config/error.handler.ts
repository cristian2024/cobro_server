import { Response, Request, NextFunction } from "express";

const basicErrorHandler = (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  const mssg = (res.locals.mssg ||
    "There was an error on server, please wait.") as string;
  //obtaining code
  let code;
  try {
    code = (res.locals.code || 500) as number;
  } catch (error) {
    code = 500;
  }

  //validating if error is from sequelize
  let e = getSequelizeError(error);

  res.status(code).json({
    success: false,
    mssg: mssg,
    error: e,
  });
  return;
};

function getSequelizeError(error: Error): void | string {
  if (error.name == "SequelizeDatabaseError") {
    let mssg = "Database error";
    if (error.message.includes("invalid input syntax for type uuid")) {
      mssg = "Invalid id for input search";
    }
    return mssg;
  }
}

export { basicErrorHandler };
