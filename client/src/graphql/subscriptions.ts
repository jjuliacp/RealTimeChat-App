import { gql } from "@apollo/client";

// Subscription para obtener los mensajes en tiempo real
export const GET_MESSAGES = gql`
  subscription {
    messageSent {
      id
      user
      content
    }
  }
`;