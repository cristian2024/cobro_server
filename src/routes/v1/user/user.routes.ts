import userRoutesMw from "./user.routes.mw";
import { getUser } from "../../../middlewares/user/user.mw";
import express, { Router } from "express";

const userRouter: Router = express.Router();

userRouter.get("/:id_user", getUser, userRoutesMw.getUserRoute);

export default userRouter;
