/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {Input, Icon} from '@rneui/themed';
import {View, Text, FlatList, Pressable, TouchableOpacity} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import Toast from 'react-native-simple-toast';

// components
import CitationViolationItem from '../../../components/screens/citation/violations-list/item';
import HeaderComponent from '../../../components/header/HeaderComponent';
import ButtonComponent from '../../../components/input/Buttons/ButtonComponent';

// api calls
import {
  FetchAllViolations,
  SearchViolation,
} from '../../../services/violationApi';
import {heightPercentageToDP} from 'react-native-responsive-screen';

// redux
import {addViolation, removeViolation} from '../../../store/citation/reducers';
import NoData from '../../../components/no-data/NoData';
import {loadingStart, loadingFinish} from '../../../store/loader/reducers';

const CitedViolationScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [violations, setViolations] = useState([]);
  const {citedViolations} = useSelector(store => store.citation);
  const [searchText, setSearchText] = useState('');

  const fetchHandler = useCallback(async () => {
    dispatch(loadingStart());
    const response = await FetchAllViolations();
    setViolations(response);
    setTimeout(() => {
      dispatch(loadingFinish());
    }, 2000);
  }, [dispatch]);

  useEffect(() => {
    navigation.addListener('focus', () => {
      fetchHandler();
      setTimeout(() => {
        dispatch(loadingFinish());
      }, 2000);
    });
  }, [dispatch, fetchHandler, navigation]);

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
      navigation.navigate('ViolatorInfoScreen');
      return;
    }
    Toast.show('Please select atleast 1 violation', Toast.LONG, Toast.CENTER);
  };

  const searchHandler = async () => {
    const payload = {
      search: searchText,
    };
    const response = await SearchViolation(payload);
    setViolations(response);
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
      {violations.length < 1 ? (
        <NoData fetchFunction={fetchHandler} />
      ) : (
        <View style={{height: heightPercentageToDP('70%')}}>
          <Input
            autoCapitalize={false}
            autoComplete="off"
            allowFontScaling={false}
            onChangeText={text => setSearchText(text)}
            value={searchText}
            placeholder={'Search...'}
            rightIcon={
              <TouchableOpacity onPress={searchHandler}>
                <Icon name={'search'} size={30} />
              </TouchableOpacity>
            }
            // rightIconContainerStyle={{backgroundColor: '#E0E0E0', height: '75%'}}
          />
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
      )}
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          borderTopWidth: 1,
          height: 70,
          alignItems: 'center',
          position: 'absolute',
          bottom: 0,
          // display: isKeyboardVisible ? 'none' : 'flex',
        }}>
        <Pressable onPress={() => navigation.goBack()}>
          <View style={{marginRight: 30, width: 100, marginLeft: 50}}>
            <Text style={{color: 'black', fontFamily: 'Manrope-Bold'}}>
              Back
            </Text>
          </View>
        </Pressable>
        <ButtonComponent
          onPress={CitedViolationsHandler}
          color="#2C74B3"
          size="lg"
          styles={{
            marginRight: 30,
            width: 100,
            position: 'absolute',
            right: 0,
          }}>
          <Text style={{color: 'white', fontFamily: 'Manrope-Bold'}}>Next</Text>
        </ButtonComponent>
      </View>
    </View>
  );
};

export default CitedViolationScreen;
