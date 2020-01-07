import { GraphQLServer } from "graphql-yoga";

// 인자값과 리턴되는 값의 타입을 지정
const typeDefs = `
type Query{
  sayHello: String!
}
`;
// GraphQL : Query, Mutation, Subscribe
const resolvers = {
  Query: {
    sayHello: () => "Hi there 🙂"
  }
};

const server = new GraphQLServer({ typeDefs, resolvers });

server.start(() =>
  console.log("My First GraphQL Server is running on localhost:4000")
);