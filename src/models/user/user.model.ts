import { notNull } from "../../utils/utils";
import ModelsBase from "../models.base";

class UserModel implements ModelsBase {
  id?: string;
  firstName: string;
  lastName: string;
  cellphone?: string;
  email: string;
  document?: string;
  username: string;
  birthDate: Date;
  userType: string;

  constructor({
    id,
    firstName,
    lastName,
    cellphone,
    email,
    document,
    username,
    birthDate = new Date(),
    userType,
  }: {
    id?: string;
    firstName: string;
    lastName: string;
    cellphone?: string;
    email: string;
    document?: string;
    username: string;
    birthDate: Date;
    userType: string;
  }) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.cellphone = cellphone;
    this.email = email;
    this.document = document;
    this.username = username;
    this.birthDate = birthDate;
    this.userType = userType;
  }

  static fromMap(map: any): UserModel | undefined {
    const firstName = map["first_name"];
    const lastName = map["last_name"];
    const email = map["email"];
    const username = map["username"];
    if (
      !notNull(firstName) ||
      !notNull(lastName) ||
      !notNull(email) ||
      !notNull(username)
    )
      return undefined;

    const user = new UserModel({
      firstName: firstName,
      lastName: lastName,
      email: email,
      username: username,
      birthDate:
        map["birth_date"] == null ? new Date() : new Date(map["birth_date"]),
      userType: map["user_type"] || "client",
      cellphone: map["cellphone"],
      document: map["document"],
    });

    if (map["id"] != null) {
      user.id = map["id"];
    }

    return user;
  }
  toMap(): {
    [key: string]: number | string | Date;
  } {
    const obj: {
      [key: string]: string | Date;
    } = {
      first_name: this.firstName,
      last_name: this.lastName,
      email: this.email,
      username: this.username,
      birth_date: this.birthDate,
      user_type: this.userType,
    };

    if (this.cellphone != null) {
      obj["cellphone"] = this.cellphone;
    }
    if (this.document != null) {
      obj["document"] = this.document;
    }
    return obj;
  }
}

export default UserModel;
