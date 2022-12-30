/* eslint-disable react-native/no-inline-styles */
import {Text} from '@rneui/themed';
import {View, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import React, {useState} from 'react';
import {Controller} from 'react-hook-form';
import {PickerInputInterface} from './PickerInputInterface';

const PickerInputController = ({
  name,
  control,
  defaultValue,
  headerTitle,
  styles,
  headerStyles,
  setValue,
  pickerOptions = [],
  enabled,
  errorMessage,
  errorStyle,
}: PickerInputInterface) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <>
      <Controller
        name={name}
        control={control}
        // defaultValue={defaultValue}
        render={({field: {onChange, value}}) => {
          const hanleOnDateChange = (itemValue: object) => {
            onChange(itemValue);
            setShow(false);
          };

          return (
            <View style={{width: '100%', alignItems: 'center'}}>
              {/* header title for personal info */}
              {headerTitle ? (
                <Text style={[{fontSize: 18}, headerStyles]}>
                  {headerTitle}
                </Text>
              ) : null}

              <View>
                {show && (
                  <Picker
                    enabled={enabled}
                    selectedValue={value}
                    onValueChange={hanleOnDateChange}
                    style={{...styles}}>
                    {pickerOptions.map((option, index) => {
                      return (
                        <Picker.Item
                          label={option.toString()}
                          value={option}
                          key={index}
                        />
                      );
                    })}
                  </Picker>
                )}
                {!show && (
                  <TouchableOpacity
                    onPress={() => {
                      setShow(true);
                    }}>
                    <Text>{value}</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          );
        }}
      />
      {errorMessage ? (
        <Text
          style={[{color: 'red', fontSize: 12, marginVertical: 3}, errorStyle]}>
          {errorMessage}
        </Text>
      ) : null}
    </>
  );
};

export default PickerInputController;
