import {View, Text, Pressable, Keyboard, Platform} from 'react-native';
import React, { useEffect, useState } from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';

// components
import PlaceOfViolationComponent from '../../../components/screens/citation/place-of-violation/PlaceOfViolationComponent';
import DateAndTimeComponent from '../../../components/screens/citation/date-and-time/DateAndTimeComponent';
import HeaderComponent from '../../../components/header/HeaderComponent';
import ButtonComponent from '../../../components/input/Buttons/ButtonComponent';
// schema
import {citationPlaceAndDateSchema} from '../../../library/yup-schema/citationPlaceAndDateSchema';

const PlaceAndDateScreen = () => {
  const navigation = useNavigation();

  const defaultValues = {
    violationDate: new Date(),
    municipality: 'Opol',
    zipCode: '9016'
  };

  const {
    control,
    setValue,
    handleSubmit,
    formState: {errors},
  } = useForm({
    // resolver: yupResolver(citationPlaceAndDateSchema),
    defaultValues: defaultValues,
  });

  const onSubmit = (data: object) => {
    // getting the age
    console.log((moment(data.time).format('h:mm:ss A')))
    console.log(data);

    navigation.navigate('ConfirmationScreen');
  };

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
     const keyboardDidShowListener = Keyboard.addListener(
       'keyboardDidShow',
       () => {
         setKeyboardVisible(true); // or some other action
       }
     );
     const keyboardDidHideListener = Keyboard.addListener(
       'keyboardDidHide',
       () => {
         setKeyboardVisible(false); // or some other action
       }
     );
 
     return () => {
       keyboardDidHideListener.remove();
       keyboardDidShowListener.remove();
     };
   }, []);
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
          display: isKeyboardVisible ? 'none' : 'flex'
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
