import userRoutesMw from "./user.routes.mw";
import { getUser,createUser } from "../../../middlewares/user/user.mw";
import express, { Router } from "express";

const userRouter: Router = express.Router();

userRouter.get("/:id_user", getUser, userRoutesMw.getUserRoute);

userRouter.post("/", createUser, userRoutesMw.createUserRoute);

export default userRouter;
