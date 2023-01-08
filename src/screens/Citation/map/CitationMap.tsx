import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

const CitationMap = () => {
  return (
    <View style={styles.mapcontainer}>
      <MapView
        // provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
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
    height: '100%', width: '100%'
  },
});

export default CitationMap;
