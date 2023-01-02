import {View, Text, FlatList} from 'react-native';
import React from 'react';
import ListOfViolationItem from '../../components/screens/list-of-violation/item';

import HeaderComponent from '../../components/header/HeaderComponent';

const data = [
  {
    id: 1,
    title: 'No Wearing Helmet',
    penalty: 1000,
    description: 'description',
  },
  {
    id: 2,
    title: "Driving Without Driver's License",
    penalty: 3000,
    description: 'description',
  },
  {id: 3, title: 'Illegal Parking', penalty: 1000, description: 'description'},
  {
    id: 4,
    title: 'Disregarding Traffic Signs',
    penalty: 2000,
    description: 'description',
  },
  {
    id: 5,
    title: 'Driving Under the Influence of Alcohol and/or Prohibited Drugs',
    penalty: 10000,
    description: 'description',
  },
  {
    id: 6,
    title: 'Minor Driving Motorcycle',
    penalty: 3000,
    description: 'description',
  },
  {id: 7, title: 'No O.R/C.R', penalty: 1000, description: 'description'},
  {id: 8, title: 'No Plate Number', penalty: 5000, description: 'description'},
  {
    id: 9,
    title: 'Dirty Plate Number',
    penalty: 5000,
    description: 'description',
  },
  {id: 10, title: 'No Muffler', penalty: 5000, description: 'description'},
  {
    id: 11,
    title: 'Impulsive Muffler',
    penalty: 5000,
    description: 'description',
  },
  {id: 12, title: 'No Side Mirror', penalty: 5000, description: 'description'},
  {
    id: 13,
    title: 'Reckless Driving',
    penalty: 1000,
    description: 'description',
  },
];

const ListOfViolationsScreen = () => {
  return (
    <View>
      <HeaderComponent>
        <View style={{alignItems: 'center'}}>
          <Text
            style={{fontFamily: 'Manrope-Bold', fontSize: 25, color: 'white'}}>
            List Of Violations
          </Text>
        </View>
      </HeaderComponent>
      <FlatList
        keyExtractor={item=> item.id}
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({item}) => <ListOfViolationItem item={item} />}
        contentContainerStyle={{
          alignSelf: 'center',
          width: '90%',
          marginTop: 10
        }}
      />
    </View>
  );
};

export default ListOfViolationsScreen;
