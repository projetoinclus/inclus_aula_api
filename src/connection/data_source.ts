import { config } from "dotenv";
import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";

config();

enum dataSourceTypes {
    MSSQL = "mssql",
    MYSQL = "mysql",
    POSTGRES = "postgres",
}

export interface InterfaceDataSourceOptions {
    type: dataSourceTypes;
    host: string;
    port: number;
    database: string;
    username: string;
    password: string;
}

function createDataSourceOptions(
    type: dataSourceTypes,
    host: string,
    port: number,
    database: string,
    username: string,
    password: string,
    entities: any[],
    logging: boolean
): DataSourceOptions {
    const options: DataSourceOptions = {
        type,
        host,
        port,
        database,
        username,
        password,
        synchronize: false,
        entities,
        logging,
    };

    if (type === "mssql") {
        (options as any).options = {
            encrypt: true,
            trustServerCertificate: true,
        };
    }

    return options;
}

export function dataSourceMSSQL(database: string, entities: any[], logging: boolean = false): DataSource {
    const host = process.env.DB_MSSQL_HOST || "localhost";
    const port = parseInt(process.env.DB_MSSQL_PORT || "1433");
    const username = process.env.DB_MSSQL_USER || "root";
    const password = process.env.DB_MSSQL_PASS || "root";

    const options = createDataSourceOptions(dataSourceTypes.MSSQL, host, port, database, username, password, entities, logging);

    return new DataSource(options);
}

export function dataSourceMYSQL(database: string, entities: any[], logging: boolean = false): DataSource {
    const host = process.env.DB_MYSQL_HOST || "localhost";
    const port = parseInt(process.env.DB_MYSQL_PORT || "3306");
    const username = process.env.DB_MYSQL_USER || "root";
    const password = process.env.DB_MYSQL_PASS || "root";

    const options = createDataSourceOptions(dataSourceTypes.MYSQL, host, port, database, username, password, entities, logging);

    return new DataSource(options);
}

export function dataSourcePOSTGRES(database: string, entities: any[], logging: boolean = false): DataSource {
    const host = process.env.DB_POSTGRES_HOST || "localhost";
    const port = parseInt(process.env.DB_POSTGRES_PORT || "8745");
    const username = process.env.DB_POSTGRES_USER || "postgres";
    const password = process.env.DB_POSTGRES_PASS || "postgres";

    const options = createDataSourceOptions(dataSourceTypes.POSTGRES, host, port, database, username, password, entities, logging);

    return new DataSource(options);
}
