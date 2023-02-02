import { Request, Response, NextFunction } from "express";
import UserModel from "../../models/user/user.model";
import { notNull } from "../../utils/utils";
import {
  CreateUserError,
  GetUserError,
  UpdateUserError,
  validateUserError,
} from "../../errors/user/user.errors";

import {
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "../../services/user/user.services";

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

    const userC = await createUser(user);
    res.locals.user = userC;
    next();
  } catch (error) {
    res.locals.mssg = validateUserError(error, "User couldnt be created");
    next(error);
  }
}

async function updateUser_(req: Request, res: Response, next: NextFunction) {
  try {
    const userData = req.body.user;
    const idUser = req.params.id_user;
    if (!notNull(userData)) {
      throw new UpdateUserError(
        "You haven't provided the user data for its updating"
      );
    }

    const userU = await updateUser(userData, idUser);
    res.locals.user = userU;
    next();
  } catch (error) {
    res.locals.mssg = validateUserError(error, "User couldnt be updated");
    next(error);
  }
}

async function deleteUser_(req: Request, res: Response, next: NextFunction) {
  try {
    const idUser = req.params.id_user;

    //amount of registers deleted
    const amount = await deleteUser(idUser);
    res.locals.amountDeleted = amount;
    next();
  } catch (error) {
    res.locals.mssg = validateUserError(error, "User couldnt be updated");
    next(error);
  }
}

export {
  getUser_ as getUser,
  createUser_ as createUser,
  updateUser_ as updateUser,
  deleteUser_ as deleteUser,
};
