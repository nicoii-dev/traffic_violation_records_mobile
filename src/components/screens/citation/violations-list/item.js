/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React from 'react';
import {CheckBox} from '@rneui/themed';

const CitationViolationItem = ({item, SelectedViolations, citedViolations}) => {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginTop: 0,
          width: '100%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 20,
          }}>
          <CheckBox
            checked={citedViolations?.some(violation => violation === item.id)}
            onPress={() => {
              SelectedViolations(item.id);
            }}
            iconType="material-community"
            checkedIcon="checkbox-outline"
            uncheckedIcon={'checkbox-blank-outline'}
            containerStyle={{backgroundColor: '#efefef'}}
          />
          <Text
            style={{
              fontFamily: 'Manrope-Bold',
              fontSize: 16,
              color: 'black',
              textAlign: 'left',
            }}>
            {item.violation_name}
          </Text>
        </View>

        <Text
          style={{
            fontFamily: 'Manrope-Bold',
            fontSize: 16,
            color: 'black',
            textAlign: 'left',
            marginLeft: 30,
          }}>
          {`₱${parseInt(item.penalty, 10).toFixed(2)}`}
        </Text>
      </View>
    </>
  );
};

export default CitationViolationItem;
