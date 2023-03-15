/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  Pressable,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Icon} from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

// components
import HeaderComponent from '../../components/header/HeaderComponent';

const CitationScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
      <HeaderComponent>
        <View
          style={{
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontFamily: 'Manrope-Bold',
              fontSize: 25,
              color: 'white',
              textAlign: 'center',
            }}>
            Citation List
          </Text>
          <View style={{position: 'absolute', right: 30, top: 1}}>
            <TouchableOpacity onPress={() => {navigation.navigate('CitedViolationScreen')}}>
              <Icon name={'add-circle'} size={30} color={'white'} />
            </TouchableOpacity>
          </View>
        </View>
      </HeaderComponent>
    </SafeAreaView>
  );
};

export default CitationScreen;
