import { DataSource } from "typeorm";
import { User } from "../entities/user";
require("dotenv").config({ path: "./.env" });

const dbName = process.env.db_name as string;
const dbUser = process.env.db_user as string;
const dbPassword = process.env.db_password;
const dbHost = process.env.db_host;

export const AppDataSource = new DataSource({
  type: "postgres",
  host: dbHost,
  port: 5432,
  username: dbUser,
  password: dbPassword,
  database: dbName,
  logging: "all",
  entities: [User],
  //Dev --
  //synchronize: true
});
