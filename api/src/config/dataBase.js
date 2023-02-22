import { Sequelize } from "sequelize";
import "dotenv/config"
const dbName = process.env.DB_NAME
const dbPort = process.env.DB_PORT
const dbUserName = process.env.DB_USER_NAME
const dbPassword = process.env.DB_PASWORD
const dbHost = process.env.DB_HOST

const dataBase = new Sequelize(dbName, dbUserName, dbPassword, {
  host: dbHost,
  dialect: "mysql",
  port: dbPort
})
try {
  await dataBase.authenticate();
  console.log('Conectado a la base de datos');
} catch (error) {
  console.error('No se pudo conectar a la base de datos', error);
}

export default dataBase