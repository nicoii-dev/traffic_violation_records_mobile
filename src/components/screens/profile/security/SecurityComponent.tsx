import {View, Text} from 'react-native';
import React from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigation} from '@react-navigation/native';
import TextInputController from '../../../input/TextInput/TextInputController';
import PickerInputController from '../../../input/PickerInput/PickerInputController';
import DateInputController from '../../../input/DateInput/DateInputeController';

interface SecurityComponentInterface {
  control: any;
  errors: object;
}

const SecurityComponent = ({
  control,
  errors,
}: SecurityComponentInterface) => {
  const navigation = useNavigation();

  return (
    <>
      <TextInputController
        headerTitle={'Current password'}
        control={control}
        name={'currentPassword'}
        placeholder={'Current password'}
        errorMessage={errors?.currentPassword?.message}
        errorStyle={{color: 'red'}}
      />
      <TextInputController
        headerTitle={'New password'}
        control={control}
        name={'newPassword'}
        placeholder={'New password'}
        errorMessage={errors?.newPassword?.message}
        errorStyle={{color: 'red'}}
      />
      <TextInputController
        headerTitle={'Confirm password'}
        control={control}
        name={'confirmPassword'}
        placeholder={'Confirm password'}
        errorMessage={errors?.confirmPassword?.message}
        errorStyle={{color: 'red'}}
      />
     
    </>
  );
};

export default SecurityComponent;
