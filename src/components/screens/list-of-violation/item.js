/* eslint-disable prettier/prettier */
import {View, Text, TouchableOpacity, Pressable} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TextInputController from '../../input/TextInput/TextInputController';
import ModalComponent from '../../modal/ModalComponent';

const ListOfViolationItem = ({item}) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedData, setSelectedData] = useState([{title: '', penalty: ''}]);

  const ViolationInfo = item => {
    setShowModal(!showModal);
    setSelectedData(item);
  };
  return (
    <>
      <TouchableOpacity onPress={() => ViolationInfo(item)}>
        <View
          style={{
            alignSelf: 'flex-start',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            marginTop: 20,
            width: '100%',
          }}>
          <Text
            numberOfLines={1}
            style={{
              width: '60%',
              fontFamily: 'Manrope-Regular',
              fontSize: 16,
              color: 'black',
            }}>
            {item?.violation_name}
          </Text>
          <Text
            style={{
              paddingLeft: 20,
              fontFamily: 'Manrope-Regular',
              fontSize: 16,
              color: 'black',
            }}>
            {`P${parseInt(item?.penalty)?.toFixed(2)}`}
          </Text>
          <Icon
            name={'arrow-drop-down'}
            size={20}
            color={'black'}
            style={{flex: 1, textAlign: 'right'}}
          />
        </View>
      </TouchableOpacity>
      <ModalComponent showModal={showModal} setShowModal={setShowModal}>
        <Text
          style={{
            fontFamily: 'Manrope-Bold',
            textAlign: 'center',
            fontSize: 18,
            color: 'black',
          }}>
          {selectedData?.violation_name}
        </Text>
        <Text
          style={{
            fontFamily: 'Manrope-Regular',
            color: 'black',
            textAlign: 'left',
            marginTop: 20,
            paddingLeft: 10,
          }}>
          Description:
        </Text>
        <Text
          style={{
            fontFamily: 'Manrope-Regular',
            color: 'black',
            textAlign: 'left',
            marginTop: 5,
            paddingLeft: 10,
          }}>
          {selectedData?.description}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              fontFamily: 'Manrope-Regular',
              color: 'black',
              textAlign: 'left',
              marginTop: 20,
              paddingLeft: 10,
            }}>
            Penalty:
          </Text>
          <Text
            style={{
              fontFamily: 'Manrope-Bold',
              color: 'black',
              textAlign: 'left',
              marginTop: 20,
              paddingLeft: 10,
            }}>
            {`P${parseInt(selectedData?.penalty)?.toFixed(2)}`}
          </Text>
        </View>

        <View style={{position: 'absolute', bottom: 10, alignSelf: 'center'}}>
          <Pressable onPress={() => setShowModal(!showModal)}>
            <View>
              <Text
                style={{
                  fontFamily: 'Manrope-Regular',
                  fontSize: 16,
                  textDecorationLine: 'underline',
                  color: 'black',
                }}>
                Close
              </Text>
            </View>
          </Pressable>
        </View>
      </ModalComponent>
    </>
  );
};

export default ListOfViolationItem;
