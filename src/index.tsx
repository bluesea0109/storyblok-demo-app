import React from 'react';
import {ApolloProvider} from '@apollo/client';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createApolloClient} from './common/apollo-client';

import Home from './screens/Home';

const apolloClient = createApolloClient();

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <SafeAreaProvider>
        <Home />
      </SafeAreaProvider>
    </ApolloProvider>
  );
};

export default App;
