/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigation} from '@react-navigation/native';
import TextInputController from '../../../input/TextInput/TextInputController';
import PickerInputController from '../../../input/PickerInput/PickerInputController';
import DateInputController from '../../../input/DateInput/DateInputeController';

const PersonalInfoComponent = ({control, errors}) => {
  const navigation = useNavigation();

  return (
    <>
      <TextInputController
        headerTitle={'First name'}
        control={control}
        name={'firstName'}
        placeholder={'First name'}
        errorMessage={errors?.firstName?.message}
        errorStyle={{color: 'red'}}
      />
      <TextInputController
        headerTitle={'Middle name'}
        control={control}
        name={'middleName'}
        placeholder={'Middle name'}
        errorMessage={errors?.middleName?.message}
        errorStyle={{color: 'red'}}
      />
      <TextInputController
        headerTitle={'Last name'}
        control={control}
        name={'lastName'}
        placeholder={'Last name'}
        errorMessage={errors?.lastName?.message}
        errorStyle={{color: 'red'}}
      />
      <View>
        <PickerInputController
          headerTitle={'Gender'}
          name={'gender'}
          control={control}
          errorMessage={errors?.gender?.message}
          errorStyle={{color: 'red', width: '95%', alignSelf: 'center'}}
          pickerOptions={['Male', 'Female']}
          headerStyles={{width: '95%'}}
        />
      </View>
      <TextInputController
        headerTitle={'Phone number'}
        control={control}
        name={'phoneNumber'}
        placeholder={'Phone number'}
        errorMessage={errors?.phoneNumber?.message}
        errorStyle={{color: 'red'}}
        keyboardType={'numeric'}
      />
      <View>
        <DateInputController
          headerTitle={'Date of birth'}
          name={'dob'}
          control={control}
          errorMessage={errors?.dob?.message}
          display={'default'}
          mode={'date'}
        />
      </View>
    </>
  );
};

export default PersonalInfoComponent;
