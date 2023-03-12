/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const DetailsItemStyles = StyleSheet.create({
  viewContainer: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 5,
    width: '100%',
  },
  itemName: {
    width: '30%',
    fontFamily: 'Manrope-Regular',
    fontSize: 16,
    color: 'black',
  },
  itemData: {
    paddingLeft: 20,
    fontFamily: 'Manrope-Regular',
    fontSize: 16,
    color: 'black',
  }
});

export default DetailsItemStyles;
