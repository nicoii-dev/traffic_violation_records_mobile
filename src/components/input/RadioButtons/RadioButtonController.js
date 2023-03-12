/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Controller} from 'react-hook-form';
import { COLORS } from '../../../config/colors';

const RadioButtonController = ({
  name,
  control,
  rules,
  options,
  disabled,
  radioButtonTextStyle,
  errorMessage,
  errorStyle,
  headerTitle,
  headerStyles,
}) => {
  const [isSelected, setIsSelected] = useState(options);

  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({field: {onChange, value}}) => {
          const onRadioBtnClick = (item) => {
            let updatedState = options.map((isLikedItem) =>
              isLikedItem.id === item.id
                ? {...isLikedItem, selected: true}
                : {...isLikedItem, selected: false},
            );
            setIsSelected(updatedState);
            onChange(item.value);
          };
          return (
            <View
              style={[
                {flexDirection: 'row', alignItems: 'center', marginBottom: 15, marginLeft: 10},
              ]}>
              {headerTitle ? (
                <Text style={[{fontSize: 18, fontFamily: 'Manrope-Regular', marginRight: 20, color: 'black'}, headerStyles]}>
                  {headerTitle}
                </Text>
              ) : null}
              {isSelected.map((item, index) => (
                <React.Fragment key={index}>
                  <TouchableOpacity
                    disabled={disabled}
                    onPress={() => {
                      onRadioBtnClick(item);
                    }}
                    style={[
                      {
                        height: 20,
                        width: 20,
                        backgroundColor: '#F8F8F8',
                        borderRadius: 10,
                        borderWidth: 1,
                        borderColor: '#E6E6E6',
                        alignItems: 'center',
                        justifyContent: 'center',
                      },
                    ]}>
                    {item.selected ? (
                      <View
                        style={[
                          {
                            height: 14,
                            width: 14,
                            borderRadius: 7,
                            backgroundColor: COLORS.BLUE,
                          },
                        ]}
                      />
                    ) : null}
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      onRadioBtnClick(item);
                    }}
                    disabled={disabled}
                    style={{marginRight: 20}}
                    >
                    <Text
                      style={[
                        {fontSize: 18, marginLeft: 5, color: 'black'},
                        radioButtonTextStyle,
                      ]}>
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                </React.Fragment>
              ))}
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

export default RadioButtonController;
