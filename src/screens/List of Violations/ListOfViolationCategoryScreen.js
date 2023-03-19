/* eslint-disable prettier/prettier */
import {View, Text, FlatList} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigation, useFocusEffect} from '@react-navigation/native';

// components
import ListOfCategoryItem from '../../components/screens/list-of-category/item';
import HeaderComponent from '../../components/header/HeaderComponent';

// store
import {loadingStart, loadingFinish} from '../../store/loader/reducers';

// api calls
import {FetchAllCategory} from '../../services/violationApi';
import NoData from '../../components/no-data/NoData';

const ListOfViolationCategoryScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [categories, setCategories] = useState([]);

  const fetchHandler = useCallback(async () => {
    dispatch(loadingStart());
    const response = await FetchAllCategory();
    if (response) {setCategories(response);}
    console.log(response);
  }, [dispatch]);

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
    <View style={{flex: 1}}>
      <HeaderComponent>
        <View style={{alignItems: 'center'}}>
          <Text
            style={{fontFamily: 'Manrope-Bold', fontSize: 25, color: 'white'}}>
            List Of Category
          </Text>
        </View>
      </HeaderComponent>
      {categories < 1 ? (
        <NoData />
      ) : (
        <FlatList
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          data={categories}
          renderItem={({item}) => <ListOfCategoryItem item={item} />}
          contentContainerStyle={{
            alignSelf: 'center',
            width: '90%',
            marginTop: 10,
          }}
        />
      )}
    </View>
  );
};

export default ListOfViolationCategoryScreen;
