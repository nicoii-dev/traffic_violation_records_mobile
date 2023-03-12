/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';

// components
import HeaderComponent from '../../../components/header/HeaderComponent';
import ConfirmationComponent from '../../../components/screens/citation/confirmation/ConfirmationComponent';

const ConfirmationScreen = () => {
  const {citedViolations, driversInfo, citationDetails} = useSelector(store => store.citation);
  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
      <HeaderComponent>
        <View
          style={{
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontFamily: 'Manrope-Bold',
              fontSize: 25,
              color: 'white',
              textAlign: 'center',
            }}>
            Confirmation
          </Text>
        </View>
      </HeaderComponent>

      <ConfirmationComponent />
    </SafeAreaView>
  );
};

export default ConfirmationScreen;
