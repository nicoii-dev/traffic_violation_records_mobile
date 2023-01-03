import {View, Text, TouchableOpacity, Pressable} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TextInputController from '../../input/TextInput/TextInputController';
import ModalComponent from '../../modal/ModalComponent';

interface itemInterface {
  item: any;
}

interface selectedDataInterface {
  title: string;
  penalty: number | string;
}

const ListOfViolationItem = ({item}: itemInterface) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedData, setSelectedData] = useState<selectedDataInterface[]>([{title: '', penalty: ''}]);

  const ViolationInfo = (item: object) => {
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
      <ModalComponent showModal={showModal} setShowModal={setShowModal}>
        <Text
          style={{
            fontFamily: 'Manrope-Bold',
            textAlign: 'center',
            fontSize: 18,
            color: 'black',
          }}>
          {selectedData.title}
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
          REPUBLIC ACT NO. 10054 AN ACT MANDATING ALL MOTORCYCLE RIDERS TO WEAR
          STANDARD PROTECTIVE MOTORCYCLE HELMETS WHILE DRIVING AND PROVIDING
          PENALTIES THEREFOR
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
            {`P${selectedData?.penalty?.toFixed(2)}`}
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
