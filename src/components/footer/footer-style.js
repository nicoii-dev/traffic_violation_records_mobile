import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  //heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { COLORS } from '../../config/colors';

const FooterStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontFamily: 'Manrope-Regular',
    fontSize: 30,
    color: 'white',
    marginLeft: 40,
  },
  formContainer: {
    marginTop: 20,
    width: wp('95%'),
    justifyContent: 'center',
    alignSelf: 'center',
  },
  arrowContainer: {
    right: wp('10%'),
    position: 'absolute',
    flexDirection: 'row',
  },
  buttonContainer: {
    width: wp('30%'),
    left: wp('10%'),
    position: 'absolute',
  },
});

export default FooterStyles;
