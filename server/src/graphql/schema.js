export const typeDefs = `
  type User {
   id: ID!
   name: String!
   isLoggedIn: Boolean!
  }

  type Message {
    id: ID!
    content: String!
    user: String!
  }

  type Query {
    messages: [Message]
    users: [User!]!
  }

  type Mutation {
    sendMessage(content: String!, user: String!): Message
    createUser(name: String!, isLoggedIn: Boolean!): User!
  }

  type Subscription {
    messageSent: Message
  }
`;
