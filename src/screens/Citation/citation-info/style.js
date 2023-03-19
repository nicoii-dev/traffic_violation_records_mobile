/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const DetailsItemStyles = StyleSheet.create({
  viewContainer: {
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 10,
    width: '100%',
  },
  itemName: {
    width: '30%',
    fontFamily: 'Manrope-Regular',
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
  },
  itemData: {
    paddingLeft: 20,
    fontFamily: 'Manrope-Regular',
    fontSize: 14,
    color: 'black',
  }
});

export default DetailsItemStyles;
