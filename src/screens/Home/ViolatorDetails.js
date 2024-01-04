/* eslint-disable prettier/prettier */
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useCallback, useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { Icon } from '@rneui/themed';
// hooks
import { useStorage } from '../../library/storage/Storage';
import { USER } from '../../library/contants';

// redux
import { loadingStart, loadingFinish } from '../../store/loader/reducers';
import { setViolatorDetails } from '../../store/violator/reducers';

// api
import { FetchCitationByViolator } from '../../services/citation';

// components
import HeaderComponent from '../../components/header/HeaderComponent';
import ViolatorDetailsList from '../../components/screens/home/violator-details/item';

const ViolatorDetails = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {violatorDetails} = useSelector(store => store.violator);
  const [details, setDetails] = useState([]);

  const fetchHandler = useCallback(async () => {
    dispatch(loadingStart());
    await FetchCitationByViolator(violatorDetails?.violator_id)
      .then(async response => {
        console.log(response)
        setDetails(response)
      })
      .finally(() => {
        setTimeout(() => {
          dispatch(loadingFinish());
        }, 2000);
      });
  }, [dispatch, violatorDetails?.violator_id]);

  useEffect(() => {
    navigation.addListener('focus', () => {
      fetchHandler();
    });
  }, [fetchHandler, navigation]);

  return (
    <View>
      <HeaderComponent>
        <View style={{alignItems: 'center'}}>
        <View style={{position: 'absolute', left: 30, top: 1}}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <Icon name={'arrow-back'} size={30} color={'white'} />
            </TouchableOpacity>
          </View>
          <Text
            style={{fontFamily: 'Manrope-Bold', fontSize: 20, color: 'white'}}>
            Violator Violations Details
          </Text>
        </View>
      </HeaderComponent>
      <FlatList
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        data={details}
        renderItem={({item}) => <ViolatorDetailsList item={item} />}
        contentContainerStyle={{
          alignSelf: 'center',
          width: '90%',
          paddingBottom: heightPercentageToDP(3.5),
        }}
        style={{height: '88%'}}
      />
    </View>
  );
};

export default ViolatorDetails;
