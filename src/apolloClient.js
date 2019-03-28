import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://movieql.now.sh"
  // 연결할 API 주소
});

export default client;
