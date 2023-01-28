import { Sequelize, DataTypes } from "sequelize";

function productModel(dataBase: Sequelize) {
  dataBase.define("Product", {
    id_product: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      unique: true,
      field: "id",
    },
    name_product: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "name",
    },
    value_product: {
      type: DataTypes.DOUBLE,
      field: "value",
      defaultValue: 0,
      allowNull: false,
    },
    img_url: DataTypes.STRING,
  });
}

//@ts-ignore
function productAssociation(dataBase: Sequelize) {}

export { productModel, productAssociation };
