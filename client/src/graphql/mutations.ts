import { gql } from "@apollo/client";

// Mutation para enviar un nuevo mensaje
export const POST_MESSAGE = gql`
  mutation ($user: String!, $content: String!) {
    sendMessage(user: $user, content: $content) {
      id
      user
      content
    }
  }
`;