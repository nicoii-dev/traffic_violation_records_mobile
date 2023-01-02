import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TextInputController from '../../input/TextInput/TextInputController';
import ModalComponent from '../../modal/ModalComponent';

interface itemInterface {
  item: any;
}

const ListOfViolationItem = ({item}: itemInterface) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedData, setSelectedData] = useState({});

  const ViolationInfo = (item: object) => {
    setShowModal(!showModal);
    setSelectedData(item)
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
            {item.title}
          </Text>
          <Text
            style={{
              paddingLeft: 20,
              fontFamily: 'Manrope-Regular',
              fontSize: 16,
              color: 'black',
            }}>
            {`P${item.penalty.toFixed(2)}`}
          </Text>
          <Icon
            name={'arrow-drop-down'}
            size={20}
            color={'black'}
            style={{flex: 1, textAlign: 'right'}}
          />
        </View>
      </TouchableOpacity>
      <ModalComponent
        showModal={showModal}
        setShowModal={setShowModal}
        modalData={selectedData}
      />
    </>
  );
};

export default ListOfViolationItem;
