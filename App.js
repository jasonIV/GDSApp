import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from "./reducers/store";
import AppNavigator from "./AppNavigator"

const store = configureStore({})

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
