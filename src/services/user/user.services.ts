import UserModel from "../../models/user/user.model";
import { dbModels } from "../../database/db.config";

const UserDB = dbModels.User;

async function createUser(user:UserModel){
  return UserDB.create(user.toMap());
}


export {
  createUser
}