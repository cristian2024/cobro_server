import { Sequelize, DataTypes } from "sequelize";

function userModel(dataBase: Sequelize) {
  dataBase.define("User", {
    id_user: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      unique: true,
      field: "id",
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cellphone: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    document: DataTypes.STRING,
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birth_date: DataTypes.DATE,
    user_type: {
      type: DataTypes.ENUM("client", "investor", "responsible"),
    },
  });
}

//@ts-ignore
function userAssociation(dataBase: Sequelize) {}

export { userModel, userAssociation };
