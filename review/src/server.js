// dotenv file의 path 변경 시켜주기
import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, ".env") });

import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";
import schema from "./schema";

const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({ schema });

// graphql server에는 express가 내장되어 있다. logger랑 연결
server.express.use(logger("dev"));

server.start({ port: PORT }, () =>
  console.log(`✅　Server running on port http://localhost:${PORT}`)
);
