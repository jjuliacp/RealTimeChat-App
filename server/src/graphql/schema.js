export const typeDefs = `
  type Message {
    id: ID!
    content: String!
    user: String!
  }

  type Query {
    messages: [Message]
  }

  type Mutation {
    sendMessage(content: String!, user: String!): Message
  }

  type Subscription {
    messageSent: Message
  }
`;
