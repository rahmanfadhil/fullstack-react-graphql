import { ConnectionOptions } from "typeorm";
import { join } from "path";

const development: ConnectionOptions = {
  type: "sqlite",
  database: "database.sqlite",
  synchronize: true,
  logging: true,
  entities: [join(__dirname, "./entity/*.ts")]
};

const production: ConnectionOptions = {
  type: "postgres",
  host: "postgres-node",
  port: 5432,
  username: "postgres",
  password: "12345",
  database: "database",
  synchronize: true,
  logging: false,
  entities: [join(__dirname, "./entity/*.ts")]
};

export default (process.env.NODE_ENV === "production"
  ? production
  : development);
