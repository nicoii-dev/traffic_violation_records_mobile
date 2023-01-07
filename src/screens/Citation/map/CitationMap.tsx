import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
// import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {LeafletView} from 'react-native-leaflet-view';

const CitationMap = () => {
  return (
    <View style={styles.mapcontainer}>
      <LeafletView
      // The rest of your props, see the list below
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mapcontainer: {
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default CitationMap;
