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
import DropDownPicker from 'react-native-dropdown-picker';

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
  const [hasPlateNumber, setHasPlateNumber] = useState(true);

  const [open, setOpen] = useState(false);
  const [valueData, setValueData] = useState(null);
  const [items, setItems] = useState([]);
  const {vehicles} = useSelector(store => store.vehicles);

  useEffect(() => {
    let newData = [];
    if (vehicles.length > 0) {
      newData = vehicles?.map(data => ({
        label: `${data.class}, ${data.make}, ${data.model}, ${
          data.plate_number !== null || data.plate_number === 'N/A'
            ? 'Plate: ' + data.plate_number
            : 'Plate: N/A'
        }`,
        value: data.id,
      }));
      newData.unshift({
        label: 'New Vehicle',
        value: 0,
      });
      setItems(newData);
    }
  }, [vehicles]);
  console.log('reg', registeredVehicle);
  const setViolatorValues = useCallback(async () => {
    let obj = vehicles.find(item => item.id === valueData);
    console.log(obj);
    if (valueData !== null) {
      if (valueData === 0) {
        await dispatch(setVehiclesInfo({}));
        setRegisteredVehicle(true);
        setHasPlateNumber(true);
        setValue('plateNumber', '');
        setValue('make', '');
        setValue('model', '');
        setValue('color', '');
        setValue('class', '');
        setValue('bodyMarkings', '');
        setValue('registeredOwner', '');
        setValue('ownerAddress', '');
        setValue('vehicleStatus', '');
      } else {
        setValue('plateNumber', obj.plate_number);
        setValue('make', obj.make);
        setValue('model', obj.model);
        setValue('color', obj.color);
        setValue('class', obj.class);
        setValue('bodyMarkings', obj.body_markings);
        setValue(
          'registeredOwner',
          obj.registered_owner === 'N/A' || obj.registered_owner === null
            ? 'N/A'
            : obj.registered_owner,
        );
        setValue(
          'ownerAddress',
          obj.owner_address === 'N/A' || obj.owner_address === null
            ? 'N/A'
            : obj.owner_address,
        );
        setValue('vehicleStatus', obj.vehicle_status);
        let payload = {
          vehicleId: obj.id,
          plateNumber: obj.plate_number,
          make: obj.make,
          model: obj.model,
          color: obj.color,
          class: obj.class,
          bodyMarkings: obj.body_markings,
          registeredOwner: obj.registered_owner,
          ownerAddress: obj.owner_address,
          vehicleStatus: obj.vehicle_status,
          hasPlateNumber:
            obj.plate_number !== 'N/A' || obj.plate_number !== null
              ? true
              : false,
          isRegistered:
            obj.registered_owner !== 'N/A' || obj.registered_owner !== null
              ? true
              : false,
        };
        await dispatch(setVehiclesInfo(payload));
      }
    }
  }, [dispatch, valueData, vehicles, setValue]);

  useEffect(() => {
    setViolatorValues();
  }, [setViolatorValues]);

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

  const setVehicleInfo = useCallback(() => {
    setRegisteredVehicle(vehiclesInfo.isRegistered);
    setHasPlateNumber(vehiclesInfo.hasPlateNumber);
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

  useEffect(() => {
    setVehicleInfo();
  }, [setVehicleInfo]);

  useEffect(() => {
    if (hasPlateNumber === false) {
      setValue('plateNumber', 'N/A');
      return;
    }
    setValue('plateNumber', vehiclesInfo.plateNumber || '');
  }, [setValue, hasPlateNumber, vehiclesInfo]);

  const onSubmit = async data => {
    console.log(data);
    if (registeredVehicle === false) {
      await dispatch(
        setVehiclesInfo({
          ...data,
          isRegistered: false,
          hasPlateNumber: false,
          plateNumber: null,
        }),
      );
      navigation.navigate('PlaceAndDateScreen');
      return;
    }
    await dispatch(
      setVehiclesInfo({...data, isRegistered: true, hasPlateNumber: true}),
    );
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
  console.log(vehicles.length);
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
      {vehicles.length > 0 ? (
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
            placeholder={'Vehicles'}
            style={{
              width: widthPercentageToDP('90%'),
              marginTop: 10,
              alignSelf: 'center',
            }}
          />
        </View>
      ) : null}
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
          <View style={{flexDirection: 'row', width: '95%', marginBottom: 20}}>
            <CheckBox
              checked={hasPlateNumber}
              onPress={() => setHasPlateNumber(true)}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              title={'With Plate #'}
              containerStyle={{backgroundColor: 'transparent'}}
            />
            <CheckBox
              checked={!hasPlateNumber}
              onPress={() => setHasPlateNumber(false)}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              title={'Without Plate #'}
              containerStyle={{backgroundColor: 'transparent'}}
            />
          </View>

          <TextInputController
            headerTitle={'Plate Number'}
            control={control}
            name={'plateNumber'}
            placeholder={'Plate Number'}
            errorMessage={errors?.plateNumber?.message}
            errorStyle={{color: 'red'}}
            disabled={!hasPlateNumber}
            editable={hasPlateNumber}
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
