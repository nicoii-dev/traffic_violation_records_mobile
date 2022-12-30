/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Controller} from 'react-hook-form';
import DateTimePicker from '@react-native-community/datetimepicker';
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
                <Text style={[{fontSize: 18}, headerStyles]}>
                  {headerTitle}
                </Text>
              ) : null}

              <View>
                {show && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={value ? new Date(value) : new Date()}
                    mode={'date'}
                    display={display}
                    onChange={hanleOnDateChange}
                    style={{...styles}}
                  />
                )}
                {!show && (
                  <TouchableOpacity
                    disabled={disabled}
                    onPress={() => {
                      setShow(true);
                    }}>
                    <Text>{moment(value).format('MM/DD/YYYY')}</Text>
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

export default DateInputController;
