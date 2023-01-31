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
    firstName = "",
    lastName = "",
    cellphone,
    email = "",
    document,
    username = "",
    birthDate = new Date(),
    userType = "",
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
    // return new UserModel({id=map['id'],});
    return;
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
