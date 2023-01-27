import dotenv from "dotenv";
import path = require("path");

dotenv.config({
  path: path.resolve(__dirname, "../../.env"),
});

const env = process.env.ENVIRONMENT || "dev";
const port = process.env.PORT || 8081;
const dbUser = process.env.DB_USER || "user";
const dbPassword = process.env.DB_PASSWORD || "pw";
const dbHost = process.env.DB_HOST || "localhost";
const dbPort = Number(process.env.DB_PORT || 1000);
const dbName = process.env.DB_NAME || "dbname";
const dbDialect = process.env.DB_DIALECT || "dialect";

export {
  env as ENV,
  port as PORT,
  dbUser as DB_USER,
  dbPassword as DB_PASSWORD,
  dbHost as DB_HOST,
  dbPort as DB_PORT,
  dbName as DB_NAME,
  dbDialect as DB_DIALECT,
};
