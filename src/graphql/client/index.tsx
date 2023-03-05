import {ApolloClient, InMemoryCache} from '@apollo/client';

// initialize a GraphQL client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
});

export default client;
