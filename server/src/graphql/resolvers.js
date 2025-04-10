import { pubsub } from "../../pubsub.js";

let messages = [];
export const resolvers = {
  Query: {
    messages: () => messages,
  },
  Mutation: {
    sendMessage: (_, { content, user }) => {
      const message = { id: Date.now().toString(), content, user };
      messages.push(message);
      console.log("Publicando mensaje:", message);
      pubsub.publish("MESSAGE_SENT", { messageSent: message });
      return message;
    },
  },
  Subscription: {
    messageSent: {
      subscribe: () => pubsub.asyncIterator("MESSAGE_SENT"),
      resolve: (payload) => payload.messageSent, // para poder enviar el mensaje completo
    },
  },
};
