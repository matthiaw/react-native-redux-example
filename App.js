import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AppNavigation from './src/Navigation';
import { Constants, ScreenOrientation } from 'expo';

ScreenOrientation.allow(ScreenOrientation.Orientation.ALL);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    );
  }
}
