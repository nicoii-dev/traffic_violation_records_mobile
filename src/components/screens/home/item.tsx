import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';


interface itemInterface {
  item: any;
}

const ListOfDrivers = ({item}: itemInterface) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedData, setSelectedData] = useState({});

  const ViolationInfo = (item: object) => {
    setShowModal(!showModal);
    setSelectedData(item)
  };
  return (
    <>
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
              width: '40%',
              fontFamily: 'Manrope-Regular',
              fontSize: 16,
              color: 'black',
            }}>
            {item.driversName}
          </Text>
          <Text
            style={{
              paddingLeft: 20,
              fontFamily: 'Manrope-Regular',
              fontSize: 16,
              color: 'black',
            }}>
            {item.violation}
          </Text>
          <Icon
            name={'arrow-drop-down'}
            size={20}
            color={'black'}
            style={{flex: 1, textAlign: 'right'}}
          />
        </View>

    </>
  );
};

export default ListOfDrivers;
