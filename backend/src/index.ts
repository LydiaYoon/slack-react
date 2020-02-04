import { GraphQLServer, PubSub } from "graphql-yoga";
import connection from "./ormConfig";
import schema from "./schema";

const pubSub = new PubSub(); // PubSub : graphQL에서 웹 소켓 역할
const server = new GraphQLServer({ schema, context: { pubSub } });

connection.then(() =>
  server.start(() =>
    console.log("My First GraphQL Server is running on localhost:4000")
  )
);

