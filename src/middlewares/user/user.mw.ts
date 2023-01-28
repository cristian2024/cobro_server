import {  Request, Response, NextFunction } from "express";
import { getUser } from "../../services/user/user.services";

async function getUser_(req: Request, res: Response, next: NextFunction) {
  try {
    const userId = req.params.id_user || "";
    const user = await getUser(userId);
    res.locals.user = user;
    next();
  } catch (error) {}
}

export { getUser_ as getUser };
