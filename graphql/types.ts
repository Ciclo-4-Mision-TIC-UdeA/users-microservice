import { gql } from 'apollo-server';

const userTypes = gql`
  enum Enum_Role {
    ADMIN
    USER
  }

  type User @key(fields: "id") {
    id: ID!
    name: String!
    email: String!
    role: Enum_Role!
    profile: Profile
    author: Author
  }

  type Profile @key(fields: "id") {
    id: ID!
    document: String!
    phone: String!
  }

  extend type Author @key(fields: "id") {
    id: ID! @external
  }

  extend type Query {
    users: [User]
  }
`;

export { userTypes };
