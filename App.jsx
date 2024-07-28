import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import store from "./redux/app-store";
// Pages
import LandingPage from "./Pages/LandingPage/LandingPage";
import PoetryPage from "./Pages/PoetryPage/PoetryPage";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingPage">
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="PoetryPage">
          <PoetryPage/>
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function Main() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}