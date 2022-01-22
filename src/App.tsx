import { ApolloProvider } from '@apollo/client';
import { registerRootComponent } from 'expo';
import React from 'react';
import client from './api/Client';
import UIManager from './components/global/UIManager/UIManager';
import Router from './components/navigation/Router';

const App = (): JSX.Element => (
  <ApolloProvider client={client}>
    <UIManager>
      <Router />
    </UIManager>
  </ApolloProvider>
);

export default registerRootComponent(App);
