import {View, Text, TouchableOpacity, Pressable} from 'react-native';
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TextInputController from '../../input/TextInput/TextInputController';
import ModalComponent from '../../modal/ModalComponent';


const ListOfCategoryItem = ({item}) => {
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);
  const [selectedData, setSelectedData] = useState([{title: '', penalty: ''}]);

  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate('Violations', { id: item.id })}>
        <View
          style={{
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20,
            width: '100%',
            borderWidth: 1,
            borderColor: '#0066CC',
            padding: 15
          }}>
          <Text
            numberOfLines={1}
            style={{
              fontFamily: 'Manrope-Regular',
              fontSize: 30,
              color: 'black',
              fontWeight: 'bold',
              fontStyle: 'italic',
              textAlign: 'center'
            }}>
            {item?.category_name}
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default ListOfCategoryItem;
