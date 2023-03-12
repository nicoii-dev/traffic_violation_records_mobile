/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// screens

// stack components
import HomeScreen from '../../screens/Home/HomeScreen';
import ViolatorDetails from '../../screens/Home/ViolatorDetails';

// stack instance
const HomeScreenStack = createStackNavigator();

export default () => {
  return (
    <>
      <HomeScreenStack.Navigator
        screenOptions={{gestureEnabled: false}}
        initialRouteName="HomeScreen">
        <HomeScreenStack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <HomeScreenStack.Screen
          name="ViolatorDetails"
          component={ViolatorDetails}
          options={{
            headerShown: false,
          }}
        />
      </HomeScreenStack.Navigator>
    </>
  );
};
