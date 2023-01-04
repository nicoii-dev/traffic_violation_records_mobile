import {
  Text,
  View,
  SectionList,
  SafeAreaView,
  StyleSheet,
  Pressable,
} from 'react-native';
import React, { useState } from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import Toast from 'react-native-simple-toast';

// schema

// components
import ButtonComponent from '../../input/Buttons/ButtonComponent';
import CitationViolations from './violations-list/CitationViolations';

import {CitationInputs} from '../../../config/citationInputs';
import CitationItem from './item';
import CitedViolations from './cited-violations/CitedViolations';
import { citationSchema } from '../../../library/yup-schema/citationSchema';

const CitationComponent = () => {
  const navigation = useNavigation();
  const {citedViolations} = useSelector((store: any) => store.citation);
  const [showModal, setShowModal] = useState<boolean>(false);

  const defaultValues = {
    firstName: '',
    middleName: '',
    lastName: '',
    gender: 'Male',
    licenseType: 'Professional',
  };

  const {
    control,
    setValue,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(citationSchema),
    defaultValues: defaultValues,
  });

  const onSubmit = (data: object) => {
    // getting the age
    const birthDate = new Date(data.dob); 
    const difference = Date.now() - birthDate.getTime();
    const age = new Date(difference);
    console.log(Math.abs(age.getUTCFullYear() - 1970)) 

    
    console.log(data);

  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        width: widthPercentageToDP('90%'),
      }}>
      <CitedViolations showModal={showModal} setShowModal={setShowModal} />
      <Pressable
        disabled={citedViolations.length > 0 ? true : false}
        style={{
          flex: 1,
          justifyContent: 'center',
          width: widthPercentageToDP('90%'),
          height: '100%',
        }}
        onPress={() =>
          Toast.showWithGravity(
            'Please select violation(s) first.',
            Toast.LONG,
            Toast.CENTER,
          )
        }>
        <View
          pointerEvents={citedViolations.length > 0 ? 'auto' : 'none'}
          style={{
            flex: 1,
            justifyContent: 'center',
            width: widthPercentageToDP('90%'),
            height: '100%',
          }}>
          <SectionList
            sections={CitationInputs}
            keyExtractor={(item, index) => String(item) + index}
            renderItem={({item}) => (
              <CitationItem
                item={item}
                control={control}
                errors={errors}
                setValue={setValue}
              />
            )}
            renderSectionHeader={({section: {title}}) => (
              <Text style={styles.header}>{title}</Text>
            )}
            showsVerticalScrollIndicator={false}
            stickySectionHeadersEnabled={true}
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

          {showModal ? (
            <CitationViolations
              showModal={showModal}
              setShowModal={setShowModal}
            />
          ) : null}
        </View>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    marginBottom: 15,
    marginTop: 10,
    fontFamily: 'Manrope-Bold',
    color: 'black',
    backgroundColor: 'white',
  },
});

export default CitationComponent;
