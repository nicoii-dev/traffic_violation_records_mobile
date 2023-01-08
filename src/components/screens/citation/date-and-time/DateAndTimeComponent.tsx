import {View, Text} from 'react-native';
import React from 'react';

// components
import DateInputController from '../../../input/DateInput/DateInputeController';

interface DateAndTimeComponentInterface {
  control: any;
  errors: object;
}

const DateAndTimeComponent = ({
  control,
  errors,
}: DateAndTimeComponentInterface) => {
  return (
    <View style={{flexDirection: 'row', marginTop: 30, marginBottom: 20}}>
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
            iconColor: 'gray'
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
            iconColor: 'gray'
          }}
        />
      </View>
    </View>
  );
};

export default DateAndTimeComponent;
