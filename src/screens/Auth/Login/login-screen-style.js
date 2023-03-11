import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const LoginScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#0A2647'
  },
  formWrapper: {
    height: hp('60%'),
    width: wp('85%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: 'white',
  },
  signinContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(7)
  },
  logo: {
    height: wp(40),
    width: wp(40),
    borderRadius: 200,
    top: hp(8),
    zIndex: 99,
  },
  signinText: {
    top: 10,
    fontSize: 20,
    fontFamily: 'Manrope-Bold',
  },
  formContainer: {
    flex: 1,
    width: wp('70%'),
  },
  signupContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    bottom: 20,
  },
  dontHaveAccountText: {
    fontFamily: 'Manrope-Regular',
  },
  signupText: {
    fontFamily: 'Manrope-Bold',
  },
});

export default LoginScreenStyles;
