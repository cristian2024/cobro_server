import userRoutesMw from "./user.routes.mw";
import { Router } from "express";
import {
  getUser,
  createUser,
  updateUser,
  deleteUser
} from "../../../middlewares/user/user.mw";

const userRouter: Router = Router();

userRouter.get("/:id_user", getUser, userRoutesMw.getUserRoute);

userRouter.post("/", createUser, userRoutesMw.createUserRoute);

userRouter.put("/:id_user", updateUser, userRoutesMw.updateUserRoute);

userRouter.delete('/:id_user', deleteUser, userRoutesMw.deleteUserRoute);

export default userRouter;
