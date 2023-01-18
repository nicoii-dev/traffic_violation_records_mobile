import {Text, View} from 'react-native';
import React from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import Toast from 'react-native-simple-toast';
import { useStorage } from '../../../library/storage/Storage';
import { USER } from '../../../library/contants';

// schema
import {loginSchema} from '../../../library/yup-schema/loginSchema';
// components
import TextInputController from '../../input/TextInput/TextInputController';
import ButtonComponent from '../../input/Buttons/ButtonComponent';

const LoginComponent = () => {
  const navigation = useNavigation();

  const defaultValues = {
    email: 'admin@admin.com',
    password: 'Default123',
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

  const onSubmit = async (data: object) => {
    await axios.post('http://127.0.0.1:8000/api/login', {
      email: data.email,
      password: data.password
    })
    .then(async response =>{
      console.log(response.data);
      await useStorage.setItem(USER.ACCESS_TOKEN, response.data.token);
      await useStorage.setItem('USER_DATA', response.data.user);
      navigation.navigate('UserTab')
    })
    .catch(function (error) {
      console.log(error.response.data.message);
      Toast.showWithGravity(error.response.data.message, Toast.LONG, Toast.CENTER);
    });

  };
  // navigation.navigate('UserTab')
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
