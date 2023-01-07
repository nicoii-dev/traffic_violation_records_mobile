import {View, Text, Pressable, FlatList} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

// components
import ButtonComponent from '../../../input/Buttons/ButtonComponent';
import CitationViolationItem from './item';

// example data
import listOfViolation from '../../../../assets/example-data/listOfViolation.json';

// redux toolkit
import {
  addViolation,
  removeViolation,
} from '../../../../store/citation/reducers';
import CitationViolationStyles from './citation-violation-style';
import { heightPercentageToDP } from 'react-native-responsive-screen';

const CitationViolations = ({}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {citedViolations} = useSelector((store: any) => store.citation);

  const SelectedViolations = (item: string | number) => {
    const inList = citedViolations.some(
      (violation: string | number) => violation === item,
    );
    if (inList) {
      dispatch(removeViolation(item));
      return;
    }
    dispatch(addViolation(item));
  };

  const CitedViolationsHandler = () => {
    navigation.navigate('CitationScreen')
  }

  return (
    <>
      <View style={CitationViolationStyles.container}>
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
      <View style={{alignItems: 'flex-end', justifyContent: 'center', height: 70, borderTopWidth: 1}}>
        <ButtonComponent
          onPress={CitedViolationsHandler}
          color="#2C74B3"
          size="lg"
          styles={{marginRight: 30, width: 100}}>
          <Text style={{color: 'white', fontFamily: 'Manrope-Bold'}}>Next</Text>
        </ButtonComponent>
      </View>
    </>
  );
};

export default CitationViolations;
