import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, ".env") });

import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";
import schema from "./schema";
import { sendSecretMail } from "./utils";

// sendSecretMail("", "123");

const PORT = process.env.port || 4000;

const server = new GraphQLServer({ schema });

server.start({ port: PORT }, () =>
  console.log(`✅　Server running on port ${PORT}`)
);

server.express.use(logger("dev"));
