import { Sequelize, DataTypes } from "sequelize";

function paymentModel(dataBase: Sequelize) {
  dataBase.define("Payment", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      unique: true,
      field: "id_payment",
    },
    value: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0,
      field: "value_payment",
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
function paymentAssociation(dataBase: Sequelize) {
  const models = dataBase.models;

  //obtaining models for associations
  const account = models.Account;
  const payment = models.Payment;

  //associations
  payment.belongsTo(account, {
    as: "pAccount",
    foreignKey: "id_account",
  });
}

export { paymentModel, paymentAssociation };
