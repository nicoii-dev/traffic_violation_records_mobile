import React, {useState, useEffect, useCallback} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// screens

// stack components
import ProfileScreen from '../../screens/Profile/ProfileScreen';
import PersonalInfoScreen from '../../screens/Profile/personal-info/PersonalInfoScreen';
import SecurityScreen from '../../screens/Profile/security/SecurityScreen';
import AboutScreen from '../../screens/Profile/about/AboutScreen';

// stack instance
const ProfileStack = createStackNavigator();

export default () => {
  return (
    <>
      <ProfileStack.Navigator
        screenOptions={{gestureEnabled: false}}
        initialRouteName="ProfileScreen">
        <ProfileStack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{headerShown: false}}
        />
        <ProfileStack.Screen
          name="PersonalInfoScreen"
          component={PersonalInfoScreen}
          options={{
            headerShown: false,
          }}
        />
        <ProfileStack.Screen
          name="SecurityScreen"
          component={SecurityScreen}
          options={{headerShown: false}}
        />
        <ProfileStack.Screen
          name="AboutScreen"
          component={AboutScreen}
          options={{headerShown: false}}
        />
      </ProfileStack.Navigator>
    </>
  );
};
