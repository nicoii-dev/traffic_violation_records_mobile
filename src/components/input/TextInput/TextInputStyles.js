/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const TextInputStyles = StyleSheet.create({
  header: {
    fontSize: 18,
    width: '95%',
    fontFamily: 'Manrope-Regular',
  },
  inputStyle: {
    fontSize: 16,
    marginVertical: 0,
    fontFamily: 'Manrope-Regular',
    backgroundColor: '#E0E0E0',
  },
});

export default TextInputStyles;
