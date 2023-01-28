import UserModel from "../../models/user/user.model";
import { dbModels } from "../../database/db.config";

const UserDB = dbModels.User;

async function createUser(user: UserModel) {
  return UserDB.create(user.toMap());
}

async function getUser(idUser: string) {
  // return new UserModel();
  const userData = await UserDB.findByPk(idUser);

  return userData;
}

const deleteUser = async (idUser: string) =>
  UserDB.destroy({ where: { id: idUser } });

async function updateUser(user: UserModel) {
  return UserDB.update(user, { where: { id: user.id } });
}

export { createUser, getUser, deleteUser, updateUser };
