import { Response, Request, NextFunction } from "express";
import { notNull } from "../../../utils/utils";
// @ts-ignore
function successHandler(req: Request, res: Response, next: NextFunction) {
  const body: {
    [key: string]: any;
  } = {
    success: true,
  };
  //obtaining code value
  let code = 200;
  if (typeof res.locals.code == "number") {
    code = res.locals.code;
  }

  //trying to obtain data value
  const data = res.locals.data;
  if (notNull(data)) {
    body["data"] = data;
  }

  //obtaining mssg value
  const mssg = res.locals.mssg;
  if (notNull(mssg)) {
    body["mssg"] = mssg;
  }

  //sending data
  res.status(code).json(body);
}




export  {
  successHandler,
};
