/* eslint-disable react-native/no-inline-styles */
import {View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/core';
import Input from '../../input';
import {COLORS} from '../../../config/constants/variable';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch} from 'react-redux';

// components
import ModalComponent from '../../modal/ModalComponent';

// styles
import FooterStyles from './footer-style';

// action

const LessorFooter = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  // const confirmation = () => {
  //   setShowModal(!showModal);
  //   navigation.navigate('PostScreen');
  //   dispatch(clearSpace());
  // };
  return (
    <View
      style={{
        width: wp('100%'),
        flexDirection: 'row',
        height: props.height ? props.height : hp('10%'),
        backgroundColor: COLORS.GRAY,
        borderWidth: 1,
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        borderBottomWidth: 0,
      }}>
      {props.buttonText ? (
        <View style={FooterStyles.buttonContainer}>
          <Input.Button
            // text style
            text={props.buttonText}
            textAlign="center"
            justifyContent="center"
            fontFamily="Manrope-Regular"
            fontSize={18}
            color={COLORS.WHITE}
            bgcolor={props.buttonBgColor ? props.buttonBgColor : COLORS.NAVY}
            onPress={() => {
              setShowModal(true);
            }}
            // button styles
            styles={{
              borderRadius: 9,
              width: '100%',
              height: 40,
            }}
          />
        </View>
      ) : null}
      <View
        style={{
          right: props.buttonText ? wp('10%') : null,
          left: props.buttonText ? null : wp('10%'),
          position: 'absolute',
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          {/* <Text style={FooterStyles.backText}>Back</Text> */}
          <Icon name={'arrow-back-ios'} size={25} style={{marginLeft: 30}} />
        </TouchableOpacity>
        {props.buttonText === undefined ? null : (
          <TouchableOpacity onPress={props.onPress}>
            <Icon
              name={'arrow-forward-ios'}
              size={25}
              style={{marginLeft: 40}}
            />
          </TouchableOpacity>
        )}
      </View>
      <ModalComponent
        showModal={showModal}
        setShowModal={setShowModal}
        modalText={'Are you sure \n you want to cancel?'}
        onPress={confirmation}
      />
    </View>
  );
};

export default LessorFooter;

LessorFooter.propTypes = {
  height: PropTypes.string,
  buttonText: PropTypes.string,
  buttonBgColor: PropTypes.string,
  onPress: PropTypes.func,
};
