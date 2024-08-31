import { dataSourceMYSQL } from "./connection/data_source";

const database = process.env.DB_DEFAULT_NAME || "";
const port = process.env.SERVER_PORT || 3000;

export const dataSource = dataSourceMYSQL(database, []);

try {
  dataSource.initialize();
  console.log("CONECTADO");
} catch (error) {
  console.error("ERRO AO CONECTAR:", error);
}
