import {
    ApolloClient,
    InMemoryCache,
    split,
    HttpLink
} from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { getMainDefinition } from "@apollo/client/utilities";

const httpLink = new HttpLink({
    uri: "http://localhost:4000/graphql", // tu endpoint HTTP
});

// En el cliente Apollo (graphql-ws)
const wsLink = new GraphQLWsLink(
    createClient({
        url: "ws://localhost:4000/graphql",
        connectionParams: {}, // Aunque esté vacío, es obligatorio
        shouldRetry: () => true,
        on: {
            connected: () => console.log("🚀 WebSocket Conectado"),
            error: (err) => console.error("❌ WebSocket Error:", err),
            message: (msg) => console.log("Mensaje recibido por WebSocket:", msg),
        },
    })
);

const splitLink = split(
    ({ query }) => {
        const def = getMainDefinition(query);
        return (
            def.kind === "OperationDefinition" &&
            def.operation === "subscription"
        );
    },
    wsLink,
    httpLink
);

const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache({
        addTypename: false, // ← ¡Añade esto!
    }),
});
export default client;