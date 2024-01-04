/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import { COLORS } from '../../config/colors';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import { HeaderInterface } from './HeaderInterface';

const HeaderComponent = ({height, children}) => {
  return (
    <View
      style={{
        width: wp('100%'),
        height: height ? height : 100,
        backgroundColor: COLORS.NAVY,
        justifyContent: 'center',
      }}>
      {children}
    </View>
  );
};

export default HeaderComponent;

