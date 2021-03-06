import "reflect-metadata";
import { createConnection } from "typeorm";
import { GraphQLServer } from "graphql-yoga";
import { readFileSync } from "fs";
import { join } from "path";
import * as prettyError from "pretty-error";

import resolvers from "./resolvers";
import context from "./context";

if (process.env.NODE_ENV !== "production") {
  prettyError.start();
}

createConnection().then((connection) => {
  console.log("[database] connected!");
  const typeDefs = readFileSync(join(__dirname, "./schema.graphql"), "utf8");
  const server = new GraphQLServer({ resolvers, typeDefs, context });
  server.start({ port: process.env.PORT }, () =>
    console.log("[server] listening ...")
  );
});
