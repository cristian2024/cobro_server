// create table if not exists public."InvestorInfo" (
// 	id_investor uuid not null primary key,
// 	id_user UUID not null,
// 	initial_investment decimal not null default 0,
// 	available decimal not null default 0
// )

import { DataTypes, Sequelize } from "sequelize";

function investorModel(dataBase: Sequelize) {
  dataBase.define("InvestorInfo", {
    id_investor: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      unique: true,
      field: "id",
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
function investorAssociation(dataBase: Sequelize) {}

export { investorModel, investorAssociation };
