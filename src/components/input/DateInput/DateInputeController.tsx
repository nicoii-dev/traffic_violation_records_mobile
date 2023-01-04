/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Controller} from 'react-hook-form';
import DateTimePicker from '@react-native-community/datetimepicker';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import {DateInputInterface} from './DateInputInterface';

const DateInputController = ({
  name,
  control,
  rules,
  styles,
  headerTitle,
  headerStyles,
  display,
  disabled,
  errorMessage,
  errorStyle,
}: DateInputInterface) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({field: {onChange, value}}) => {
          const hanleOnDateChange = (
            event: any,
            selectedDate: Date | undefined,
          ) => {
            onChange(selectedDate);
            setShow(!show);
          };

          return (
            <View>
              {headerTitle ? (
                <Text style={[{fontSize: 18, width: '95%', fontFamily: 'Manrope-Regular', color:'black', alignSelf: 'center'}, headerStyles]}>
                  {headerTitle}
                </Text>
              ) : null}

                {show && (
                  <RNDateTimePicker
                    testID="dateTimePicker"
                    value={value ? new Date(value) : new Date()}
                    mode={'date'}
                    display={display}
                    onChange={hanleOnDateChange}
                    maximumDate={new Date()}
                    style={{}}
                  />
                )}
                {!show && (
                  <TouchableOpacity
                  style={{marginLeft: 10}}
                    disabled={disabled}
                    onPress={() => {
                      setShow(true);
                    }}>
                    <Text style={{fontSize: 18, marginBottom: 15}}>{moment(value).format('MM/DD/YYYY')}</Text>
                  </TouchableOpacity>
                )}
          
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

export default DateInputController;
