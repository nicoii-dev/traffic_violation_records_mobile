/* eslint-disable prettier/prettier */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import {COLORS} from '../../config/colors';

import {UserTabs} from '../../config/tabs';

// bottomTabNav instance
const UserNavTab = createBottomTabNavigator();

const UserTab = () => {

  const screenToHide = [
    'CitedViolationScreen',
    'ViolatorInfoScreen',
    'LicenseInfoScreen',
    'VehiclesInfoScreen',
    'PlaceAndDateScreen',
    'ConfirmationScreen',
  ];
    // for hiding tabBarNav in specific screen
    const getTabBarStyle = route => {
      const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
      let display = screenToHide.find(screen => screen === routeName)
        ? 'none'
        : 'flex';
      return {display};
    };

  return (
    <>
      <UserNavTab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarItemStyle: {borderTopWidth: 1, borderBottomWidth: 1},
          tabBarIcon: ({color, size}) => {
            let Tab = UserTabs.find(tab => tab.name === route.name);

            // You can return any component that you like here!
            return <Icon name={Tab.iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: COLORS.NAVY,
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
          tabBarHideOnKeyboard: true,
        })}>
        {UserTabs.map(({name, component}, index) => {
          return (
            <UserNavTab.Screen
              key={index}
              name={name}
              component={component}
                options={({route}) => ({
                  tabBarStyle: getTabBarStyle(route),
                })}
            />
          );
        })}
      </UserNavTab.Navigator>
    </>
  );
};

export default UserTab;
