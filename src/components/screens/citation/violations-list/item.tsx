import {View, Text, TouchableOpacity, Pressable} from 'react-native';
import React, {useState} from 'react';
import {CheckBox} from '@rneui/themed';

interface itemInterface {
  item: any;
  SelectedViolations: Function;
  citedViolations: String[];
}

const CitationViolationItem = ({item, SelectedViolations, citedViolations}: itemInterface) => {

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
