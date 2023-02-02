import { Request, Response, NextFunction } from "express";
import { CreateUserError, GetUserError } from "../../errors/user/user.errors";
import UserModel from "../../models/user/user.model";
//@ts-ignore
import { getUser, createUser } from "../../services/user/user.services";
import { notNull } from "../../utils/utils";
//@ts-ignore
async function getUser_(req: Request, res: Response, next: NextFunction) {
  try {
    const userId = req.params.id_user || "";
    const user = await getUser(userId);
    if (!notNull(user)) throw new GetUserError("User was not obtained");
    res.locals.user = user;
    next();
  } catch (error) {
    res.locals.mssg = "User couldnt be obtained";
    if (error instanceof GetUserError) {
      res.locals.mssg = error.message;
    }
    next(error);
  }
}

async function createUser_(req: Request, res: Response, next: NextFunction) {
  try {
    const userData = req.body.user;
    if (!notNull(userData)) {
      throw new CreateUserError(
        "You haven't provided the user data for its creation"
      );
    }

    const user = UserModel.fromMap(userData);
    if (typeof user == "undefined") {
      throw new CreateUserError("User data for creation couldn't be completed");
    }
    const userC = await createUser(user);
    res.locals.user = userC;
    next();
  } catch (error) {
    if (error instanceof CreateUserError) {
      res.locals.mssg = error.message;
    } else {
      res.locals.mssg = "User couldnt be created";
    }

    next(error);
  }
}

export { getUser_ as getUser, createUser_ as createUser };
