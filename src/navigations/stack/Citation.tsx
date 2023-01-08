import React, {useState, useEffect, useCallback} from 'react';
import {BackHandler} from 'react-native';
import Toast from 'react-native-simple-toast';
import {createStackNavigator} from '@react-navigation/stack';

// screens

// stack components
import CitationScreen from '../../screens/Citation/CitationScreen';
import CitedViolationScreen from '../../screens/Citation/violation/CitedViolationScreen';
import PlaceAndDateScreen from '../../screens/Citation/place-and-date/PlaceAndDateScreen';
import CitationMap from '../../screens/Citation/map/CitationMap';
import ConfirmationScreen from '../../screens/Citation/confirmation/ConfirmationScreen';

// stack instance
const CitationStack = createStackNavigator();

export default () => {
  return (
    <>
      <CitationStack.Navigator
        screenOptions={{gestureEnabled: false}}
        initialRouteName="CitedViolationScreen">
        <CitationStack.Screen
          name="CitedViolationScreen"
          component={CitedViolationScreen}
          options={{headerShown: false}}
        />
        <CitationStack.Screen
          name="CitationScreen"
          component={CitationScreen}
          options={{
            headerShown: false,
          }}
        />
        <CitationStack.Screen
          name="PlaceAndDateScreen"
          component={PlaceAndDateScreen}
          options={{headerShown: false}}
        />
        <CitationStack.Screen
          name="ConfirmationScreen"
          component={ConfirmationScreen}
          options={{headerShown: false}}
        />
      </CitationStack.Navigator>
    </>
  );
};
