import { Sequelize, DataTypes } from "sequelize";

function accountModel(dataBase: Sequelize) {
  dataBase.define("Account", {
    id_account: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      unique: true,
      field: "id",
    },
    value_account: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0,
      field: "value",
    },
    interest: {
      type: DataTypes.DOUBLE,
      defaultValue: 0,
      allowNull: false,
    },
    is_compound: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    auto_increment: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
  });
}

//@ts-ignore
function accountAssociation(dataBase: Sequelize) {}

export { accountModel, accountAssociation };
