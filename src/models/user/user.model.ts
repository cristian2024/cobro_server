class UserModel {
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
}

export default UserModel;
