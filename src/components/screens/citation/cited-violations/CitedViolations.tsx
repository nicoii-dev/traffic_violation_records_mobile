import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

// styles
import CitedViolationsStyles from './cited-violations-styles';

interface CitedViolationsInterface {
    showModal: boolean;
    setShowModal: Function
}

const CitedViolations = ({showModal, setShowModal}: CitedViolationsInterface) => {
  return (
    <>
      <TouchableOpacity onPress={() => {setShowModal(!showModal)}}>
        <View style={CitedViolationsStyles.container}>
          <Text style={CitedViolationsStyles.citedViolationText}>
            Cited Violations
          </Text>
          <Icon name={'create'} size={20} color={'black'} />
        </View>
      </TouchableOpacity>
    </>
  );
};

export default CitedViolations;
