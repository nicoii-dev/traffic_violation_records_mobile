/* eslint-disable react/no-children-prop */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { COLORS } from '../../config/colors';

import { UserTabs } from '../../config/images/tabs';

// bottomTabNav instance
const UserNavTab = createBottomTabNavigator();

const UserTab = () => {

  return (
    <>
      <UserNavTab.Navigator
        initialRouteName="citation"
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
        //   if (name !== 'Explore') {
        //     if (!user) {
        //       return (
        //         <UserNavTab.Screen
        //           key={index}
        //           name={name}
        //           children={() => <Unauthorized tabTitle={name} />}
        //         />
        //       );
        //     }
        //   }

          return (
            <UserNavTab.Screen
              key={index}
              name={name}
              component={component}
            //   options={({route}) => ({
            //     tabBarStyle: getTabBarStyle(route),
            //     ...(name === 'Inbox' &&
            //       notifications?.unReadCount && {
            //         tabBarBadge: notifications.unReadCount,
            //       }),
            //   })}
            />
          );
        })}
      </UserNavTab.Navigator>
    </>
  );
};

export default UserTab;
