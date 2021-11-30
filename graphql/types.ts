import { gql } from 'apollo-server';

const userTypes = gql`
  enum Enum_Role {
    ADMIN
    USER
  }

  type User {
    id: ID!
    name: String!
    email: String!
    role: Enum_Role!
    profile: Profile
  }

  type Profile {
    id: ID!
    document: String!
    phone: String!
  }

  type Query {
    users: [User]
  }
`;

export { userTypes };
