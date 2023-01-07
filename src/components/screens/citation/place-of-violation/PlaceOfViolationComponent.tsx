import {View, Text} from 'react-native';
import React from 'react';
import TextInputController from '../../../input/TextInput/TextInputController';

interface PlaceOfViolationComponentInterface {
    control: any;
    errors: object;
}

const PlaceOfViolationComponent = ({control, errors}: PlaceOfViolationComponentInterface) => {
  return (
    <>
      <TextInputController
        headerTitle={'Street'}
        control={control}
        name={'street'}
        placeholder={'Street'}
        errorMessage={errors?.street?.message}
        errorStyle={{color: 'red'}}
      />
      <TextInputController
        headerTitle={'Municipality'}
        control={control}
        name={'municipality'}
        placeholder={'Municipality'}
        errorMessage={errors?.municipality?.message}
        errorStyle={{color: 'red'}}
      />
      <TextInputController
        headerTitle={'City'}
        control={control}
        name={'city'}
        placeholder={'City'}
        errorMessage={errors?.city?.message}
        errorStyle={{color: 'red'}}
      />
      <TextInputController
        headerTitle={'ZIP code'}
        control={control}
        name={'zipCode'}
        placeholder={'ZIP code'}
        errorMessage={errors?.zipCode?.message}
        errorStyle={{color: 'red'}}
      />
    </>
  );
};

export default PlaceOfViolationComponent;
