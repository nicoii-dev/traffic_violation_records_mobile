/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';

// components
import DateInputController from '../../../input/DateInput/DateInputeController';
import TextInputController from '../../../input/TextInput/TextInputController';

const DateAndTimeComponent = ({control, errors}) => {
  return (
    <View style={{flexDirection: 'row', marginTop: 30, marginBottom: 20}}>
      <TextInputController
        headerTitle={'TCT No.'}
        control={control}
        name={'tct'}
        placeholder={'TCT No.'}
        errorMessage={errors?.tct?.message}
        errorStyle={{color: 'red'}}
        editable={false}
      />
      <View style={{width: '45%'}}>
        <DateInputController
          headerTitle={'Date of Violation'}
          name={'violationDate'}
          control={control}
          errorMessage={errors?.violationDate?.message}
          display={'default'}
          mode={'date'}
          iconData={{
            iconName: 'date-range',
            iconSize: 25,
            iconColor: 'gray',
          }}
        />
      </View>
      <View style={{width: '45%', alignSelf: 'center'}}>
        <DateInputController
          headerTitle={'Time of Violation'}
          name={'violationTime'}
          control={control}
          errorMessage={errors?.violationTime?.message}
          display={'default'}
          mode={'time'}
          iconData={{
            iconName: 'access-time',
            iconSize: 25,
            iconColor: 'gray',
          }}
        />
      </View>
    </View>
  );
};

export default DateAndTimeComponent;
