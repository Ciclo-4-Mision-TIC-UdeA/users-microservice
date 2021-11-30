import { ApolloServer } from 'apollo-server';
import { userTypes } from './graphql/types';
import { userResolvers } from './graphql/resolvers';

const server = new ApolloServer({
  typeDefs: userTypes,
  resolvers: userResolvers,
});

server.listen({ port: 5000 }).then((url) => {
  console.log('Microservicio de usuarios corriendo');
});
