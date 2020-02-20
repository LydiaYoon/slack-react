import { WebSocketLink } from "apollo-link-ws";
import { HttpLink } from "apollo-link-http";
import { getMainDefinition } from "apollo-utilities";
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { split } from "apollo-link";

// Backend Endpoint 설정
const GRAPHQL_URI = "localhost:4000";

// WebSocket
const wsLink = new WebSocketLink({
  uri: `ws://${GRAPHQL_URI}`,
  option: {
    reconnect: true
  }
});

// Http
const httpLink = new HttpLink({
  uri: `http://${GRAPHQL_URI}`
});

// client가 subscription을 요청할 경우 apollo는 wsLink로 요청, 
// client가 subscription 이외의 요청을 헐 경우 apollo는 httpLink로 요청
const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === "OperationDefinition" && operation === "subscription";
  },
  wsLink,
  httpLink
);

export default new ApolloClient({
  link,
  cache: new InMemoryCache(),
  onError: ({ networkError, graphQLErrors }) => {
    console.log("graphQLErrors", graphQLErrors);
    console.log("networkError", networkError);
  }
});