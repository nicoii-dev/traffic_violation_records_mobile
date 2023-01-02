/* eslint-disable eqeqeq */
/* eslint-disable no-alert */

import {Platform, Alert, PermissionsAndroid} from 'react-native';
import {
  check,
  checkMultiple,
  requestMultiple,
  RESULTS,
  PERMISSIONS,
} from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';
// import {useStorage} from '../storage';

// // redux
// import {setLocation} from '../../store/map/actions';
// import {setCoordinates} from '../../store/post/actions';

export const locationPermission = () => {
  return async dispatch => {
    // choose platform permissions
    const platformPermission = Platform.OS.includes('android')
      ? PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
      : [PERMISSIONS.IOS.LOCATION_ALWAYS, PERMISSIONS.IOS.LOCATION_WHEN_IN_USE];

    // const getCurrentLocation = () => {
    //   Geolocation.getCurrentPosition(
    //     //Will give you the current location
    //     async position => {
    //       const payload = {
    //         lat: parseFloat(position.coords.latitude),
    //         lng: parseFloat(position.coords.longitude),
    //         maxDistance: 10,
    //       };
    //       await dispatch(setLocation(payload));
    //       const latitude = parseFloat(position.coords.latitude);
    //       const longitude = parseFloat(position.coords.longitude);
    //       const result = await dispatch(setCoordinates({latitude, longitude}));
    //       await useStorage.setItem('COUNTRY', result.country);
    //     },
    //     error => alert(error.message),
    //     {
    //       enableHighAccuracy: true,
    //       timeout: 20000,
    //       maximumAge: 1000,
    //     },
    //   );
    // };

    // check location permission Android or IOS
    const devicesLocPermission = async () => {
      try {
        if (Platform.OS == 'android') {
          await checkLocAndroid();
        } else if (Platform.OS == 'ios') {
          await checkLocIos();
        }
      } catch (error) {
        console.error({error});
      }
    };

    // checking location android devices
    const checkLocAndroid = async () => {
      await check(platformPermission).then(async status => {
        console.log(status);
        switch (status) {
          case RESULTS.DENIED:
            await requestLocationPermission();
            break;
          case RESULTS.GRANTED:
            await getCurrentLocation();
            break;
          case RESULTS.BLOCKED:
            await requestLocationPermission();
            break;
        }
      });
    };

    // checking location IOS devices
    const checkLocIos = async () => {
      await checkMultiple(platformPermission).then(async status => {
        let result = [
          status[PERMISSIONS.IOS.LOCATION_ALWAYS],
          status[PERMISSIONS.IOS.LOCATION_WHEN_IN_USE],
        ];

        console.log('Check Result Permission in Ios', result);

        if (result.every(_result => _result == RESULTS.UNAVAILABLE)) {
          console.log('Result Unavailable', RESULTS.UNAVAILABLE);
          // * unavailable
          Alert.alert(
            'Error',
            'Location Permission is unavailable in your device!',
            [
              {
                text: 'Exit',
                onPress: () => {
                  //   navigation.goBack();
                },
              },
            ],
          );
        } else if (result.every(_result => _result == RESULTS.DENIED)) {
          console.log('Result Denied', RESULTS.DENIED);
          // * denied the permission
          await requestLocationPermission();
        } else if (result.includes(RESULTS.GRANTED)) {
          console.log('Result Granted', RESULTS.GRANTED);
          await useStorage.setItem(
            'DEVICE.PERMISSION.LOCATION',
            RESULTS.GRANTED,
          );
          // * either of the permission is granted
          // await useStorage.setItem(DEVICE.PERMISSION.LOCATION, RESULTS.GRANTED);
          getCurrentLocation();
        } else if (result.every(_result => _result == RESULTS.BLOCKED)) {
          console.log('Result Blocked', RESULTS.BLOCKED);
          await useStorage.setItem(
            'DEVICE.PERMISSION.LOCATION',
            RESULTS.BLOCKED,
          );
          // dispatch(setLocation([]));
        }
      });
    };

    // * get device permission
    const requestLocationPermission = async () => {
      try {
        if (Platform.OS == 'android') {
          await requestPermAndroid();
        } else if (Platform.OS == 'ios') {
          await requestPermIos();
        }
      } catch (error) {
        console.error({error});
      }
    };

    // request permisson for android devices
    const requestPermAndroid = async () => {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        getCurrentLocation();
        return true;
      } else {
        //state(false)
        return false;
      }
    };

    // * request permission ios
    const requestPermIos = async () => {
      await requestMultiple(platformPermission).then(async status => {
        let result = [
          status[PERMISSIONS.IOS.LOCATION_ALWAYS],
          status[PERMISSIONS.IOS.LOCATION_WHEN_IN_USE],
        ];
        console.log({result});

        if (result.every(_result => _result == RESULTS.UNAVAILABLE)) {
          // * unavailable
          await useStorage.setItem(
            'DEVICE.PERMISSION.LOCATION',
            RESULTS.UNAVAILABLE,
          );
        } else if (result.every(_result => _result == RESULTS.DENIED)) {
          // * denied the permission
          await useStorage.setItem(
            'DEVICE.PERMISSION.LOCATION',
            RESULTS.DENIED,
          );
        } else if (result.includes(RESULTS.GRANTED)) {
          getCurrentLocation();
          // * either of the permission is granted
          await useStorage.setItem(
            'DEVICE.PERMISSION.LOCATION',
            RESULTS.GRANTED,
          );
        } else if (result.every(_result => _result == RESULTS.BLOCKED)) {
          // * permission is blocked!
          await useStorage.setItem(
            'DEVICE.PERMISSION.LOCATION',
            RESULTS.BLOCKED,
          );
        }
      });
    };

    devicesLocPermission();
  };
};
