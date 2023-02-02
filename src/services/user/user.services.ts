import UserModel from "../../models/user/user.model";
import { dbModels } from "../../database/db.config";

const UserDB = dbModels.User;

async function createUser(user: UserModel) {
  return UserDB.create(user.toMap());
}

const getUser = async (idUser: string) => UserDB.findByPk(idUser);

const deleteUser = async (idUser: string) =>
  UserDB.destroy({ where: { id: idUser } });

async function updateUser(user: UserModel, idUser : string) {

  return UserDB.update(user.toMap, { where: { id: idUser } });
}

export { createUser, getUser, deleteUser, updateUser };
