require("dotenv").config();
import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";
import schema from "./schema";

const PORT = process.env.port || 4000;

const server = new GraphQLServer({ schema });

server.start({ port: PORT }, () =>
  console.log(`✅　Server running on port ${PORT}`)
);

server.express.use(logger("dev"));
