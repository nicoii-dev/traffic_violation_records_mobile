/* eslint-disable prettier/prettier */
import {
  Text,
  View,
  SectionList,
  SafeAreaView,
  StyleSheet,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import Toast from 'react-native-simple-toast';
import {COLORS} from '../../../config/colors';

// schema
import {citationSchema} from '../../../library/yup-schema/citationSchema';

// components
import ButtonComponent from '../../input/Buttons/ButtonComponent';
import {CitationInputs} from '../../../config/citationInputs';
import CitationItem from './item';

// redux
import {setDriversInfo} from '../../../store/citation/reducers';

const CitationComponent = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {driversInfo} = useSelector(store => store.citation);

  // const defaultValues = {
  //   firstName: '',
  //   middleName: '',
  //   lastName: '',
  //   dob: '',
  //   gender: 'Male',
  //   nationality: 'Filipino',
  //   licenseType: 'Professional',
  //   licenseStatus: 'Unexpired',
  //   vehicleStatus: 'Unexpired',
  // };

  const defaultValues = {
    firstName: 'Arjohn',
    middleName: 'Bagalihog',
    lastName: 'Ely',
    address: 'Zone 5A Iponan',
    phoneNumber: '09354135541',
    dob: '',
    gender: 'Male',
    nationality: 'Filipino',
    licenseNumber: '123456789012',
    licenseType: 'Professional',
    licenseStatus: 'Unexpired',
    plateNumber: '123-567',
    make: 'Honda',
    model: 'Click 125',
    color: 'Black',
    registeredOwner: 'Arjohn Ely',
    vehicleStatus: 'Unexpired',
  };

  const {
    control,
    setValue,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(citationSchema),
    defaultValues: defaultValues,
  });

  const onSubmit = async data => {
    // getting the age
    console.log(data);
    const birthDate = new Date(data.dob);
    const difference = Date.now() - birthDate.getTime();
    const ageInTime = new Date(difference);
    const ageInYear = Math.abs(ageInTime.getUTCFullYear() - 1970);
    console.log('age', Math.abs(ageInTime.getUTCFullYear() - 1970));
    // if(ageInYear < 16) {
    //   return Toast.showWithGravity('Driver is below 16 years old, please double check inputted date of birth.' , Toast.LONG, Toast.TOP)
    // }

    await dispatch(setDriversInfo(data));

    navigation.navigate('LicenseInfoScreen');
  };

  console.log('drivers', driversInfo);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        width: widthPercentageToDP('100%'),
      }}>
      <SectionList
        sections={CitationInputs}
        keyExtractor={(item, index) => String(item) + index}
        renderItem={({item}) => (
          <CitationItem
            item={item}
            control={control}
            errors={errors}
            setValue={setValue}
          />
        )}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.header}>{title}</Text>
        )}
        showsVerticalScrollIndicator={false}
        stickySectionHeadersEnabled={true}
        style={{width: widthPercentageToDP('90%'), alignSelf: 'center'}}
      />
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          borderTopWidth: 1,
          height: 70,
          alignItems: 'center',
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    marginBottom: 15,
    marginTop: 10,
    fontFamily: 'Manrope-Bold',
    color: 'white',
    backgroundColor: COLORS.COLD_BLUE,
    borderRadius: 5,
    textAlign: 'center',
    height: 50,
    justifyContent: 'center',
    textAlignVertical: 'center',
  },
});

export default CitationComponent;
