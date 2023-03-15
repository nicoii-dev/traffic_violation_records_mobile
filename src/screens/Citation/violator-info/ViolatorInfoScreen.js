/* eslint-disable prettier/prettier */
import {View, Text, Pressable, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {Icon} from '@rneui/themed';

// components
import HeaderComponent from '../../../components/header/HeaderComponent';
import CitationComponent from '../../../components/screens/citation/CitationComponent';

const ViolatorInfoScreen = () => {
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
            Driver's Information
          </Text>
        </View>
      </HeaderComponent>
      <CitationComponent />
    </SafeAreaView>
  );
};

export default ViolatorInfoScreen;
