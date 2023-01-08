import {View, Text} from 'react-native';
import React from 'react';
import TextInputController from '../../../input/TextInput/TextInputController';
import PickerInputController from '../../../input/PickerInput/PickerInputController';
import listOfbarangay from '../../../../assets/example-data/listOfBarangay.json';

interface PlaceOfViolationComponentInterface {
  control: any;
  errors: object;
}

const PlaceOfViolationComponent = ({
  control,
  errors,
}: PlaceOfViolationComponentInterface) => {
  return (
    <>
      <TextInputController
        headerTitle={'Municipality'}
        control={control}
        name={'municipality'}
        placeholder={'Municipality'}
        errorMessage={errors?.municipality?.message}
        errorStyle={{color: 'red'}}
        editable={false}
      />
      <TextInputController
        headerTitle={'ZIP code'}
        control={control}
        name={'zipCode'}
        placeholder={'ZIP code'}
        errorMessage={errors?.zipCode?.message}
        errorStyle={{color: 'red'}}
        keyboardType={'numeric'}
        editable={false}
      />
      <View>
        <PickerInputController
          headerTitle={'Barangay'}
          name={'barangay'}
          control={control}
          // setValue={setValue}
          // defaultValue={item.pickerOptions[0]}
          errorMessage={errors?.barangay?.message}
          pickerOptions={listOfbarangay}
          errorStyle={{color: 'red'}}
        />
      </View>
      <TextInputController
        headerTitle={'Street/Zone/Purok'}
        control={control}
        name={'street'}
        placeholder={'Street/Zone/Purok'}
        errorMessage={errors?.street?.message}
        errorStyle={{color: 'red'}}
      />
    </>
  );
};

export default PlaceOfViolationComponent;
