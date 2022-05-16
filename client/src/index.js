import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// 1
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client';

// 2
const httpLink = createHttpLink({
  uri: 'https://ap-south-1.aws.realm.mongodb.com/api/client/v2.0/app/covidstats-dimtt/graphql'
});

// 3
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

// 4
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
 