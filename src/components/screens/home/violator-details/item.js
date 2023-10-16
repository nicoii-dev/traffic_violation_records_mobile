/* eslint-disable prettier/prettier */
/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React, {useState, useCallback, useEffect} from 'react';
import moment from 'moment';
import DetailsItemStyles from './style';
import {useStorage} from '../../../../library/storage/Storage';
import {USER} from '../../../../library/contants';
// reducer

const ViolatorDetailsList = ({item}) => {
  const [userData, setUserData] = useState();

  const getUserData = useCallback(async () => {
    let user = await useStorage.getItem(USER.USER_DATA);
    setUserData(JSON.parse(user));
  }, []);

  useEffect(() => {
    getUserData();
  }, [getUserData]);

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
            flexDirection: 'row',
            marginTop: 5,
            width: '100%',
          }}>
          <Text
            style={{
              width: '40%',
              fontFamily: 'Manrope-Regular',
              fontSize: 16,
              color: 'black',
            }}>
            Enforcer Name:
          </Text>
          <Text
            style={{
              fontFamily: 'Manrope-Regular',
              fontSize: 16,
              color: 'black',
            }}>
            {` ${userData?.first_name?.toUpperCase()} ${userData?.middle_name
              ?.charAt(0)
              ?.toUpperCase()}. ${userData?.last_name.toUpperCase()}`}
          </Text>
        </View>
        <View style={DetailsItemStyles.viewContainer}>
            <Text numberOfLines={1} style={DetailsItemStyles.itemName}>
              TCT No.:
            </Text>
            <Text style={DetailsItemStyles.itemData}>
              {`${item.tct}`}
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
            {`${item?.street?.toUpperCase()}\n${item?.barangay?.toUpperCase()}, ${item?.municipality?.toUpperCase()}\n${
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
            {`Street: ${item?.violator?.street.toUpperCase()}\n`}
            {`Barangay: ${item?.violator?.barangay.toUpperCase()}\n`}
            {`Municipality: ${item?.violator?.municipality.toUpperCase()}\n`}
            {`Zipcode: ${item?.violator?.zipcode.toUpperCase()}\n`}
            {`Nationality: ${item?.violator?.nationality?.toUpperCase()}\n`}
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
              color:
                item?.invoice?.status === 'unpaid'
                  ? 'red'
                  : item?.invoice?.status === 'processing'
                  ? 'blue'
                  : 'green',
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
