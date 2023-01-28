import { Sequelize } from "sequelize";
import {
  DB_HOST,
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  DB_PORT,
  DB_DIALECT,
} from "../config/env.config";
import setupAssociations from "./models/models.config";

const dataBase = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  // @ts-ignore
  dialect: DB_DIALECT,
  logging: false,
});

setupAssociations(dataBase);
const models = dataBase.models
export { dataBase, models as dbModels };
