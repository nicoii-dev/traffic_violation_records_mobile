/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {
  //heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const SplashStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: wp('70%'),
    width: wp('70%'),
    borderRadius: 300,
  },
});

export default SplashStyles;
