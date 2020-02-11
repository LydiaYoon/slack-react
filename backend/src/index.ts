import { GraphQLServer, PubSub } from "graphql-yoga";
import connection from "./ormConfig";
import schema from "./schema";

// Web socket
const pubSub = new PubSub(); // PubSub : graphQL에서 웹 소켓 역할

// graphQL Server (Web socket을 내장)
const server = new GraphQLServer({ schema, context: { pubSub } });
/*
front -> server (localhost:4000)

Query, Mutation (Server)
graphql.interpark.com

Subscription (Pubsub)
ws.interpark.com

Pubsub이 요청을 알아서 해석해서 Server/Pubsub 분기 처리
*/

connection.then(() =>
  server.start(() =>
    console.log("My First GraphQL Server is running on localhost:4000")
  )
);

