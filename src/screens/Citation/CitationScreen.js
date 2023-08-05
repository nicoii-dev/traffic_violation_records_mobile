/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  Pressable,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState, useCallback, useEffect} from 'react';
import {Icon} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import { useDispatch } from 'react-redux';

// components
import HeaderComponent from '../../components/header/HeaderComponent';
import {useStorage} from '../../library/storage/Storage';
import {USER} from '../../library/contants';
import CitationItem from '../../components/screens/citation/item';

// api
import {FetchCitationByEnforcer} from '../../services/citation';
import NoData from '../../components/no-data/NoData';

// redux
import { removeCitationInfo } from '../../store/citation/reducers';
import { loadingStart, loadingFinish } from '../../store/loader/reducers';

const CitationScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [citation, setCitation] = useState([]);

  const fetchHandler = useCallback(async () => {
    dispatch(loadingStart());
    const userData = await useStorage.getItem(USER.USER_DATA);
    const response = await FetchCitationByEnforcer(JSON.parse(userData)?.id);
    if (response) {
      setCitation(response);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    navigation.addListener('focus', () => {
      fetchHandler();
      setTimeout(() => {
        dispatch(loadingFinish());
      }, 2000);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchHandler]);

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
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('CitedViolationScreen');
                dispatch(removeCitationInfo());
              }}>
              <Icon name={'add-circle'} size={30} color={'white'} />
            </TouchableOpacity>
          </View>
        </View>
      </HeaderComponent>
      {citation?.length < 1 ? (
        <NoData />
      ) : (
        <View style={{flex: 1}}>
          <FlatList
            bounces={false}
            keyExtractor={(item, index) => item.id + index.toString()}
            showsVerticalScrollIndicator={false}
            data={citation}
            renderItem={({item}) => <CitationItem item={item} />}
            contentContainerStyle={{
              alignSelf: 'center',
              width: '100%',
            }}
            // refreshing={isRefreshing} // Added pull to refesh state
            // onRefresh={onRefresh} // Added pull to refresh control
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default CitationScreen;
