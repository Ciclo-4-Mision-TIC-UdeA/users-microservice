import { ApolloServer } from 'apollo-server';
import { userTypes } from './graphql/types';
import { userResolvers } from './graphql/resolvers';
import { buildSubgraphSchema } from '@apollo/subgraph';

import dotenv from 'dotenv';

dotenv.config();

const server = new ApolloServer({
  schema: buildSubgraphSchema([{ typeDefs: userTypes, resolvers: userResolvers }]),
});

server
  .listen({ port: process.env.PORT || 5001 })
  .then((url) => {
    console.log('Microservicio de usuarios corriendo');
  })
  .catch((e) => {
    console.log('error', e);
  });
