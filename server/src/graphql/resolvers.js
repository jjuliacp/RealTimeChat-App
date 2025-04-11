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
      let user = users.find((u) => u.name === name);
      if (user) {
        user.isLoggedIn = true; // reconectado
      } else {
        user = {
          id: Date.now().toString(),
          name,
          isLoggedIn,
        };
        users.push(user);
      }
      pubsub.publish("USER_CONNECTED", { userConnected: user });
      console.log("Usuario conectado ✅:", user);
      return user;
    },
    logoutUser: (_, { name }) => {
      const user = users.find((u) => u.name === name);
      if (user) {
        user.isLoggedIn = false;
        pubsub.publish("USER_DISCONNECTED", { userDisconnected: user });
        console.log("Usuario desconectado ❌:", user);
        return true;
      }
      return false;
    },
  },
  Subscription: {
    messageSent: {
      subscribe: () => pubsub.asyncIterator("MESSAGE_SENT"),
      resolve: (payload) => payload.messageSent, // para poder enviar el mensaje completo
    },
    userConnected: {
      subscribe: () => pubsub.asyncIterator("USER_CONNECTED"),
      resolve: (payload) => payload.userConnected,
    },
    userDisconnected: {
      subscribe: () => pubsub.asyncIterator("USER_DISCONNECTED"),
      resolve: (payload) => payload.userDisconnected,
    },
  },
};
