import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// screens

// stack components
import ListOfViolationCategoryScreen from '../../screens/List of Violations/ListOfViolationCategoryScreen';
import ListOfViolationsScreen from '../../screens/List of Violations/ListOfViolationsScreen';

// stack instance
const ViolationStack = createStackNavigator();

export default () => {
  return (
    <>
      <ViolationStack.Navigator
        screenOptions={{gestureEnabled: false}}
        initialRouteName="ViolationCategory">
        <ViolationStack.Screen
          name="ViolationCategory"
          component={ListOfViolationCategoryScreen}
          options={{headerShown: false}}
        />
        <ViolationStack.Screen
          name="Violations"
          component={ListOfViolationsScreen}
          options={{
            headerShown: false,
          }}
        />
      </ViolationStack.Navigator>
    </>
  );
};
