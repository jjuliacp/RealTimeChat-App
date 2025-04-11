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

// Mutation para crear un nuevo usuario
export const CREATE_USER = gql`
  mutation CreateUser($name: String!, $isLoggedIn: Boolean!) {
    createUser(name: $name, isLoggedIn: $isLoggedIn) {
      id
      name
      isLoggedIn
    }
  }
`;
export const LOGOUT_USER = gql`
  mutation LogoutUser($name: String!) {
    logoutUser(name: $name)
  }
`;