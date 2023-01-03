import React from 'react';
import {Modal, Text, Pressable, View} from 'react-native';
import PropTypes from 'prop-types';
import {ModalInterface} from './ModalInterface';

// styles
import ModalStyles from './modal-style';

const ModalComponent = ({
  showModal,
  style,
  children,
}: ModalInterface) => {
  return (
    <View style={ModalStyles.centeredView}>
      <Modal animationType="fade" transparent={true} visible={showModal}>
        <View style={ModalStyles.centeredView}>
          <View style={[ModalStyles.modalView, style]}>
            {children}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalComponent;

ModalComponent.propTypes = {
  showModal: PropTypes.bool,
  setShowModal: PropTypes.func,
  onPress: PropTypes.func,
  modalText: PropTypes.string,
};
