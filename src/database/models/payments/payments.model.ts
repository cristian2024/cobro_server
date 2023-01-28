import { Sequelize, DataTypes } from "sequelize";

function paymentModel(dataBase: Sequelize) {
  dataBase.define("Payment", {
    id_payment: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      unique: true,
      field: "id",
    },
    value_payment: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0,
      field: "value",
    },
    date_payment: {
      type: DataTypes.DATE,
      defaultValue: Date.now,
      allowNull: false,
    },
    extra_info: DataTypes.JSON,
  });
}

//@ts-ignore
function paymentAssociation(dataBase: Sequelize) {}

export { paymentModel, paymentAssociation };
