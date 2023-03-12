/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

// reducer
import { setViolatorDetails } from '../../../store/violator/reducers';

const ListOfDrivers = ({item}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const ViolatorInfo = async (item) => {
    await dispatch(setViolatorDetails(item));
    navigation.navigate('ViolatorDetails')
  };

  return (
    <>
      <TouchableOpacity onPress={() => ViolatorInfo(item)}>
      <View
        style={{
          alignSelf: 'flex-start',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          marginTop: 20,
          width: '100%',
        }}>
        <Text
          numberOfLines={1}
          style={{
            width: '40%',
            fontFamily: 'Manrope-Regular',
            fontSize: 16,
            color: 'black',
          }}>
          {item?.violator?.first_name}
        </Text>
        <Text
          style={{
            paddingLeft: 20,
            fontFamily: 'Manrope-Regular',
            fontSize: 16,
            color: 'black',
          }}>
          {JSON.parse(item?.violations)[0]?.violation_name}
        </Text>
        <Icon
          name={'arrow-drop-down'}
          size={20}
          color={'black'}
          style={{flex: 1, textAlign: 'right'}}
        />
      </View>
      </TouchableOpacity>
    </>
  );
};

export default ListOfDrivers;
