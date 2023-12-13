/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, Keyboard, SafeAreaView, Pressable} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {CheckBox} from '@rneui/themed';
// components
import ButtonComponent from '../../../components/input/Buttons/ButtonComponent';
import HeaderComponent from '../../../components/header/HeaderComponent';
import PickerInputController from '../../../components/input/PickerInput/PickerInputController';
import LicenseTextInput from '../../../components/input/TextInput/LicenseTextInput';
import {licenseSchema} from '../../../library/yup-schema/licenseInfoSchema';
import {widthPercentageToDP} from 'react-native-responsive-screen';

// redux
import {setLicenseInfo} from '../../../store/citation/reducers';

const LicenseInfoScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {licenseInfo} = useSelector(store => store.citation);
  const [hasLicense, setHasLicense] = useState(true);

  const defaultValues = {
    hasLicense: true,
    licenseNumber: '',
    licenseType: 'Professional',
    licenseStatus: 'Expired',
  };

  const {
    control,
    setValue,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(licenseSchema),
    defaultValues: defaultValues,
  });
  console.log(licenseInfo)
  useEffect(() => {
    setHasLicense(licenseInfo.hasLicense);
    if (licenseInfo.licenseNumber) {
      setValue('licenseNumber', licenseInfo.licenseNumber);
      setValue('licenseType', licenseInfo.licenseType);
      setValue('licenseStatus', licenseInfo.licenseStatus);
    }
  }, [licenseInfo, setValue]);

  useEffect(() => {
    if (hasLicense === false) {
      setValue('licenseNumber', 'XXX-XX-XXXXXX');
      return;
    }
    setValue('licenseNumber', licenseInfo.licenseNumber || '');
  }, [setValue, hasLicense, licenseInfo]);

  const onSubmit = async data => {
    if (hasLicense === false) {
      await dispatch(
        setLicenseInfo({...data, licenseNumber: null, hasLicense: false}),
      );
      navigation.navigate('VehiclesInfoScreen');
      return;
    }
    await dispatch(setLicenseInfo({...data, hasLicense: true}));
    navigation.navigate('VehiclesInfoScreen');
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
  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
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
            License Information
          </Text>
        </View>
      </HeaderComponent>
      <View
        style={{
          flex: 1,
          width: widthPercentageToDP('90%'),
          marginTop: 10,
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'row', width: '95%', marginBottom: 20}}>
          <CheckBox
            checked={hasLicense}
            onPress={() => setHasLicense(true)}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            title={'With License'}
            containerStyle={{backgroundColor: 'transparent'}}
          />
          <CheckBox
            checked={!hasLicense}
            onPress={() => setHasLicense(false)}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            title={'Without License'}
            containerStyle={{backgroundColor: 'transparent'}}
          />
        </View>

        <LicenseTextInput
          headerTitle={'License Number'}
          control={control}
          name={'licenseNumber'}
          placeholder={'XXX-XX-XXXXXX'}
          errorMessage={errors?.licenseNumber?.message}
          errorStyle={{color: 'red'}}
          keyboardType={'numeric'}
          disabled={!hasLicense}
          editable={hasLicense}
        />
        <View>
          <PickerInputController
            headerTitle={'License Type'}
            name={'licenseType'}
            control={control}
            // setValue={setValue}
            headerStyles={{marginLeft: 20}}
            errorMessage={errors?.licenseType?.message}
            pickerOptions={[
              'Professional',
              'Non-professional',
              'Student-Permit',
            ]}
            errorStyle={{color: 'red'}}
            enabled={hasLicense}
          />
        </View>
        <View>
          <PickerInputController
            headerTitle={'Status'}
            name={'licenseStatus'}
            control={control}
            // setValue={setValue}
            headerStyles={{marginLeft: 20}}
            errorMessage={errors?.licenseStatus?.message}
            pickerOptions={['Expired', 'Unexpired']}
            errorStyle={{color: 'red'}}
            enabled={hasLicense}
          />
        </View>
      </View>
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

export default LicenseInfoScreen;
