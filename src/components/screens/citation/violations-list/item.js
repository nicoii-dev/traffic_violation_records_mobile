import {View, Text, TouchableOpacity, Pressable} from 'react-native';
import React, {useState} from 'react';
import {CheckBox} from '@rneui/themed';

const CitationViolationItem = ({item, SelectedViolations, citedViolations}) => {

  return (
    <>
      <View
        style={{
          alignSelf: 'flex-start',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
          width: '100%',
        }}>
        <CheckBox
          checked={citedViolations?.some(
            (violation: any) => violation === item.id,
          )}
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
            width: '80%',
            fontFamily: 'Manrope-Bold',
            fontSize: 16,
            color: 'black',
            textAlign: 'left',
          }}>
          {item.title}
        </Text>
      </View>
    </>
  );
};

export default CitationViolationItem;
