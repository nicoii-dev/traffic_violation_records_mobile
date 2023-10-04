/* eslint-disable prettier/prettier */
import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState, useCallback} from 'react';
import MapView from 'react-native-maps';
import ListOfDrivers from '../../components/screens/home/item';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {USER} from '../../library/contants';
import {useStorage} from '../../library/storage/Storage';

// api
import {FetchCitationByEnforcer, FetchCitationByEnforcerGroupBy} from '../../services/citation';
// redux
import {loadingStart, loadingFinish} from '../../store/loader/reducers';
import NoData from '../../components/no-data/NoData';

const driversData = [
  {driversName: 'John Doe', violation: 'Not Wearing Helmet'},
  {driversName: 'James Stone', violation: 'Not Wearing Helmet'},
  {driversName: 'Patrick Garcia', violation: 'Not Wearing Helmet'},
];

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [citation, setCitation] = useState([]);

  const fetchHandler = useCallback(async () => {
    const userData = await useStorage.getItem(USER.USER_DATA);
    await FetchCitationByEnforcerGroupBy(JSON.parse(userData)?.id)
      .then(async response => {
        setCitation(response);
      })
      .finally(() => {
        setTimeout(() => {
        }, 2000);
      });
  }, []);

  useEffect(() => {
    navigation.addListener('focus', () => {
      fetchHandler();
    });
  }, [fetchHandler, navigation]);

  return (
    <View style={{flex: 1}}>
      <View style={{height: '50%'}}>
        <MapView
          style={{height: '100%', width: '100%'}}
          initialRegion={{
            latitude: 8.4803,
            longitude: 124.6498,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
      <View>
        <Text
          style={{
            fontFamily: 'Manrope-Regular',
            color: 'black',
            padding: 10,
            paddingBottom: 0,
            marginTop: 20,
          }}>
          List of ticketed drivers:
        </Text>
      </View>
      {citation?.length < 1 ? <NoData fetchFunction={fetchHandler} /> :
      <View>
        <FlatList
          keyExtractor={(item, index) => item.id + index.toString()}
          showsVerticalScrollIndicator={false}
          data={citation}
          renderItem={({item}) => <ListOfDrivers item={item} />}
          contentContainerStyle={{
            alignSelf: 'center',
            width: '90%',
          }}
        />
      </View>
      }
    </View>
  );
};

export default HomeScreen;
