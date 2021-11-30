import { ApolloServer } from 'apollo-server';
import { userTypes } from './graphql/types';
import { userResolvers } from './graphql/resolvers';
import dotenv from 'dotenv';

dotenv.config();

const server = new ApolloServer({
  typeDefs: userTypes,
  resolvers: userResolvers,
});

server.listen({ port: process.env.PORT || 5001 }).then((url) => {
  console.log('Microservicio de usuarios corriendo');
});
