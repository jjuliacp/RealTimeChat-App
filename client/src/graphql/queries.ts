import { gql } from "@apollo/client";

export const FETCH_MESSAGES = gql`
  query {
    messages {
      id
      user
      content
    }
  }
`;

export const FETCH_USERS = gql`
  query {
    users {
      id
      name
    }
  }
`;