import {Input, Text} from '@rneui/themed';
import {View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Controller} from 'react-hook-form';
import {Icon} from '@rneui/themed';
import {TextInputInterface} from './TextInputInterface';

import TextInputStyles from './TextInputStyles';

const TextInputController = ({
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

  return (
    <Controller
      name={name}
      control={control}
      render={({field: {onChange, value}}) => {
        return (
          <View style={{width: '100%'}}>
            {/* header title for personal info */}
            {headerTitle ? (
              <Text style={[TextInputStyles.header, headerStyles]}>{headerTitle}</Text>
            ) : null}

            <View>
              <Input
                autoCapitalize={autoCapitalize}
                autoComplete="off"
                allowFontScaling={false}
                onChangeText={value => onChange(value)}
                secureTextEntry={show}
                defaultValue={defaultValue}
                value={value}
                placeholder={placeholder ?? null}
                editable={editable}
                keyboardType={keyboardType}
                maxLength={maxLength}
                multiline={multiline}
                numberOfLines={numberOfLines}
                errorStyle={errorStyle}
                errorMessage={errorMessage}
                leftIcon={
                  leftIcon ? <Icon name={leftIcon} size={40} /> : undefined
                }
                rightIcon={
                  secureTextEntry ? (
                    <TouchableOpacity onPress={() => setShow(!show)}>
                      <Icon
                        name={show ? rightIconShow : rightIconHide}
                        size={40}
                      />
                    </TouchableOpacity>
                  ) : undefined
                }
                style={[TextInputStyles.inputStyle, inputStyle]}
              />
            </View>
          </View>
        );
      }}
    />
  );
};

export default TextInputController;
