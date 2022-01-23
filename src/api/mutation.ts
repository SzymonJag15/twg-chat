import { gql } from "@apollo/client";

export const SEND_MESSAGE = gql`
  mutation ($body: String!, $roomId: String!) {
    sendMessage(body: $body, roomId: $roomId) {
      body
    	id
    	insertedAt
    }
  }
`;

export const LOGIN_USER = gql`
  mutation ($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
    	user {
        id
        email
        firstName
        lastName
        role
      }
    }
  }
`;