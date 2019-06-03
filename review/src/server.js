require("dotenv").config();
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
