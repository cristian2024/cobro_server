import { Sequelize, DataTypes } from "sequelize";

function accountModel(dataBase: Sequelize) {
  dataBase.define("Account", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      unique: true,
      field: "id_account",
    },
    value: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0,
      field: "value_account",
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
function accountAssociation(dataBase: Sequelize) {
  const models = dataBase.models;

  //obtaining models for associations
  const account = models.Account;
  const product = models.Product;
  const user = models.User;
  const payment = models.Payment;

  //associations
  account.hasMany(payment, {
    as: "pAccount",
    foreignKey: "id_account",
  });
  account.belongsToMany(product, {
    as: "product",
    foreignKey: "id_product",
    through: "AccountProduct",
  });
  account.belongsTo(user, {
    as: "aUser",
    foreignKey: "id_user",
  });
}

export { accountModel, accountAssociation };
