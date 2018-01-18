import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, createNetworkInterface } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';

import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';

const client = new ApolloClient({
  networkInterface: createNetworkInterface('https://api.graph.cool/simple/v1/swapi'),
  cache: new InMemoryCache(),
});

const App = (
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>
);

ReactDOM.render(App, document.getElementById('root'));
registerServiceWorker();
