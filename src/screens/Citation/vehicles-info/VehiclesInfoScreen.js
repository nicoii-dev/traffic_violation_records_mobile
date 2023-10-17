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
import React, {useState, useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {CheckBox} from '@rneui/themed';

// components
import HeaderComponent from '../../../components/header/HeaderComponent';
import ButtonComponent from '../../../components/input/Buttons/ButtonComponent';
import TextInputController from '../../../components/input/TextInput/TextInputController';
import PickerInputController from '../../../components/input/PickerInput/PickerInputController';

// schema
import {vehicleSchema} from '../../../library/yup-schema/vehicleSchema';

// redux
import {setVehiclesInfo} from '../../../store/citation/reducers';
import {widthPercentageToDP} from 'react-native-responsive-screen';

// api
import {FetchAllMake, FetchAllClass} from '../../../services/vehicleApi';

const VehiclesInfoScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [registeredVehicle, setRegisteredVehicle] = useState(true);
  const {vehiclesInfo} = useSelector(store => store.citation);
  const [vehicleMake, setVehicleMake] = useState([]);
  const [vehicleClass, setVehicleClass] = useState([]);

  const fetchMakeHandler = useCallback(async () => {
    let dataArr = [];
    const makeResponse = await FetchAllMake();
    makeResponse.map(data => {
      dataArr.push(data.make);
    });
    setVehicleMake(dataArr);
    console.log(dataArr);
  }, []);

  useEffect(() => {
    fetchMakeHandler();
  }, [fetchMakeHandler]);

  const fetchClassHandler = useCallback(async () => {
    let dataArr = [];
    const classResponse = await FetchAllClass();
    classResponse.map(data => {
      dataArr.push(data.class);
    });
    setVehicleClass(dataArr);
    console.log(dataArr);
  }, []);

  useEffect(() => {
    fetchClassHandler();
  }, [fetchClassHandler]);

  const defaultValues = {
    plateNumber: '',
    make: '',
    model: '',
    color: '',
    registeredOwner: '',
    vehicleStatus: 'Unexpired',
  };

  const {
    control,
    setValue,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(vehicleSchema),
    defaultValues: defaultValues,
  });

  useEffect(() => {
    setRegisteredVehicle(vehiclesInfo.isRegistered);
    if (vehiclesInfo.plateNumber) {
      setValue('plateNumber', vehiclesInfo.plateNumber);
      setValue('make', vehiclesInfo.make);
      setValue('model', vehiclesInfo.model);
      setValue('color', vehiclesInfo.color);
      setValue('class', vehiclesInfo.class);
      setValue('bodyMarkings', vehiclesInfo.bodyMarkings);
      setValue('registeredOwner', vehiclesInfo.registeredOwner);
      setValue('ownerAddress', vehiclesInfo.ownerAddress);
      setValue('vehicleStatus', vehiclesInfo.vehicleStatus);
    }
  }, [setValue, vehiclesInfo]);

  const onSubmit = async data => {
    console.log(data);
    if (registeredVehicle === false) {
      await dispatch(setVehiclesInfo({...data, isRegistered: false}));
      navigation.navigate('PlaceAndDateScreen');
      return;
    }
    await dispatch(setVehiclesInfo({...data, isRegistered: true}));
    navigation.navigate('PlaceAndDateScreen');
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

  useEffect(() => {
    if (registeredVehicle === false) {
      setValue('registeredOwner', 'N/A');
      return;
    }
    setValue('registeredOwner', '');
  }, [setValue, registeredVehicle]);

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
            Vehicle Information
          </Text>
        </View>
      </HeaderComponent>
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
            headerTitle={'Plate Number'}
            control={control}
            name={'plateNumber'}
            placeholder={'Plate Number'}
            errorMessage={errors?.plateNumber?.message}
            errorStyle={{color: 'red'}}
          />
          {/* <TextInputController
            headerTitle={'Make'}
            control={control}
            name={'make'}
            placeholder={'make'}
            errorMessage={errors?.make?.message}
            errorStyle={{color: 'red'}}
          /> */}
          <View>
            <PickerInputController
              headerTitle={'Make'}
              name={'make'}
              control={control}
              // setValue={setValue}
              headerStyles={{marginLeft: 20}}
              errorMessage={errors?.make?.message}
              pickerOptions={vehicleMake || []}
              errorStyle={{color: 'red'}}
            />
          </View>
          <TextInputController
            headerTitle={'Model'}
            control={control}
            name={'model'}
            placeholder={'Model'}
            errorMessage={errors?.model?.message}
            errorStyle={{color: 'red'}}
          />
          <TextInputController
            headerTitle={'Color'}
            control={control}
            name={'color'}
            placeholder={'Color'}
            errorMessage={errors?.color?.message}
            errorStyle={{color: 'red'}}
          />
          {/* <TextInputController
            headerTitle={'Class'}
            control={control}
            name={'class'}
            placeholder={'Class'}
            errorMessage={errors?.class?.message}
            errorStyle={{color: 'red'}}
          /> */}
          <View>
            <PickerInputController
              headerTitle={'Class'}
              name={'class'}
              control={control}
              // setValue={setValue}
              headerStyles={{marginLeft: 20}}
              errorMessage={errors?.class?.message}
              pickerOptions={vehicleClass || []}
              errorStyle={{color: 'red'}}
            />
          </View>
          <TextInputController
            headerTitle={'Body Markings'}
            control={control}
            name={'bodyMarkings'}
            placeholder={'Body Markings'}
            errorMessage={errors?.bodyMarkings?.message}
            errorStyle={{color: 'red'}}
          />
          <View style={{flexDirection: 'row', width: '95%', marginBottom: 20}}>
            <CheckBox
              checked={registeredVehicle}
              onPress={() => setRegisteredVehicle(true)}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              title={'Registered'}
              containerStyle={{backgroundColor: 'transparent'}}
            />
            <CheckBox
              checked={!registeredVehicle}
              onPress={() => setRegisteredVehicle(false)}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              title={'Unregistered'}
              containerStyle={{backgroundColor: 'transparent'}}
            />
          </View>
          <TextInputController
            headerTitle={'Registered Owner'}
            control={control}
            name={'registeredOwner'}
            placeholder={'Registered Owner'}
            errorMessage={errors?.registeredOwner?.message}
            errorStyle={{color: 'red'}}
            editable={registeredVehicle}
            disabled={!registeredVehicle}
          />
          <TextInputController
            headerTitle={'Owner Address'}
            control={control}
            name={'ownerAddress'}
            placeholder={'Owner Address'}
            errorMessage={errors?.ownerAddress?.message}
            errorStyle={{color: 'red'}}
            editable={registeredVehicle}
            disabled={!registeredVehicle}
          />
          <View>
            <PickerInputController
              headerTitle={'Vehicle Status'}
              name={'vehicleStatus'}
              control={control}
              // setValue={setValue}
              headerStyles={{marginLeft: 20}}
              errorMessage={errors?.vehicleStatus?.message}
              pickerOptions={['Unexpired', 'Expired']}
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

export default VehiclesInfoScreen;
