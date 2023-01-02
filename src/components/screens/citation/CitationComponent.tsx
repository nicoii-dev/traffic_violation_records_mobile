import {
  Text,
  View,
  SectionList,
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import React from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';

// schema

// components
import ButtonComponent from '../../input/Buttons/ButtonComponent';

import {CitationInputs} from '../../../config/citationInputs';
import CitationItem from './item';

const CitationComponent = () => {
  const navigation = useNavigation();

  const defaultValues = {
    email: 'example@gmail.com',
    password: '111111',
  };

  const {
    control,
    setValue,
    handleSubmit,
    formState: {errors},
  } = useForm({
    // resolver: yupResolver(loginSchema),
    defaultValues: defaultValues,
  });

  const onSubmit = (data: object) => {
    console.log(data);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        width: widthPercentageToDP('90%'),
      }}>
      <SectionList
        sections={CitationInputs}
        keyExtractor={(item, index) => String(item) + index}
        renderItem={({item}) => <CitationItem item={item} control={control} errors={errors?.email?.message} setValue={setValue} />}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.header}>{title}</Text>
        )}
        showsVerticalScrollIndicator={false}
        style={{marginTop: 10}}
      />

      <View style={{paddingTop: heightPercentageToDP(5), marginBottom: 10}}>
        <ButtonComponent
          onPress={handleSubmit(onSubmit)}
          color="#2C74B3"
          size="lg"
          styles={{}}>
          <Text style={{color: 'white', fontFamily: 'Manrope-Bold'}}>
            Save
          </Text>
        </ButtonComponent>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    marginBottom: 20,
    fontFamily: 'Manrope-Bold'
  },
});

export default CitationComponent;
