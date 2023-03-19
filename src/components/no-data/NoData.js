/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';

const NoData = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 18, fontFamily: 'courier', fontWeight: 'bold'}}>No available data</Text>
    </View>
  );
};

export default NoData;
