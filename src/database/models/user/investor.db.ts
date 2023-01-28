// create table if not exists public."InvestorInfo" (
// 	id_investor uuid not null primary key,
// 	id_user UUID not null,
// 	initial_investment decimal not null default 0,
// 	available decimal not null default 0
// )

import { DataTypes, Sequelize } from "sequelize";

function investorModel(dataBase: Sequelize) {
  dataBase.define("InvestorInfo", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      unique: true,
      field: "id_investor",
    },
    initial_investment: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0,
    },
    availabe: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0,
    },
  });
}

//@ts-ignore
function investorAssociation(dataBase: Sequelize) {
  const models = dataBase.models;

  //obtaining models for associations
  const user = models.User;
  const investor = models.InvestorInfo;

  //associations
  investor.belongsTo(user, {
    as: "iUser",
    foreignKey: "id_user",
  });
}

export { investorModel, investorAssociation };
