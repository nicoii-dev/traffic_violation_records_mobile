import {View, Text, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import MapView from 'react-native-maps';
import ListOfDrivers from '../../components/screens/home/item';
// import { useDispatch } from 'react-redux';
// import { locationPermission } from '../../library/permission/location';

const driversData = [
  {driversName: 'John Doe', violation: 'Not Wearing Helmet'},
  {driversName: 'James Stone', violation: 'Not Wearing Helmet'},
  {driversName: 'Patrick Garcia', violation: 'Not Wearing Helmet'},
]

const HomeScreen = () => {
  // const dispatch = useDispatch();
  // // requesting permission
  // useEffect(() => {
  //   dispatch(locationPermission());
  // }, [dispatch]);

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
