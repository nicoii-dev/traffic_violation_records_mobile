/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  Keyboard,
  ScrollView,
} from 'react-native';
import {CheckBox} from '@rneui/base';
import React, {useState, useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import DropDownPicker from 'react-native-dropdown-picker';
import moment from 'moment';
import nationalityList from '../../../assets/example-data/nationalityList.json';

// components
import HeaderComponent from '../../../components/header/HeaderComponent';
import ButtonComponent from '../../../components/input/Buttons/ButtonComponent';
import TextInputController from '../../../components/input/TextInput/TextInputController';
import DateInputController from '../../../components/input/DateInput/DateInputeController';
import PickerInputController from '../../../components/input/PickerInput/PickerInputController';

// schema
import {violatorSchema} from '../../../library/yup-schema/violatorSchema';

// redux
import {
  setLicenseInfo,
  setViolatorsInfo,
} from '../../../store/citation/reducers';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {FetchAllViolator} from '../../../services/violatorApi';
import {setVehicles} from '../../../store/vehicle/reducers';

// api

const ViolatorInfoScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [selectedGender, setSelectedGender] = React.useState('Male');

  const [open, setOpen] = useState(false);
  const [valueData, setValueData] = useState(null);
  const [items, setItems] = useState([]);
  const [violatorList, setViolatorList] = useState([]);

  const defaultValues = {
    firstName: '',
    middleName: '',
    lastName: '',
    municipality: '',
    zipCode: '',
    barangay: '',
    street: '',
    phoneNumber: '',
    dob: '',
    gender: 'Male',
    nationality: 'Filipino',
  };

  const fetchHandler = useCallback(async () => {
    // dispatch(loadingStart());
    const response = await FetchAllViolator();
    setViolatorList(response);
    let newData = [];
    newData = response.map(data => ({
      label: `${data.first_name} ${data.middle_name} ${data.last_name}`,
      value: data.id,
    }));
    newData.unshift({
      label: 'New Violator',
      value: 0,
    });
    setItems(newData);
  }, []);
  useEffect(() => {
    navigation.addListener('focus', () => {
      fetchHandler();
      setTimeout(() => {
        // dispatch(loadingFinish());
      }, 2000);
    });
  }, [fetchHandler, navigation]);

  const {violatorInfo} = useSelector(store => store.citation);

  const {
    control,
    setValue,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(violatorSchema),
    defaultValues: defaultValues,
  });

  useEffect(() => {
    if (violatorInfo.dob) {
      setValue('dob', violatorInfo.dob);
    }
    if (violatorInfo.gender) {
      setSelectedGender(violatorInfo.gender);
    }
  }, [setValue, violatorInfo.dob, violatorInfo.gender]);

  const onSubmit = async data => {
    let newData = {...data, gender: selectedGender};

    await dispatch(setViolatorsInfo(newData));
    navigation.navigate('LicenseInfoScreen');
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

  const setViolatorValues = useCallback(() => {
    let obj = violatorList.find(item => item.id === valueData);
    let newDob = null;
    const parts = obj?.dob?.split('-');
    if (parts !== undefined) {
      const formattedDate = `${parts[2]}-${parts[0]}-${parts[1]}`;
      newDob = new Date(formattedDate);
    }

    console.log('test', newDob);
    if (valueData !== null) {
      if (valueData === 0) {
        setValue('firstName', '');
        setValue('middleName', '');
        setValue('lastName', '');
        setValue('gender', 'Male');
        setValue('municapality', '');
        setValue('zipcode', '');
        setValue('barangay', '');
        setValue('street', '');
        setValue('phoneNumber', '');
        setValue('dob', '');
        setValue('nationality', 'Filipino');
        dispatch(setLicenseInfo([]));
        dispatch(setVehicles([]));
      } else {
        setValue('firstName', obj?.first_name);
        setValue('middleName', obj?.middle_name);
        setValue('lastName', obj?.last_name);
        setValue('gender', obj?.gender);
        setValue('municipality', obj?.municipality);
        setValue('zipCode', obj?.zipcode);
        setValue('barangay', obj?.barangay);
        setValue('street', obj?.street);
        setValue('phoneNumber', obj?.phone_number);
        setValue('dob', newDob);
        setValue('nationality', obj?.nationality);
        dispatch(
          setLicenseInfo({
            hasLicense:
              obj.license.license_number !== null ||
              obj.license.license_number !== 'N/A'
                ? true
                : false,
            licenseId: obj.license.id,
            licenseNumber: obj.license.license_number,
            licenseType: obj.license.license_type,
            licenseStatus: obj.license.license_status,
          }),
        );
        dispatch(setVehicles(obj.vehicle));
      }
    }
  }, [dispatch, setValue, valueData, violatorList]);

  useEffect(() => {
    setViolatorValues();
  }, [setViolatorValues]);

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
            Violator Information
          </Text>
        </View>
      </HeaderComponent>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 20,
        }}>
        <DropDownPicker
          open={open}
          value={valueData}
          items={items}
          setOpen={setOpen}
          setValue={setValueData}
          setItems={setItems}
          placeholder={'Recorded Violators'}
          style={{
            width: widthPercentageToDP('90%'),
            marginTop: 10,
            alignSelf: 'center',
          }}
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            width: widthPercentageToDP('90%'),
            marginTop: 10,
            alignItems: 'center',
          }}>
          <TextInputController
            headerTitle={'First Name'}
            control={control}
            name={'firstName'}
            placeholder={'First Name'}
            errorMessage={errors?.firstName?.message}
            errorStyle={{color: 'red'}}
          />
          <TextInputController
            headerTitle={'Middle Name'}
            control={control}
            name={'middleName'}
            placeholder={'Middle Name'}
            errorMessage={errors?.middleName?.message}
            errorStyle={{color: 'red'}}
          />
          <TextInputController
            headerTitle={'Last Name'}
            control={control}
            name={'lastName'}
            placeholder={'Last Name'}
            errorMessage={errors?.lastName?.message}
            errorStyle={{color: 'red'}}
          />
          {/* <TextInputController
            headerTitle={'Gender'}
            control={control}
            name={'gender'}
            placeholder={'Gender'}
            errorMessage={errors?.gender?.message}
            errorStyle={{color: 'red'}}
          /> */}
          <View style={{flexDirection: 'row', width: '95%'}}>
            <View>
              <Text style={{fontSize: 18, color: 'black', textAlign: 'left'}}>
                Gender
              </Text>
            </View>
            <CheckBox
              checked={selectedGender === 'Male'}
              onPress={() => setSelectedGender('Male')}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              title={'Male'}
              containerStyle={{backgroundColor: 'transparent'}}
            />
            <CheckBox
              checked={selectedGender === 'Female'}
              onPress={() => setSelectedGender('Female')}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              title={'Female'}
              containerStyle={{backgroundColor: 'transparent'}}
            />
          </View>
          <TextInputController
            headerTitle={'Municipality'}
            control={control}
            name={'municipality'}
            placeholder={'Municipality'}
            errorMessage={errors?.municipality?.message}
            errorStyle={{color: 'red'}}
          />
          <TextInputController
            headerTitle={'ZIP code'}
            control={control}
            name={'zipCode'}
            placeholder={'ZIP code'}
            errorMessage={errors?.zipCode?.message}
            errorStyle={{color: 'red'}}
            keyboardType={'numeric'}
          />
          <TextInputController
            headerTitle={'Barangay'}
            control={control}
            name={'barangay'}
            placeholder={'Barangay'}
            errorMessage={errors?.barangay?.message}
            errorStyle={{color: 'red'}}
          />
          <TextInputController
            headerTitle={'Street/Zone/Purok'}
            control={control}
            name={'street'}
            placeholder={'Street/Zone/Purok'}
            errorMessage={errors?.street?.message}
            errorStyle={{color: 'red'}}
          />
          <TextInputController
            headerTitle={'Phone Number'}
            control={control}
            name={'phoneNumber'}
            placeholder={'Phone Number'}
            errorMessage={errors?.phoneNumber?.message}
            errorStyle={{color: 'red'}}
          />
          <View style={{alignSelf: 'flex-start', marginLeft: 10}}>
            <DateInputController
              headerStyles={{width: '100%'}}
              headerTitle={'Date of Birth'}
              name={'dob'}
              control={control}
              errorMessage={errors?.dob?.message}
              display={'default'}
              mode={'date'}
              iconData={{
                iconName: 'date-range',
                iconSize: 25,
                iconColor: 'gray',
              }}
            />
          </View>
          <View style={{marginTop: 20}}>
            <PickerInputController
              headerTitle={'Nationality'}
              name={'nationality'}
              control={control}
              // setValue={setValue}
              headerStyles={{marginLeft: 20}}
              errorMessage={errors?.nationality?.message}
              pickerOptions={nationalityList}
              errorStyle={{color: 'red'}}
            />
          </View>
        </View>
      </ScrollView>
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

export default ViolatorInfoScreen;
