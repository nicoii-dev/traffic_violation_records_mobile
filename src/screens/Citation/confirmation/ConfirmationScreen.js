/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, SafeAreaView, ScrollView, Pressable} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
import Toast from 'react-native-simple-toast';

// components
import HeaderComponent from '../../../components/header/HeaderComponent';
import DetailsItemStyles from './style';
import {useStorage} from '../../../library/storage/Storage';
import {USER} from '../../../library/contants';

// api
import {FetchAllViolations} from '../../../services/violationApi';
import {CreateCitation, UpdateCitation} from '../../../services/citation';

// redux
import {loadingStart, loadingFinish} from '../../../store/loader/reducers';
import { setVehicles } from '../../../store/vehicle/reducers';
import ButtonComponent from '../../../components/input/Buttons/ButtonComponent';
import _ from 'lodash';

const ConfirmationScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [userData, setUserData] = useState();
  const [violations, setViolations] = useState([]);
  let subTotal = 0;
  const {
    citedViolations,
    violatorInfo,
    licenseInfo,
    vehiclesInfo,
    citationDetails,
    citationId,
  } = useSelector(store => store.citation);

  const fetchHandler = useCallback(async () => {
    const response = await FetchAllViolations();
    setViolations(response);
  }, []);

  useEffect(() => {
    dispatch(loadingFinish());
    navigation.addListener('focus', () => {
      fetchHandler();
      setTimeout(() => {}, 2000);
    });
  }, [dispatch, fetchHandler, navigation]);

  const createCitation = async () => {
    // dispatch(loadingStart());
    const payload = {
      first_name: violatorInfo.firstName,
      middle_name: violatorInfo.middleName,
      last_name: violatorInfo.lastName,
      gender: violatorInfo.gender,
      address: violatorInfo.address,
      violatorMunicipality: violatorInfo.municipality,
      violatorZipcode: violatorInfo.zipCode,
      violatorBarangay: violatorInfo.barangay,
      violatorStreet: violatorInfo.street,
      nationality: violatorInfo.nationality,
      phone_number: violatorInfo.phoneNumber,
      dob: moment(violatorInfo.dob).format('MM-DD-YYYY'),
      license_number: licenseInfo.hasLicense ? licenseInfo.licenseNumber : null,
      license_type: licenseInfo.hasLicense ? licenseInfo.licenseType : 'N/A',
      license_status: licenseInfo.hasLicense ? licenseInfo.licenseStatus : 'N/A',
      plate_number: vehiclesInfo.hasPlateNumber ? vehiclesInfo.plateNumber : null,
      make: vehiclesInfo.make,
      model: vehiclesInfo.model,
      color: vehiclesInfo.color,
      class: vehiclesInfo.class || 'N/A',
      body_markings: vehiclesInfo.bodyMarkings || 'N/A',
      registered_owner: vehiclesInfo.registeredOwner,
      owner_address: vehiclesInfo.ownerAddress || 'N/A',
      vehicle_status: vehiclesInfo.vehicleStatus,
      violations: `[${citedViolations}]`,
      tct: citationDetails.tct,
      date_of_violation: moment(citationDetails?.violationDate).format(
        'YYYY-MM-DD',
      ),
      time_of_violation: citationDetails.violationTime,
      municipality: citationDetails.municipality,
      zipcode: citationDetails.zipCode,
      barangay: citationDetails.barangay,
      street: citationDetails.street,
      sub_total: subTotal,
    };
    console.log(payload)
  //   if (_.isNull(citationId)) {
  //     await CreateCitation(payload).then(async response => {
  //       if (!_.isUndefined(response)) {
  //         Toast.showWithGravity(
  //           'Successfully Created',
  //           Toast.LONG,
  //           Toast.CENTER,
  //         );
  //         setTimeout(() => {
  //           dispatch(loadingFinish());
  //           navigation.navigate('CitationScreen');
  //         }, 1500);
  //       } else {
  //         dispatch(loadingFinish());
  //       }
  //       dispatch(setVehicles([]));
  //     });
  //   } else {
  //     await UpdateCitation(payload, citationId).then(async response => {
  //       if (!_.isUndefined(response)) {
  //         Toast.showWithGravity(
  //           'Successfully Updated',
  //           Toast.LONG,
  //           Toast.CENTER,
  //         );
  //         setTimeout(() => {
  //           dispatch(loadingFinish());
  //           navigation.navigate('CitationScreen');
  //         }, 1500);
  //       } else {
  //         dispatch(loadingFinish());
  //       }
  //       dispatch(setVehicles([]));
  //     });
  //   }
  };

  const getUserData = useCallback(async () => {
    let user = await useStorage.getItem(USER.USER_DATA);
    setUserData(JSON.parse(user));
  }, []);

  useEffect(() => {
    getUserData();
  }, [getUserData]);

  return (
    <SafeAreaView style={{flex: 1}}>
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
            Confirmation
          </Text>
        </View>
      </HeaderComponent>
      <ScrollView>
        <View
          style={{
            padding: 10,
            paddingLeft: 20,
          }}>
          <View style={{marginTop: 10, marginBottom: 10}}>
            <Text style={{fontSize: 16, color: 'black'}}>
              Enforcer Name:
              <Text style={{fontWeight: 'bold'}}>
                {` ${userData?.first_name?.toUpperCase()} ${userData?.middle_name
                  ?.charAt(0)
                  ?.toUpperCase()}. ${userData?.last_name.toUpperCase()}`}
              </Text>
            </Text>
          </View>
          <View style={DetailsItemStyles.viewContainer}>
            <Text numberOfLines={1} style={DetailsItemStyles.itemName}>
              TCT No.:
            </Text>
            <Text style={DetailsItemStyles.itemData}>
              {citationDetails.tct}
            </Text>
          </View>
          <View style={DetailsItemStyles.viewContainer}>
            <Text numberOfLines={1} style={DetailsItemStyles.itemName}>
              Time & Date:
            </Text>
            <Text style={DetailsItemStyles.itemData}>
              {`${moment(citationDetails?.violationDate).format(
                'MM-DD-YYYY',
              )} - ${moment(citationDetails?.violationTime).format(
                'h:mm:ss A',
              )}`}
            </Text>
          </View>
          <View style={DetailsItemStyles.viewContainer}>
            <Text numberOfLines={1} style={DetailsItemStyles.itemName}>
              Location:
            </Text>
            <Text style={DetailsItemStyles.itemData}>
              {`Street: ${citationDetails?.street}\nBarangay: ${citationDetails?.barangay}, \nMunicipality/City: ${citationDetails?.municipality}\nZipcode: ${citationDetails?.zipCode}`}
            </Text>
          </View>
          <View style={DetailsItemStyles.viewContainer}>
            <Text numberOfLines={1} style={DetailsItemStyles.itemName}>
              Violator:
            </Text>
            <Text style={DetailsItemStyles.itemData}>
              {`Name: ${violatorInfo?.lastName}, ${violatorInfo?.firstName} ${violatorInfo?.middleName}\n`}
              {`Gender: ${violatorInfo?.gender}\n`}
              {`Street: ${violatorInfo?.street} \n`}
              {`Barangay: ${violatorInfo?.barangay} \n`}
              {`Municipality: ${violatorInfo?.municipality} \n`}
              {`Zipcode: ${violatorInfo?.zipCode} \n`}
              {`Nationality: ${violatorInfo?.nationality}\n`}
              {`Phone number: ${violatorInfo?.phoneNumber}\n`}
              {`Date of Birth: ${moment(violatorInfo?.dob).format(
                'MM-DD-YYYY',
              )}`}
            </Text>
          </View>
          <View style={DetailsItemStyles.viewContainer}>
            <Text numberOfLines={1} style={DetailsItemStyles.itemName}>
              License Info:
            </Text>
            <Text style={DetailsItemStyles.itemData}>
              {licenseInfo.hasLicense
                ? `Number: ${
                    licenseInfo?.licenseNumber
                  }\nType: ${licenseInfo?.licenseType.toUpperCase()}\nStatus: ${licenseInfo?.licenseStatus.toUpperCase()}`
                : 'Without License'}
            </Text>
          </View>
          <View style={DetailsItemStyles.viewContainer}>
            <Text numberOfLines={1} style={DetailsItemStyles.itemName}>
              Vehicle Info:
            </Text>
            <Text style={DetailsItemStyles.itemData}>
              {`Make: ${vehiclesInfo?.make?.toUpperCase()}\nModel: ${vehiclesInfo?.model?.toUpperCase()}\nPlate: ${
                vehiclesInfo?.hasPlateNumber ? vehiclesInfo?.plateNumber : 'N/A'
              }`}
              {`\nColor: ${vehiclesInfo?.color?.toUpperCase()}\nClass: ${
                vehiclesInfo?.class ? vehiclesInfo?.class?.toUpperCase() : 'N/A'
              }`}
              {`\nBody Markings: ${
                vehiclesInfo?.bodyMarkings ? vehiclesInfo?.bodyMarkings : 'N/A'
              }\nOwner: ${vehiclesInfo?.registeredOwner?.toUpperCase()}`}
              {`\nAddress: ${
                vehiclesInfo?.ownerAddress ? vehiclesInfo?.ownerAddress : 'N/A'
              }\nStatus: ${vehiclesInfo?.vehicleStatus}`}
            </Text>
          </View>
          <View style={DetailsItemStyles.viewContainer}>
            <Text numberOfLines={1} style={DetailsItemStyles.itemName}>
              Violations:
            </Text>
            <Text style={DetailsItemStyles.itemData}>
              {violations.map((data, index) => {
                if (citedViolations.some(user => user === data.id)) {
                  subTotal = parseInt(subTotal) + parseInt(data?.penalty);
                  return `${data?.violation_name} - ₱${data?.penalty}\n`;
                }
              })}
            </Text>
          </View>
          <View style={DetailsItemStyles.viewContainer}>
            <Text
              numberOfLines={1}
              style={[DetailsItemStyles.itemName, {width: '100%'}]}>
              Sub Total Amount: {`₱${subTotal}`}
            </Text>
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
          onPress={() => {
            createCitation();
          }}
          color="#2C74B3"
          size="lg"
          styles={{
            marginRight: 30,
            width: 100,
            position: 'absolute',
            right: 0,
          }}>
          <Text style={{color: 'white', fontFamily: 'Manrope-Bold'}}>
            {!_.isNull(citationId) ? 'Update' : 'Save'}
          </Text>
        </ButtonComponent>
      </View>
    </SafeAreaView>
  );
};

export default ConfirmationScreen;
