import React, { useMemo } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import HomePage from './HomePage';

const App = () =>  {
  // const [headers] = useApiAuthorization(CLIENT_ID);
  const client = useMemo(() =>  new ApolloClient({ uri: 'https://graphql.anilist.co' }), []);

  return (
    <ApolloProvider client={client}>
      <HomePage />
    </ApolloProvider>
  );
}

export default App;
