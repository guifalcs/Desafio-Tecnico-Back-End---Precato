import { Sequelize } from "sequelize";
import dbConfig from "./db.js";

export const sequelize = new Sequelize(
    dbConfig.database,
    dbConfig.username,
    dbConfig.password,
    {
      host: dbConfig.host,
      dialect: dbConfig.dialect,
    }
)