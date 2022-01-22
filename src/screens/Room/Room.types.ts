export interface User {
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  role: string;
  __typename: string;
}

export interface SingleMessage {
  body: string;
  id: string;
  insertedAt: string;
  user: User;
}
