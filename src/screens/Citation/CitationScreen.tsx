import {View, Text, Pressable, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {Icon} from '@rneui/themed';

// components
import HeaderComponent from '../../components/header/HeaderComponent';
import CitationComponent from '../../components/screens/citation/CitationComponent';
import CitationViolations from '../../components/screens/citation/violations-list/CitationViolations';

const CitationScreen = () => {
  const [showModal, setShowModal] = useState<boolean>(true);

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
            Traffic Citation
          </Text>
          <Pressable
            style={{
              position: 'absolute',
              right: 30,
            }}
            onPress={() => {
              setShowModal(!showModal);
            }}>
            {/* <Icon name={'control-point'} size={30} color={'white'} /> */}
          </Pressable>
        </View>
      </HeaderComponent>
      <CitationComponent showModal={showModal} setShowModal={setShowModal} />
    </SafeAreaView>
  );
};

export default CitationScreen;
