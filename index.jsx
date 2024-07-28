import {AppRegistry} from 'react-native';
import App from './App'; // Ensure App.js is compatible with React Native
import {name as appName} from './app.json';
import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/app-store';

// Create the main component that wraps the App with Providers
const Main = () => (
    <Provider store={store}>
      <App />
    </Provider>
);

AppRegistry.registerComponent(appName, () => Main);