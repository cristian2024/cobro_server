import { Sequelize, DataTypes } from "sequelize";

function productModel(dataBase: Sequelize) {
  dataBase.define("Product", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      unique: true,
      field: "id_product",
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "name_product",
    },
    value: {
      type: DataTypes.DOUBLE,
      field: "value_product",
      defaultValue: 0,
      allowNull: false,
    },
    img_url: DataTypes.STRING,
  });
}

//@ts-ignore
function productAssociation(dataBase: Sequelize) {
  const models = dataBase.models;

  //obtaining models for associations
  const account = models.Account;
  const product = models.Payment;

  //associations
  product.belongsToMany(account, {
    as: "account",
    foreignKey: "id_account",
    through: "AccountProduct",
  });
}

export { productModel, productAssociation };
