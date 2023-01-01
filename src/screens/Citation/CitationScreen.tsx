import {View, Text} from 'react-native';
import React from 'react';

// components
import HeaderComponent from '../../components/header/HeaderComponent';
import CitationComponent from '../../components/citation/CitationComponent';

const CitationScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <HeaderComponent>
        <View style={{alignItems: 'center'}}>
          <Text
            style={{fontFamily: 'Manrope-Bold', fontSize: 25, color: 'white'}}>
            Traffic Citation
          </Text>
        </View>
      </HeaderComponent>
      <CitationComponent />
    </View>
  );
};

export default CitationScreen;
