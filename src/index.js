import { ApolloServer, gql } from "apollo-server";
import schema from "./schema";
import resolvers from "./resolvers";
import db from "./models";
import cors from "cors";

// Construct a schema, using GraphQL schema language


const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: request => {
    return {db, request};
  },
  // enable playground even in production
  introspection: true,
  playground: true,
});

const PORT = process.env.PORT || 4009;

server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
