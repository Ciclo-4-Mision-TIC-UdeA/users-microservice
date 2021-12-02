import { ApolloServer } from 'apollo-server';
import { userTypes } from './graphql/types';
import { userResolvers } from './graphql/resolvers';
import { buildSubgraphSchema } from '@apollo/subgraph';

const server = new ApolloServer({
  schema: buildSubgraphSchema([{ typeDefs: userTypes, resolvers: userResolvers }]),
});

server.listen({ port: 4001 }).then((url) => {
  console.log('Microservicio de usuarios corriendo');
});
