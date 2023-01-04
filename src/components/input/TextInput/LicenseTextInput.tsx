import {Input, Text} from '@rneui/themed';
import {View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Controller} from 'react-hook-form';
import {Icon} from '@rneui/themed';
import {TextInputInterface} from './TextInputInterface';

import TextInputStyles from './TextInputStyles';

const LicenseTextInput = ({
  name,
  control,
  keyboardType = 'default',
  defaultValue,
  autoCapitalize = 'none',
  errorStyle,
  errorMessage,
  placeholder,
  editable = true,
  headerStyles,
  maxLength,
  multiline,
  numberOfLines,
  headerTitle,
  getValues,
  setValue,
  leftIcon,
  secureTextEntry = false,
  rightIconShow = 'visibility',
  rightIconHide = 'visibility-off',
  inputStyle,
}: TextInputInterface) => {
  const [show, setShow] = useState<boolean>(secureTextEntry);

  const [license, setLicense] = useState('');

  const normalizeInput = (value: any, previousValue: any) => {
    // return nothing if no value
    if (!value) return value; 
  
    // only allows 0-9 inputs
    const currentValue = value.replace(/[^\d]/g, '');
    const cvLength = currentValue.length; 
  
    if (!previousValue || value.length > previousValue.length) {
  
      // returns: "x", "xx", "xxx"
      if (cvLength < 4) return currentValue; 
  
      // returns: "(xxx)", "(xxx) x", "(xxx) xx", "(xxx) xxx",
      if (cvLength < 7) return `${currentValue.slice(0, 3)}-${currentValue.slice(3)}`; 
  
      // returns: "(xxx) xxx-", (xxx) xxx-x", "(xxx) xxx-xx", "(xxx) xxx-xxx", "(xxx) xxx-xxxx"
      return `${currentValue.slice(0, 3)}-${currentValue.slice(3, 5)}-${currentValue.slice(5, 11)}`; 
    }
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({field: {onChange, value}}) => {
        const handleOnChange = (itemValue: string) => {
          // making first letter of the word capital
            console.log(itemValue)
            setLicense(normalizeInput(itemValue, value))
        };

        return (
          <View style={{width: '100%', alignItems: 'center'}}>
            {/* header title for personal info */}
            {headerTitle ? (
              <Text style={[TextInputStyles.header, headerStyles]}>
                {headerTitle}
              </Text>
            ) : null}
            <Input
              autoCapitalize={autoCapitalize}
              autoComplete="off"
              allowFontScaling={false}
              onChangeText={(e) => {handleOnChange(e); onChange(e)}}
              secureTextEntry={show}
              defaultValue={defaultValue}
              value={license}
              placeholder={placeholder ?? null}
              editable={editable}
              keyboardType={keyboardType}
              maxLength={13}
              multiline={multiline}
              numberOfLines={numberOfLines}
              errorStyle={[{fontFamily: 'Manrope-Regular'}, errorStyle]}
              errorMessage={errorMessage}
              leftIcon={
                leftIcon ? <Icon name={leftIcon} size={30} /> : undefined
              }
              rightIcon={
                secureTextEntry ? (
                  <TouchableOpacity onPress={() => setShow(!show)}>
                    <Icon
                      name={show ? rightIconShow : rightIconHide}
                      size={30}
                    />
                  </TouchableOpacity>
                ) : undefined
              }
              style={[TextInputStyles.inputStyle, inputStyle]}
            />
          </View>
        );
      }}
    />
  );
};

export default LicenseTextInput;
