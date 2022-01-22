import { registerRootComponent } from 'expo';
import React from 'react';
import UIManager from './components/global/UIManager/UIManager';
import Router from './components/navigation/Router';

const App = (): JSX.Element => (
  <UIManager>
    <Router />
  </UIManager>
);

export default registerRootComponent(App);
