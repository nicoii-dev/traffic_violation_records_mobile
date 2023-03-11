import {View, Text, FlatList} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigation, useFocusEffect} from '@react-navigation/native';

// components
import ListOfViolationItem from '../../components/screens/list-of-violation/item';
import HeaderComponent from '../../components/header/HeaderComponent';

// store
import {loadingStart, loadingFinish} from '../../store/loader/reducers';

// api calls
import {FetchAllViolations, FetchViolationsByCategory} from '../../services/violationApi';

const ListOfViolationsScreen = (_props) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {route} = _props
  const [violations, setViolations] = useState([]);

  const fetchHandler = useCallback(async () => {
    dispatch(loadingStart());
    const response = await FetchViolationsByCategory(route?.params?.id);
    setViolations(response)
    console.log(response)
  }, []);

  useEffect(() => {
    navigation.addListener('focus', () => {
      fetchHandler();
      setTimeout(() => {
        dispatch(loadingFinish());
      }, 2000);
    })
  }, [navigation])

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
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        data={violations}
        renderItem={({item}) => <ListOfViolationItem item={item} />}
        contentContainerStyle={{
          alignSelf: 'center',
          width: '90%',
          marginTop: 10,
        }}
      />
    </View>
  );
};

export default ListOfViolationsScreen;
