import dotenv from 'dotenv';
import path = require('path');

dotenv.config({
  path: path.resolve(__dirname, '../../.env'),
},);


const env= process.env.ENVIRONMENT || 'dev';
const port= process.env.PORT || 8081;
const dbUser= process.env.DB_USER;
const dbPassword= process.env.DB_PASSWORD;
const dbHost= process.env.DB_HOST;
const dbPort= process.env.DB_PORT;
const dbName = process.env.DB_NAME;

export  {
  env as ENV,
  port as PORT,
  dbUser as DB_USER,
  dbPassword as DB_PASSWORD,
  dbHost as DB_HOST,
  dbPort as DB_PORT,
  dbName as DB_NAME,
};