/* eslint-disable prettier/prettier */
import {Text, View} from 'react-native';
import React from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import _ from 'lodash';
// api
import {UserLogin} from '../../../services/userApi';
// schema
import {loginSchema} from '../../../library/yup-schema/loginSchema';
// components
import TextInputController from '../../input/TextInput/TextInputController';
import ButtonComponent from '../../input/Buttons/ButtonComponent';
// store
import {loadingStart, loadingFinish} from '../../../store/loader/reducers';

const LoginComponent = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const defaultValues = {
    email: '',
    password: '',
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

  const onSubmit = async data => {
    dispatch(loadingStart());
    const response = await UserLogin(data);
    dispatch(loadingFinish());
    if (!_.isUndefined(response)) {
      return navigation.navigate('UserTab');
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <TextInputController
        control={control}
        name={'email'}
        placeholder={'Email'}
        errorMessage={errors.email?.message}
        errorStyle={{color: 'red'}}
      />
      <TextInputController
        control={control}
        name={'password'}
        placeholder={'Password'}
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
