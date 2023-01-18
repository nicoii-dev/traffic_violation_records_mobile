import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FastImage from 'react-native-fast-image';
import { useNavigation } from '@react-navigation/native';
import IMAGES from '../../config/images';
import {COLORS} from '../../config/colors';

// components
import HeaderComponent from '../../components/header/HeaderComponent';
import ButtonComponent from '../../components/input/Buttons/ButtonComponent';
// styles
import ProfileScreenStyle from './profile-screen-styles';

const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <HeaderComponent height={300}>
        <View style={{alignItems: 'center'}}>
          <FastImage
            source={IMAGES.PROFILE_LOGO}
            style={{
              height: 100,
              width: 100,
              borderRadius: 200,
              marginBottom: 10,
            }}
          />
          <Text
            style={{
              fontFamily: 'Manrope-Bold',
              fontSize: 18,
              color: 'white',
            }}>
            Traffic Enforcer
          </Text>
          <Text
            style={{
              fontFamily: 'Manrope-Regular',
              fontSize: 14,
              color: 'white',
            }}>
            trafficenforcer@gmail.com
          </Text>
        </View>
      </HeaderComponent>
      <View style={{width: '100%'}}>
        <View style={ProfileScreenStyle.accountSettingsContainer}>
          <Text style={ProfileScreenStyle.accountSettingsText}>
            Account Settings
          </Text>
        </View>
        <View style={{width: '70%', alignSelf: 'center', marginTop: 20}}>
          <TouchableOpacity onPress={() => navigation.navigate('PersonalInfoScreen')}>
            <View style={ProfileScreenStyle.personalContainer}>
              <Text style={ProfileScreenStyle.personalText}>
                Personal Information
              </Text>
              <Icon
                name={'arrow-forward-ios'}
                size={20}
                color={'black'}
                style={ProfileScreenStyle.icon}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('SecurityScreen')}>
            <View style={ProfileScreenStyle.securityContainer}>
              <Text style={ProfileScreenStyle.securityText}>Security</Text>
              <Icon
                name={'arrow-forward-ios'}
                size={20}
                color={'black'}
                style={ProfileScreenStyle.icon}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('AboutScreen')}>
            <View style={ProfileScreenStyle.securityContainer}>
              <Text style={ProfileScreenStyle.securityText}>About</Text>
              <Icon
                name={'arrow-forward-ios'}
                size={20}
                color={'black'}
                style={ProfileScreenStyle.icon}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{position: 'absolute', bottom: 20, width: '50%'}}>
        <ButtonComponent
          onPress={() => {}}
          color={COLORS.DARK_BLUE}
          size="lg"
          styles={{}}>
          <Text style={{color: 'white', fontFamily: 'Manrope-Bold'}}>
            Logout
          </Text>
        </ButtonComponent>
      </View>
    </View>
  );
};

export default ProfileScreen;
