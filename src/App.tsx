import { registerRootComponent } from 'expo';
import React from 'react';
import Router from './components/navigation/Router';

const App = (): JSX.Element => <Router />;

export default registerRootComponent(App);
