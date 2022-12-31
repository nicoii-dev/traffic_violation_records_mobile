import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// stack components
import EntryStack from './stack/Entry';
// import Loader from '../components/loader';

const MainRouterStack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <MainRouterStack.Navigator>
        <MainRouterStack.Screen
          name="Entry"
          component={EntryStack}
          options={{headerShown: false}}
        />
      </MainRouterStack.Navigator>
      {/* <Loader /> */}
    </NavigationContainer>
  );
};

export default Router;
