/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';
import {Icon} from '@rneui/themed';
import DetailsItemStyles from './style';

// api
import {FetchAllViolations} from '../../../services/violationApi';

// components
import HeaderComponent from '../../../components/header/HeaderComponent';
import ButtonComponent from '../../../components/input/Buttons/ButtonComponent';

const CitationInfoScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {
    citedViolations,
    violatorInfo,
    licenseInfo,
    vehiclesInfo,
    citationDetails,
  } = useSelector(store => store.citation);
  const [violations, setViolations] = useState([]);
  let totalAmount = 0;

  const fetchHandler = useCallback(async () => {
    const response = await FetchAllViolations();
    setViolations(response);
  }, []);

  useEffect(() => {
    navigation.addListener('focus', () => {
      fetchHandler();
      setTimeout(() => {}, 2000);
    });
  }, [dispatch, fetchHandler, navigation]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <HeaderComponent>
        <View
          style={{
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <View style={{position: 'absolute', left: 30, top: 1}}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <Icon name={'arrow-back'} size={30} color={'white'} />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontFamily: 'Manrope-Bold',
              fontSize: 25,
              color: 'white',
              textAlign: 'center',
            }}>
            Citation Info
          </Text>
          <View style={{position: 'absolute', right: 30, top: 1}}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('CitedViolationScreen');
              }}>
              <Icon name={'edit'} size={30} color={'white'} />
            </TouchableOpacity>
          </View>
        </View>
      </HeaderComponent>
      <ScrollView>
        <View
          style={{
            padding: 10,
            paddingLeft: 20,
          }}>
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
              {`Address: ${violatorInfo?.address}\n`}
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
              {`Number: ${
                licenseInfo?.licenseNumber
              }\nType: ${licenseInfo?.licenseType.toUpperCase()}\nStatus: ${licenseInfo?.licenseStatus.toUpperCase()}`}
            </Text>
          </View>
          <View style={DetailsItemStyles.viewContainer}>
            <Text numberOfLines={1} style={DetailsItemStyles.itemName}>
              Vehicle Info:
            </Text>
            <Text style={DetailsItemStyles.itemData}>
              {`Make: ${vehiclesInfo?.make?.toUpperCase()}\nModel: ${vehiclesInfo?.model?.toUpperCase()}\nPlate: ${
                vehiclesInfo?.plateNumber
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
                  totalAmount = parseInt(totalAmount) + parseInt(data?.penalty);
                  return `${data?.violation_name} - ₱${data?.penalty}\n`;
                }
              })}
            </Text>
          </View>
          <View style={DetailsItemStyles.viewContainer}>
            <Text
              numberOfLines={1}
              style={[DetailsItemStyles.itemName, {width: '100%'}]}>
              Total Amount: {`₱${totalAmount}`}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CitationInfoScreen;
