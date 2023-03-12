import {View, Text} from 'react-native';
import React from 'react';
import TextInputController from '../../input/TextInput/TextInputController';
import PickerInputController from '../../input/PickerInput/PickerInputController';
import RadioButtonController from '../../input/RadioButtons/RadioButtonController';
import DateInputController from '../../input/DateInput/DateInputeController';
import LicenseTextInput from '../../input/TextInput/LicenseTextInput';

const CitationItem = ({item, control, errors, setValue}) => {
  if (item?.inputType && item.inputType === 'picker') {
    return (
      <PickerInputController
        headerTitle={item.header}
        name={item.name}
        control={control}
        setValue={setValue}
        defaultValue={item.pickerOptions[0]}
        pickerOptions={item.pickerOptions}
        headerStyles={{width: '95%'}}
      />
    );
  }

  if (item?.inputType && item.inputType === 'radio') {
    return (
      <RadioButtonController
        headerTitle={item.header}
        name={item.name}
        control={control}
        options={item.radioOptions}
        errorMessage={errors[item.name]?.message}
      />
    );
  }

  if (item?.inputType && item.inputType === 'date') {
    return (
      <DateInputController
        headerTitle={item.header}
        name={item.name}
        control={control}
        errorMessage={errors[item.name]?.message}
        display={'default'}
        mode={'date'}
      />
    );
  }

  if (item?.inputType && item.inputType === 'license') {
    return (
      <LicenseTextInput
        headerTitle={item.header}
        control={control}
        name={item.name}
        placeholder={item.placeholder}
        errorMessage={errors[item.name]?.message}
        errorStyle={{color: 'red'}}
        keyboardType={item.keyboardType}
      />
    );
  }

  return (
    <TextInputController
      headerTitle={item.header}
      control={control}
      name={item.name}
      placeholder={item.placeholder}
      errorMessage={errors[item.name]?.message}
      errorStyle={{color: 'red'}}
      keyboardType={item.keyboardType}
      maxLength={item.maxLength}
    />
  );
};

export default CitationItem;
