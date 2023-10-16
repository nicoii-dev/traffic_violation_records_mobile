/* eslint-disable prettier/prettier */
import {View, Text, Pressable, Keyboard, Platform} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
import {useDispatch, useSelector} from 'react-redux';
// components
import PlaceOfViolationComponent from '../../../components/screens/citation/place-of-violation/PlaceOfViolationComponent';
import DateAndTimeComponent from '../../../components/screens/citation/date-and-time/DateAndTimeComponent';
import HeaderComponent from '../../../components/header/HeaderComponent';
import ButtonComponent from '../../../components/input/Buttons/ButtonComponent';
import {useStorage} from '../../../library/storage/Storage';
import {USER} from '../../../library/contants';
// schema
import {citationPlaceAndDateSchema} from '../../../library/yup-schema/citationPlaceAndDateSchema';
// redux
import {setCitationDetails} from '../../../store/citation/reducers';
const PlaceAndDateScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [userData, setUserData] = useState();
  const {citationDetails} = useSelector(store => store.citation);

  const defaultValues = {
    tct: '',
    violationDate: '',
    violationTime: '',
    municipality: 'Opol',
    zipCode: '9016',
    barangay: 'Awang',
    street: 'Igpit opol',
  };

  const {
    control,
    setValue,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(citationPlaceAndDateSchema),
    defaultValues: defaultValues,
  });

  useEffect(() => {
    if (citationDetails.violationDate) {
      setValue('tct', citationDetails.tct);
      setValue('violationTime', citationDetails.violationTime);
      setValue('violationDate', citationDetails.violationDate);
      setValue('barangay', citationDetails.barangay);
      setValue('street', citationDetails.street);
    }
  }, [citationDetails, setValue]);

  const onSubmit = async data => {
    const payload = {
      tct: data.tct,
      violationDate: data.violationDate,
      violationTime: data.violationTime,
      municipality: data.municipality,
      zipCode: data.zipCode,
      barangay: data.barangay,
      street: data.street,
    };
    await dispatch(setCitationDetails(payload));
    navigation.navigate('ConfirmationScreen');
  };

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // or some other action
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const getUserData = useCallback(async () => {
    let user = await useStorage.getItem(USER.USER_DATA);
    setUserData(JSON.parse(user));
  }, []);

  useEffect(() => {
    getUserData();
  }, [getUserData]);

  return (
    <>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          width: '95%',
          alignSelf: 'center',
        }}>
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
              Place and Date/Time of Violation
            </Text>
          </View>
        </HeaderComponent>
        <View style={{marginTop: 10, marginBottom: 10}}>
          <Text style={{fontSize: 16, color: 'black'}}>Enforcer Name:
            <Text style={{fontWeight: 'bold'}}>
            {` ${userData?.first_name?.toUpperCase()} ${userData?.middle_name?.charAt(0)?.toUpperCase()}. ${userData?.last_name.toUpperCase()}`}
            </Text>
          </Text>
        </View>
        <DateAndTimeComponent control={control} errors={errors} />
        <PlaceOfViolationComponent control={control} errors={errors} />
      </View>

      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          borderTopWidth: 1,
          height: 70,
          alignItems: 'center',
          position: 'absolute',
          bottom: 0,
          display: isKeyboardVisible ? 'none' : 'flex',
        }}>
        <Pressable onPress={() => navigation.goBack()}>
          <View style={{marginRight: 30, width: 100, marginLeft: 50}}>
            <Text style={{color: 'black', fontFamily: 'Manrope-Bold'}}>
              Back
            </Text>
          </View>
        </Pressable>
        <ButtonComponent
          onPress={handleSubmit(onSubmit)}
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
    </>
  );
};

export default PlaceAndDateScreen;
