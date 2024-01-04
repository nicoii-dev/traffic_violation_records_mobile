/* eslint-disable prettier/prettier */
import React, {useState, useEffect, useCallback} from 'react';
import {BackHandler} from 'react-native';
import Toast from 'react-native-simple-toast';
import {createStackNavigator} from '@react-navigation/stack';

// screens

// stack components
import CitationScreen from '../../screens/Citation/CitationScreen';
import CitationInfoScreen from '../../screens/Citation/citation-info/CitationInfoScreen';

// stack instance
const CitationInfo = createStackNavigator();

export default () => {
  return (
    <>
      <CitationInfo.Navigator
        screenOptions={{gestureEnabled: false}}
        initialRouteName="CitationScreen">
        <CitationInfo.Screen
          name="CitationScreen"
          component={CitationScreen}
          options={{headerShown: false}}
        />
        <CitationInfo.Screen
          name="CitationInfoScreen"
          component={CitationInfoScreen}
          options={{
            headerShown: false,
          }}
        />
      </CitationInfo.Navigator>
    </>
  );
};
