/* eslint-disable prettier/prettier */
import React, {useEffect, useRef} from 'react';
import {View, Animated, Image} from 'react-native';
import PropTypes from 'prop-types';
import SplashStyles from './styles';
import IMAGES from '../../config/images';
import { useStorage } from '../../library/storage/Storage';
import { USER } from '../../library/contants';
import {useDispatch} from 'react-redux';

const SplashScreen = ({navigation}) => {
  const dispatch = useDispatch();
  //const {settings, doneLoading} = useSelector(state => state.settings);

  useEffect(() => {
    const getToken = async () => {
      const token = await useStorage.getItem(USER.ACCESS_TOKEN);

      const timer = setTimeout(() => {
        if (token) {
          navigation.navigate('UserTab');
        } else {
          navigation.navigate('AuthStack');
        }

        return () => {
          clearTimeout(timer);
        };
      }, 2000);
    };

    getToken();
  }, [dispatch, navigation]);

  // First set up animation
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <View style={SplashStyles.container}>
      <Animated.View
        style={[
          {
            // Bind opacity to animated value
            opacity: fadeAnim,
          },
        ]}>
        <Image
          source={IMAGES.LOGO}
          style={SplashStyles.logo}
          resizeMode="cover"
        />
      </Animated.View>
    </View>
  );
};

export default SplashScreen;

SplashScreen.propTypes = {
  navigation: PropTypes.object,
};
