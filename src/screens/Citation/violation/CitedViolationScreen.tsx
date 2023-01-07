import {View, Text} from 'react-native';
import React from 'react';
import CitationViolations from '../../../components/screens/citation/violations-list/CitationViolations';
import HeaderComponent from '../../../components/header/HeaderComponent';

const CitedViolationScreen = () => {
  return (
    <View style={{flex: 1}}>
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
            Citation Violations
          </Text>
        </View>
      </HeaderComponent>
      <CitationViolations />
    </View>
  );
};

export default CitedViolationScreen;
