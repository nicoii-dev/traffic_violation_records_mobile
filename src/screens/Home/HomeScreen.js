import {View, Text, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import MapView from 'react-native-maps';
import ListOfDrivers from '../../components/screens/home/item';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';


const driversData = [
  {driversName: 'John Doe', violation: 'Not Wearing Helmet'},
  {driversName: 'James Stone', violation: 'Not Wearing Helmet'},
  {driversName: 'Patrick Garcia', violation: 'Not Wearing Helmet'},
]

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  // const fetchHandler = useCallback(async () => {
  //   dispatch(loadingStart());
  //   const response = await FetchViolationsByCategory(route?.params?.id);
  //   setViolations(response)
  //   console.log(response)
  // }, []);

  // useEffect(() => {
  //   navigation.addListener('focus', () => {
  //     fetchHandler();
  //     setTimeout(() => {
  //       dispatch(loadingFinish());
  //     }, 2000);
  //   })
  // }, [navigation])

  return (
    <View style={{flex: 1}}>
      <View style={{height:'50%'}}>
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
        <Text style={{fontFamily: 'Manrope-Regular', color: 'black', padding: 10, paddingBottom: 0, marginTop: 20}}>List of ticketed drivers:</Text>
      </View>
      <View>
        <FlatList
          keyExtractor={(item, index) => item.id + index.toString()}
          showsVerticalScrollIndicator={false}
          data={driversData}
          renderItem={({item}) => <ListOfDrivers item={item} />}
          contentContainerStyle={{
            alignSelf: 'center',
            width: '90%',
          }}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
