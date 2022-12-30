import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const LoginScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    alignSelf: 'center',
    height: hp('95%'),
  },
  signinContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: wp(40),
    width: wp(40),
    borderRadius: 200,
    marginTop: hp(5),
  },
  signinText: {
    top: 10,
    fontSize: 20,
    fontFamily: 'Manrope-Bold',
  },
  formContainer: {
    flex: 1,
    marginTop: -wp(30),
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
