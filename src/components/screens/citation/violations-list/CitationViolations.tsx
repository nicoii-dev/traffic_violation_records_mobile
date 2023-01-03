import {View, Text, Pressable, FlatList} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

// components
import ModalComponent from '../../../modal/ModalComponent';
import CitationViolationItem from './item';

// example data
import listOfViolation from '../../../../assets/example-data/listOfViolation.json';

// redux toolkit
import { addViolation, removeViolation } from '../../../../store/citation/reducers';
interface CitationViolationInterface {
  showModal: boolean;
  setShowModal: Function;
}

const CitationViolations = ({
  showModal,
  setShowModal,
}: CitationViolationInterface) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { citedViolations } = useSelector((store: any) => store.citation);

  const SelectedViolations = (item: string | number) => {
    const inList = citedViolations.some((violation:string | number) => violation === item);
    if(inList) {
      dispatch(removeViolation(item))
      return;
    }
    dispatch(addViolation(item))
  };

  return (
    <View style={{flex: 1}}>
      <ModalComponent showModal={showModal} style={{height: '60%'}}>
        <View style={{height: '90%', borderWidth: 1}}>
          <FlatList
            keyExtractor={(item, index) => item.id.toString() + index}
            showsVerticalScrollIndicator={false}
            data={listOfViolation}
            renderItem={({item}) => (
              <CitationViolationItem
                item={item}
                SelectedViolations={SelectedViolations}
                citedViolations={citedViolations}
              />
            )}
            contentContainerStyle={{
              alignSelf: 'center',
              width: '100%',
              paddingBottom: 10,
            }}
          />
        </View>

        <View style={{position: 'absolute', bottom: 10, alignSelf: 'center'}}>
          <Pressable onPress={() => setShowModal(!showModal)}>
            <View>
              <Text
                style={{
                  fontFamily: 'Manrope-Regular',
                  fontSize: 16,
                  textDecorationLine: 'underline',
                  color: 'black',
                }}>
                Close
              </Text>
            </View>
          </Pressable>
        </View>
      </ModalComponent>
    </View>
  );
};

export default CitationViolations;
