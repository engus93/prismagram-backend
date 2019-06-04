import "./env";
import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";
import schema from "./schema";
import "./passport";
import { authenticateJwt } from "./passport";

const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({
  schema,
  context: ({ request }) => ({ request })
});

/* Middlewares List
graphql server에는 express가 내장되어 있다. */

// Log Check
server.express.use(logger("dev"));
// Authenticate를 jwt로 지정
server.express.use(authenticateJwt);

server.start({ port: PORT }, () =>
  console.log(`✅　Server running on port http://localhost:${PORT}`)
);
