import { Request, Response, NextFunction } from "express";
import UserModel from "../../models/user/user.model";
import { getUser, createUser } from "../../services/user/user.services";
import { notNull } from "../../utils/utils";

async function getUser_(req: Request, res: Response, next: NextFunction) {
  try {
    const userId = req.params.id_user || "";
    const user = await getUser(userId);
    res.locals.user = user;
    next();
  } catch (error) {
    res.locals.mssg = "User couldnt be obtained";
    next(error);
  }
}

async function createUser_(req: Request, res: Response, next: NextFunction) {
  try {
    const userData = req.body.user;
    if (notNull(userData)) {
    }
    const userM: UserModel | void = UserModel.fromMap(userData);
    if (typeof userM != "undefined") {
      const user = await createUser(userM);
      res.locals.user = user;
    }

    next();
  } catch (error) {
    res.locals.mssg = "User couldnt be obtained";
    next(error);
  }
}

export { getUser_ as getUser, createUser_ as createUser };
