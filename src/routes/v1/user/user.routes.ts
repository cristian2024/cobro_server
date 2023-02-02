import userRoutesMw from "./user.routes.mw";
import { Router } from "express";
import {
  getUser,
  createUser,
  updateUser,
} from "../../../middlewares/user/user.mw";

const userRouter: Router = Router();

userRouter.get("/:id_user", getUser, userRoutesMw.getUserRoute);

userRouter.post("/", createUser, userRoutesMw.createUserRoute);

userRouter.put("/:id_user", updateUser, userRoutesMw.updateUserRoute);

export default userRouter;
