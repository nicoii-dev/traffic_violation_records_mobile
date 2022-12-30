import {Text, View} from 'react-native';
import React from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import { loginSchema } from '../../../library/yup-schema/loginSchema';
import TextInputController from '../../input/TextInput/TextInputController';
import ButtonComponent from '../../input/Buttons/ButtonComponent';

const LoginComponent = () => {
  const defaultValues = {
    email: 'sss@gmail.com',
    password: 'password',
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
  };
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <TextInputController
        control={control}
        name={'email'}
        placeholder={'email'}
        errorMessage={errors.email?.message}
        errorStyle={{color: 'red'}}
        setValue={setValue}
      />
      <TextInputController
        control={control}
        name={'password'}
        placeholder={'password'}
        secureTextEntry={true}
        errorMessage={errors.password?.message}
        errorStyle={{color: 'red'}}
      />
      <ButtonComponent
        onPress={handleSubmit(onSubmit)}
        color="warning"
        styles={{width: '50%', alignSelf: 'center'}}>
        <Text>Click me</Text>
      </ButtonComponent>
    </View>
  );
};

export default LoginComponent;
