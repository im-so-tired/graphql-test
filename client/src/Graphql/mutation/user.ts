import { gql } from "@apollo/client";

export const addUser = gql(`
  mutation addUser($email: String!, $password: String!, $phone: String!) {
    addUser(phone: $phone, password: $password, email: $email) {
      email
      phone
      id
    }
  }
`);
