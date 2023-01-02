import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { COLORS } from '../../config/colors';

const ModalStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('100%'),
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: wp('80%'),
    height: hp('40%'),
  },
  buttonContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20,
    right: 40,
  },
  buttonNo: {
    marginRight: 15,
  },
  buttonYes: {
    marginLeft: 15,
  },
  textStyle: {
    color: COLORS.BLACK,
    fontFamily: 'Manrope-Bold',
    textAlign: 'center',
    fontSize: 18,
  },
  modalText: {
    fontFamily: 'Manrope-Regular',
    textAlign: 'center',
    fontSize: 18,
    color: 'black'
  },
});

export default ModalStyles;
