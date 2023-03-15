/* eslint-disable prettier/prettier */
import React, {useState, useEffect, useCallback} from 'react';
import {BackHandler} from 'react-native';
import Toast from 'react-native-simple-toast';
import {createStackNavigator} from '@react-navigation/stack';

// screens

// stack components
import CitationScreen from '../../screens/Citation/CitationScreen';
import CitedViolationScreen from '../../screens/Citation/violation/CitedViolationScreen';
import ViolatorInfoScreen from '../../screens/Citation/violator-info/ViolatorInfoScreen';
import LicenseInfoScreen from '../../screens/Citation/license-info/LicenseInfoScreen';
import VehiclesInfoScreen from '../../screens/Citation/vehicles-info/VehiclesInfoScreen';
import PlaceAndDateScreen from '../../screens/Citation/place-and-date/PlaceAndDateScreen';
import ConfirmationScreen from '../../screens/Citation/confirmation/ConfirmationScreen';

// stack instance
const CitationStack = createStackNavigator();

export default () => {
  return (
    <>
      <CitationStack.Navigator
        screenOptions={{gestureEnabled: false}}
        initialRouteName="CitationScreen">
        <CitationStack.Screen
          name="CitationScreen"
          component={CitationScreen}
          options={{headerShown: false}}
        />
        <CitationStack.Screen
          name="CitedViolationScreen"
          component={CitedViolationScreen}
          options={{
            headerShown: false,
          }}
        />
        <CitationStack.Screen
          name="ViolatorInfoScreen"
          component={ViolatorInfoScreen}
          options={{
            headerShown: false,
          }}
        />
        <CitationStack.Screen
          name="LicenseInfoScreen"
          component={LicenseInfoScreen}
          options={{
            headerShown: false,
          }}
        />
        <CitationStack.Screen
          name="VehiclesInfoScreen"
          component={VehiclesInfoScreen}
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
