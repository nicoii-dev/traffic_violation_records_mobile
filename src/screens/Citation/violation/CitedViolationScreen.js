/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, FlatList} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import Toast from 'react-native-simple-toast';

// components
import CitationViolationItem from '../../../components/screens/citation/violations-list/item';
import HeaderComponent from '../../../components/header/HeaderComponent';
import ButtonComponent from '../../../components/input/Buttons/ButtonComponent';

// api calls
import { FetchAllViolations } from '../../../services/violationApi';
import { heightPercentageToDP } from 'react-native-responsive-screen';

// redux
import { addViolation, removeViolation } from '../../../store/citation/reducers';

const CitedViolationScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [violations, setViolations] = useState([]);
  const {citedViolations} = useSelector(store => store.citation);

  const fetchHandler = useCallback(async () => {
    // dispatch(loadingStart());
    const response = await FetchAllViolations();
    setViolations(response);
    console.log(response);
  }, []);

  useEffect(() => {
    navigation.addListener('focus', () => {
      fetchHandler();
      setTimeout(() => {
        // dispatch(loadingFinish());
      }, 2000);
    });
  }, [fetchHandler, navigation]);

  const SelectedViolations = item => {
    const inList = citedViolations.some(violation => violation === item);
    if (inList) {
      dispatch(removeViolation(item));
      return;
    }
    dispatch(addViolation(item));
  };

  const CitedViolationsHandler = () => {
    if (citedViolations.length > 0) {
      navigation.navigate('CitationScreen');
      return;
    }
    Toast.show('Please select atleast 1 violation', Toast.LONG, Toast.CENTER);
  };

  return (
    <View style={{flex: 1}}>
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
            Citation Violations
          </Text>
        </View>
      </HeaderComponent>
      <View style={{height: heightPercentageToDP('70%')}}>
        <FlatList
          keyExtractor={(item, index) => item.id.toString() + index}
          showsVerticalScrollIndicator={false}
          data={violations}
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
            paddingBottom: 0,
          }}
        />
      </View>
      <View
        style={{
          alignItems: 'flex-end',
          justifyContent: 'center',
          height: 70,
          borderTopWidth: 1,
        }}>
        <ButtonComponent
          onPress={CitedViolationsHandler}
          color="#2C74B3"
          size="lg"
          styles={{marginRight: 30, width: 100}}>
          <Text style={{color: 'white', fontFamily: 'Manrope-Bold'}}>Next</Text>
        </ButtonComponent>
      </View>
    </View>
  );
};

export default CitedViolationScreen;
