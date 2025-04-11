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

// Subscription para obtener la lista de usuarios conectados
export const USER_CONNECTED = gql`
  subscription {
    userConnected {
      id
      name
    }
  }
`;
export const USER_DISCONNECTED = gql`
  subscription {
    userDisconnected {
      id
      name
    }
  }
`;
// Subscription para obtener la lista de usuarios conectados
export const FETCH_USERS = gql`
  query {
    users {
      id
      name
    }
  }
`;
