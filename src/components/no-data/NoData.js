/* eslint-disable prettier/prettier */
import {View, Text, ScrollView, RefreshControl} from 'react-native';
import React from 'react';

const NoData = ({fetchFunction}) => {
  const onRefresh = React.useCallback(() => {
    fetchFunction();
  }, [fetchFunction]);

  return (
    <ScrollView
      style={{
        flex: 1,
        width: '100%',
      }}
      contentContainerStyle={{
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
      }}
      refreshControl={
        <RefreshControl refreshing={false} onRefresh={onRefresh} />
      }>
      <Text style={{fontSize: 18, fontFamily: 'courier', fontWeight: 'bold'}}>
        No available data
      </Text>
    </ScrollView>
  );
};

export default NoData;
