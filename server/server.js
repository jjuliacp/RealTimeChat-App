import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { useServer } from "graphql-ws/lib/use/ws";
import express from "express";
import { createServer } from "http";
import cors from "cors";
import { WebSocketServer } from "ws";
import { typeDefs } from "./src/graphql/schema.js";
import { resolvers } from "./src/graphql/resolvers.js";

const schema = makeExecutableSchema({ typeDefs, resolvers });

const app = express();
const httpServer = createServer(app);

// Configurar WebSocket Server
const wsServer = new WebSocketServer({
  server: httpServer,
  path: "/graphql",
});

useServer({ schema }, wsServer);
// Iniciar el servidor Apollo
const server = new ApolloServer({ schema });
await server.start();

app.use("/graphql", cors(), express.json(), expressMiddleware(server));

httpServer.listen(4000, () => {
  console.log("🚀 Server ready at http://localhost:4000/graphql");
});
