import {View, Text} from 'react-native';
import React from 'react';
import TextInputController from '../../input/TextInput/TextInputController';
import PickerInputController from '../../input/PickerInput/PickerInputController';
import RadioButtonController from '../../input/RadioButtons/RadioButtonController';
import DateInputController from '../../input/DateInput/DateInputeController';

interface itemInterface {
  item: {
    name: string;
    placeholder: string;
    inputType: string;
    pickerOptions: Array<string>;
    radioOptions: Array<object>;
  };
  control: object;
  errors: {
    email: {
      message: string;
    };
  };
  setValue: Function;
}

const CitationItem = ({item, control, errors, setValue}: itemInterface) => {
  if (item?.inputType && item.inputType === 'picker') {
    return (
      <PickerInputController
        headerTitle={item.placeholder}
        name={item.name}
        control={control}
        setValue={setValue}
        defaultValue={item.pickerOptions[0]}
        pickerOptions={item.pickerOptions}
      />
    );
  }

  if (item?.inputType && item.inputType === 'radio') {
    return (
      <RadioButtonController
        headerTitle={item.placeholder}
        name={item.name}
        control={control}
        options={item.radioOptions}
        errorMessage={errors?.item.name?.message}
      />
    );
  }

  if (item?.inputType && item.inputType === 'date') {
    return (
      <DateInputController
        headerTitle={item.placeholder}
        name={item.name}
        control={control}
        errorMessage={errors?.item.name?.message}
        display={'default'}
      />
    );
  }

  return (
    <TextInputController
      headerTitle={item.placeholder}
      control={control}
      name={item.name}
      placeholder={item.placeholder}
      errorMessage={errors?.item.name?.messagee}
      errorStyle={{color: 'red'}}
    />
  );
};

export default CitationItem;
