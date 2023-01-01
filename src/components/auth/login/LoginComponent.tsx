import {Text, View} from 'react-native';
import React from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

// schema
import {loginSchema} from '../../../library/yup-schema/loginSchema';
// components
import TextInputController from '../../input/TextInput/TextInputController';
import ButtonComponent from '../../input/Buttons/ButtonComponent';

const LoginComponent = () => {

  const navigation = useNavigation();

  const defaultValues = {
    email: 'example@gmail.com',
    password: '111111',
  };

  const {
    control,
    setValue,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: defaultValues,
  });

  const onSubmit = (data: object) => {
    console.log(data);
    navigation.navigate('UserTab')
  };
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <TextInputController
        control={control}
        name={'email'}
        placeholder={'email'}
        errorMessage={errors.email?.message}
        errorStyle={{color: 'red'}}
      />
      <TextInputController
        control={control}
        name={'password'}
        placeholder={'password'}
        secureTextEntry={true}
        errorMessage={errors.password?.message}
        errorStyle={{color: 'red'}}
      />
      <View style={{marginTop: heightPercentageToDP(10)}}>
        <ButtonComponent
          onPress={handleSubmit(onSubmit)}
          color="#2C74B3"
          size="lg"
          styles={{}}>
          <Text style={{color: 'white', fontFamily: 'Manrope-Bold'}}>
            Sign in
          </Text>
        </ButtonComponent>
      </View>
    </View>
  );
};

export default LoginComponent;
