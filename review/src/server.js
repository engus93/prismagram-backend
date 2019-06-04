// dotenv file의 path 변경 시켜주기
import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, ".env") });

import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";
import schema from "./schema";
import passport from "passport";
import "./passport";

const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({ schema });

/* Middlewares List
graphql server에는 express가 내장되어 있다. */

// Log Check
server.express.use(logger("dev"));
// Authenticate를 jwt로 지정
server.express.use(passport.authenticate("jwt"));

server.start({ port: PORT }, () =>
  console.log(`✅　Server running on port http://localhost:${PORT}`)
);
