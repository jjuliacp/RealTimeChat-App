import { pubsub } from "../../pubsub.js";

let messages = [];
const users = [];
export const resolvers = {
  Query: {
    messages: () => messages,
    users: () => users.filter((u) => u.isLoggedIn),
  },
  Mutation: {
    sendMessage: (_, { content, user }) => {
      const message = { id: Date.now().toString(), content, user };
      messages.push(message);
      console.log("Publicando mensaje:", message);
      pubsub.publish("MESSAGE_SENT", { messageSent: message });
      return message;
    },
    createUser: (_, { name, isLoggedIn }) => {
      const user = {
        id: Date.now().toString(),
        name,
        isLoggedIn,
      };
      console.log("Usuario creado:", user);
      return user;
    },
  },
  Subscription: {
    messageSent: {
      subscribe: () => pubsub.asyncIterator("MESSAGE_SENT"),
      resolve: (payload) => payload.messageSent, // para poder enviar el mensaje completo
    },
  },
};
