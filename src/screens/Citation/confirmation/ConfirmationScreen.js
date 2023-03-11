import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

// components
import HeaderComponent from '../../../components/header/HeaderComponent'

const ConfirmationScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
      <HeaderComponent>
        <View
          style={{
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontFamily: 'Manrope-Bold',
              fontSize: 25,
              color: 'white',
              textAlign: 'center',
            }}>
            Confirmation
          </Text>
        </View>
      </HeaderComponent>
    </SafeAreaView>
  )
}

export default ConfirmationScreen