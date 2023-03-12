/* eslint-disable prettier/prettier */
/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React, {useState} from 'react';
import DetailsItemStyles from './style';

// reducer

const ConfirmationComponent = ({item}) => {

  return (
    <>
      <View
        style={{
          borderRadius: 10,
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
            {`${item?.time_of_violation} - ${item?.date_of_violation}`}
          </Text>
        </View>
        <View style={DetailsItemStyles.viewContainer}>
          <Text numberOfLines={1} style={DetailsItemStyles.itemName}>
            Location:
          </Text>
          <Text style={DetailsItemStyles.itemData}>
            {`${item?.street}\n${item?.barangay}, ${item?.municipality}\n${item?.zipcode}`}
          </Text>
        </View>
        <View style={DetailsItemStyles.viewContainer}>
          <Text numberOfLines={1} style={DetailsItemStyles.itemName}>
            Name:
          </Text>
          <Text style={DetailsItemStyles.itemData}>
            {`${item?.violator?.last_name}, ${item?.violator?.first_name} ${item?.violator?.middle_name}`}
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
            {`\nOwner: ${item?.vehicle?.registered_owner}\nAddress: ${item?.vehicle?.owner_address}`}
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
          <Text numberOfLines={1} style={DetailsItemStyles.itemName}>
            Amount:
          </Text>
          <Text style={DetailsItemStyles.itemData}>
            {`₱${item?.invoice?.total_amount}`}
          </Text>
        </View>
        <View style={DetailsItemStyles.viewContainer}>
          <Text numberOfLines={1} style={DetailsItemStyles.itemName}>
            Status:
          </Text>
          <Text
            style={[
              DetailsItemStyles.itemData,
              {color: item?.invoice?.status == 1 ? 'red' : 'green'},
            ]}>
            {item?.invoice?.status == 1 ? 'UNPAID' : 'PAID'}
          </Text>
        </View>
      </View>
    </>
  );
};

export default ConfirmationComponent;
