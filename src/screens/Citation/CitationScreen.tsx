import {View, Text, Pressable, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {Icon} from '@rneui/themed';

// components
import HeaderComponent from '../../components/header/HeaderComponent';
import CitationComponent from '../../components/screens/citation/CitationComponent';
import CitationViolations from '../../components/screens/citation/violations-list/CitationViolations';

const CitationScreen = () => {

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
            Traffic Citation
          </Text>
        </View>
      </HeaderComponent>
      <CitationComponent />
    </SafeAreaView>
  );
};

export default CitationScreen;
