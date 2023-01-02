import React from 'react';
import {Modal, Text, Pressable, View} from 'react-native';
import PropTypes from 'prop-types';
import {ModalInterface} from './ModalInterface';

// styles
import ModalStyles from './modal-style';

const ModalComponent = ({
  showModal,
  setShowModal,
  modalData,
}: ModalInterface) => {
  return (
    <View style={ModalStyles.centeredView}>
      <Modal animationType="fade" transparent={true} visible={showModal}>
        <View style={ModalStyles.centeredView}>
          <View style={ModalStyles.modalView}>
            <Text style={ModalStyles.modalText}>{modalData.title}</Text>
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
              REPUBLIC ACT NO. 10054 AN ACT MANDATING ALL MOTORCYCLE RIDERS TO
              WEAR STANDARD PROTECTIVE MOTORCYCLE HELMETS WHILE DRIVING AND
              PROVIDING PENALTIES THEREFOR
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
                {`P${modalData?.penalty?.toFixed(2)}`}
              </Text>
            </View>

            <View
              style={{position: 'absolute', bottom: 10, alignSelf: 'center'}}>
              <Pressable onPress={() => setShowModal(!showModal)}>
                <View>
                  <Text
                    style={{
                      fontFamily: 'Manrope-Regular',
                      fontSize: 16,
                      textDecorationLine: 'underline',
                    }}>
                    Close
                  </Text>
                </View>
              </Pressable>
            </View>
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
