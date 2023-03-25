/* eslint-disable prettier/prettier */
/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React, {useState} from 'react';
import moment from 'moment';
import DetailsItemStyles from './style';

// reducer

const ViolatorDetailsList = ({item}) => {
  console.log(item);
  return (
    <>
      <View
        style={{
          borderRadius: 5,
          borderWidth: 1,
          paddingLeft: 5,
          paddingRight: 5,
          paddingBottom: 5,
          marginTop: 10,
        }}>
        <View
          style={{
            alignSelf: 'flex-start',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            marginTop: 5,
            width: '100%',
          }}>
          <Text
            numberOfLines={1}
            style={{
              width: '30%',
              fontFamily: 'Manrope-Regular',
              fontSize: 16,
              color: 'black',
            }}>
            Citation ID:
          </Text>
          <Text
            style={{
              paddingLeft: 20,
              fontFamily: 'Manrope-Regular',
              fontSize: 16,
              color: 'black',
            }}>
            {`#${item?.id}`}
          </Text>
        </View>
        <View style={DetailsItemStyles.viewContainer}>
          <Text numberOfLines={1} style={DetailsItemStyles.itemName}>
            Time & Date:
          </Text>
          <Text style={DetailsItemStyles.itemData}>
            {`${moment(item?.date_of_violation).format(
              'MM-DD-YYYY',
            )} - ${moment(item?.time_of_violation).format('h:mm:ss A')}`}
          </Text>
        </View>
        <View style={DetailsItemStyles.viewContainer}>
          <Text numberOfLines={1} style={DetailsItemStyles.itemName}>
            Location:
          </Text>
          <Text style={DetailsItemStyles.itemData}>
            {`${item?.street.toUpperCase()}\n${item?.barangay.toUpperCase()}, ${item?.municipality.toUpperCase()}\n${
              item?.zipcode
            }`}
          </Text>
        </View>
        <View style={DetailsItemStyles.viewContainer}>
          <Text numberOfLines={1} style={DetailsItemStyles.itemName}>
            Violator:
          </Text>
          <Text style={DetailsItemStyles.itemData}>
            {`Name: ${item?.violator?.last_name}, ${item?.violator?.first_name} ${item?.violator?.middle_name}\n`}
            {`Address: ${item?.violator?.address.toUpperCase()}\n`}
            {`Nationality: ${item?.violator?.nationality.toUpperCase()}\n`}
            {`Phone number: ${item?.violator?.phone_number}\n`}
            {`Date of Birth: ${moment(item?.violator?.dob).format(
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
              item?.license?.license_number
            }\nType: ${item?.license?.license_type.toUpperCase()}\nStatus: ${item?.license?.license_status.toUpperCase()}`}
          </Text>
        </View>
        <View style={DetailsItemStyles.viewContainer}>
          <Text numberOfLines={1} style={DetailsItemStyles.itemName}>
            Vehicle Info:
          </Text>
          <Text style={DetailsItemStyles.itemData}>
            {`Make: ${item?.vehicle?.make.toUpperCase()}\nModel: ${item?.vehicle?.model.toUpperCase()}\nPlate: ${
              item?.vehicle?.plate_number
            }`}
            {`\nColor: ${item?.vehicle?.color.toUpperCase()}\nStatus: ${item?.vehicle?.vehicle_status.toUpperCase()}`}
            {`\nOwner: ${
              item?.vehicle?.registered_owner
            }\nAddress: ${item?.vehicle?.owner_address.toUpperCase()}`}
          </Text>
        </View>
        <View style={DetailsItemStyles.viewContainer}>
          <Text numberOfLines={1} style={DetailsItemStyles.itemName}>
            Violations:
          </Text>
          <Text style={DetailsItemStyles.itemData}>
            {JSON.parse(item?.violations).map((data, index) => {
              return `${data?.violation_name}\n`;
            })}
          </Text>
        </View>
        <View style={DetailsItemStyles.viewContainer}>
          <Text
            numberOfLines={1}
            style={{
              fontFamily: 'Manrope-Regular',
              fontSize: 15,
              color: 'black',
              fontWeight: 'bold',
            }}>
            Amount: {`₱${item?.invoice?.total_amount}`}
          </Text>
        </View>
        <View style={{marginTop: 10, flexDirection: 'row'}}>
          <Text
            numberOfLines={1}
            style={{
              fontFamily: 'Manrope-Regular',
              fontSize: 15,
              color: 'black',
              fontWeight: 'bold',
            }}>
            Status:
          </Text>
          <Text
            style={{
              color: item?.invoice?.status === 'unpaid' ? 'red' : item?.invoice?.status === 'processing' ? 'blue' : 'green',
              fontFamily: 'Manrope-Regular',
              fontSize: 15,
              marginLeft: 5,
              fontWeight: 'bold',
            }}>
            {item?.invoice?.status.toUpperCase()}
          </Text>
        </View>
      </View>
    </>
  );
};

export default ViolatorDetailsList;
