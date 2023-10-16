/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import moment from 'moment';

// reducer
import {
  setViolations,
  setVehiclesInfo,
  setLicenseInfo,
  setViolatorsInfo,
  setCitationDetails,
  setCitationId,
  setInvoice,
} from '../../../store/citation/reducers';

const CitationItem = ({item}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const ViolatorInfo = async data => {
    const violationPayload = JSON.parse(data.violations).map(a => a.id);
    const violatorPayload = {
      violatorId: data?.violator?.id,
      firstName: data?.violator?.first_name,
      middleName: data?.violator?.middle_name,
      lastName: data?.violator?.last_name,
      gender: data?.violator?.gender,
      street: data?.violator?.street,
      barangay: data?.violator?.barangay,
      municipality: data?.violator?.municipality,
      zipcode: data?.violator?.zipcode,
      nationality: data?.violator?.nationality,
      phoneNumber: data?.violator?.phone_number,
      dob: data?.violator?.dob,
    };
    const vehiclesPayload = {
      vehicleId: data?.vehicle?.id,
      make: data?.vehicle?.make,
      model: data?.vehicle?.model,
      plateNumber: data?.vehicle?.plate_number,
      color: data?.vehicle?.color,
      class: data?.vehicle?.class,
      bodyMarkings: data?.vehicle?.body_markings,
      registeredOwner: data?.vehicle?.registered_owner,
      ownerAddress: data?.vehicle?.owner_address,
      vehicleStatus: data?.vehicle?.vehicle_status,
    };
    const licensePayload = {
      licenseId: data?.license?.id,
      licenseNumber: data?.license?.license_number,
      licenseType: data?.license?.license_type,
      licenseStatus: data?.license?.license_status,
    };
    const citationPayload = {
      tct: data?.tct,
      violationDate: data?.date_of_violation,
      violationTime: data?.time_of_violation,
      municipality: data?.municipality,
      zipCode: data?.zipcode,
      barangay: data?.barangay,
      street: data?.street,
    };
    const invoicePayload = {
      citation_id: data.invoice.citation_id,
      created_at: data.invoice.created_at,
      date: data.invoice.date,
      discount: data.invoice.discount,
      id: data.invoice.id,
      status: data.invoice.status,
      sub_total: data.invoice.sub_total,
      total_amount: data.invoice.total_amount,
      updated_at: data.invoice.updated_at,
      violations: data.invoice.violations,
    };
    await dispatch(setCitationId(data?.id));
    await dispatch(setViolations(violationPayload));
    await dispatch(setViolatorsInfo(violatorPayload));
    await dispatch(setVehiclesInfo(vehiclesPayload));
    await dispatch(setLicenseInfo(licensePayload));
    await dispatch(setCitationDetails(citationPayload));
    await dispatch(setInvoice(invoicePayload));
    navigation.navigate('CitationInfoScreen');
  };
  return (
    <>
      <TouchableOpacity onPress={() => ViolatorInfo(item)}>
        <View
          style={{
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            marginTop: 20,
            width: '95%',
            borderWidth: 1,
            padding: 15,
            borderRadius: 5,
          }}>
          <Text
            numberOfLines={1}
            style={{
              // width: '20%',
              fontFamily: 'Manrope-Regular',
              fontSize: 14,
              color: 'black',
              paddingRight: 10,
            }}>
            {`#${item?.id}`}
          </Text>
          <Text
            numberOfLines={1}
            style={{
              // width: '30%',
              fontFamily: 'Manrope-Regular',
              fontSize: 14,
              color: 'black',
            }}>
            {`${moment(item?.date_of_violation).format(
              'MM-DD-YYYY',
            )} / ${moment(item?.time_of_violation).format('hh:mm:ss a')}`}
          </Text>
          <Text
            style={{
              paddingLeft: 10,
              fontFamily: 'Manrope-Regular',
              fontSize: 14,
              color: 'black',
            }}
            numberOfLines={1}>
            {JSON.parse(item?.violations)[0]?.violation_name.length < 16
              ? `${JSON.parse(item?.violations)[0]?.violation_name}`
              : `${JSON.parse(item?.violations)[0]?.violation_name.substring(
                  0,
                  15,
                )}...`}
          </Text>
          {/* <Icon
          name={'arrow-drop-down'}
          size={20}
          color={'black'}
          style={{flex: 1, textAlign: 'right'}}
        /> */}
        </View>
      </TouchableOpacity>
    </>
  );
};

export default CitationItem;
