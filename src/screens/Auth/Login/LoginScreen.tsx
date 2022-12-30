import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

// styles
import LoginScreenStyles from './login-screen-style';

// components
import LoginComponent from '../../../components/auth/login/LoginComponent';

const LoginScreen = ({navigation}) => {

  return (
    <View style={LoginScreenStyles.container}>
      <View style={LoginScreenStyles.signinContainer}>
        {/* <FastImage
          source={settings.logo ? {uri: settings.logo} : IMAGES.SPACE}
          style={LoginScreenStyles.logo}
        /> */}
        <Text style={LoginScreenStyles.signinText}>Log in to Continue</Text>
      </View>
      <View style={LoginScreenStyles.formContainer}>
        <LoginComponent />
      </View>
      <View style={LoginScreenStyles.signupContainer}>
        <Text style={LoginScreenStyles.dontHaveAccountText}>
          {`Don't have account?`}
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SignupScreen');
          }}>
          <Text style={LoginScreenStyles.signupText}> Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
