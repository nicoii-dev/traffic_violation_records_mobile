/* eslint-disable react-native/no-inline-styles */
import {Text} from '@rneui/themed';
import {View, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import React, {useState} from 'react';
import {Controller} from 'react-hook-form';
import {PickerInputInterface} from './PickerInputInterface';
import { widthPercentageToDP } from 'react-native-responsive-screen';

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
  const [show, setShow] = useState<boolean>(true);

  return (
    <>
      <Controller
        name={name}
        control={control}
        // defaultValue={defaultValue}
        render={({field: {onChange, value}}) => {
          const handleOnChange = (itemValue: object) => {
            onChange(itemValue);
            setShow(false);
          };

          return (
            <View style={{alignItems: 'center'}}>
              {/* header title for personal info */}
              {headerTitle ? (
                <Text style={[{fontSize: 18, fontFamily: 'Manrope-Regular', width: '95%'}, headerStyles]}>
                  {headerTitle}
                </Text>
              ) : null}

              <View>
         
                  <Picker
                    enabled={enabled}
                    selectedValue={value}
                    onValueChange={handleOnChange}
                    style={{width: widthPercentageToDP('90%')}}>
                    {pickerOptions.map((option, index) => {
                      return (
                        <Picker.Item
                          label={option}
                          value={option}
                          key={index}
                          style={{fontFamily: 'Manrope-Regular'}}
                        />
                      );
                    })}
                  </Picker>
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
