import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const CitedViolationsStyles = StyleSheet.create({
  container: {
    height: hp('5%'),
    width: '100%',
    borderWidth: 1,
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  citedViolationText: {
    fontFamily: 'Manrope-Regular',
    fontSize: 16,
    color: 'black',
    paddingRight: 10
  }
  
});

export default CitedViolationsStyles;
