import { Sequelize, DataTypes } from "sequelize";

function userModel(dataBase: Sequelize) {
  dataBase.define("User", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      unique: true,
      field: "id_user",
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
function userAssociation(dataBase: Sequelize) {
  const models = dataBase.models;

  //obtaining models for associations
  const user = models.User;
  const investor = models.InvestorInfo;
  const account = models.Account;

  //associations
  user.hasOne(investor, {
    as: "iUser",
    foreignKey: "id_user",
  });
  user.hasMany(account, {
    as: "aUser",
    foreignKey: "id_user",
  });
}

export { userModel, userAssociation };
