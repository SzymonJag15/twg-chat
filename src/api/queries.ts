import { gql } from "@apollo/client";

export const GET_CURRENT_USER_ID = gql`
   query {
    user {
      id
    }
  }
`;

export const GET_ROOMS = gql`
   query {
    usersRooms {
      user {
        email
        firstName
        lastName
        id
        role
      }
      rooms {
        id
        name
      }
    }
  }
`;

export const GET_ROOM = gql`
  query($id: String!) {
    room(id: $id) {
      id
      messages {
        id
        body
        insertedAt
        user {
          id
          firstName
          lastName
          role
          email
        }
      }
      name
      user {
        id
        firstName
        lastName
        role
        email
      }
    }
  }
`