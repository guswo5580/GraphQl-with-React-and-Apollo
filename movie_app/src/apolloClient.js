import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
    uri : "http://localhost:4000/"
    //내가 이용하는 graphql에 대한 url 정보 
});

export default client;