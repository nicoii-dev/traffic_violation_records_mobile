import {View, Text} from 'react-native';
import React from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HeaderComponent from '../../../components/header/HeaderComponent';
import PersonalInfoComponent from '../../../components/screens/profile/personal-info/PersonalInfoComponent';
import ButtonComponent from '../../../components/input/Buttons/ButtonComponent';
import { profileSchema } from '../../../library/yup-schema/profileSchema';

const PersonalInfoScreen = () => {
  const navigation = useNavigation();

  const defaultValues = {
    firstName: '',
    lastName: '',
    middleName: '',
    gender: 'Male',
    phoneNumber: '',
    dob: new Date(),
  };

  const {
    control,
    setValue,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(profileSchema),
    defaultValues: defaultValues,
  });

  const onSubmit = (data: object) => {
    console.log(data)
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        width: '95%',
        alignSelf: 'center',
      }}>
      <HeaderComponent>
        <Icon
          name={'arrow-back'}
          size={30}
          color={'white'}
          style={{position: 'absolute', left: 10}}
          onPress={() => navigation.goBack()}
        />
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
            {`Personal \nInformation`}
          </Text>
        </View>
      </HeaderComponent>
      <View style={{marginTop: 10, width: '100%'}}>
        <PersonalInfoComponent control={control} errors={errors} />
      </View>

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: 70,
          width: '100%',
          bottom: 10,
          position: 'absolute',
        }}>
        <ButtonComponent
          onPress={handleSubmit(onSubmit)}
          color="#2C74B3"
          size="lg"
          styles={{width: '50%'}}>
          <Text style={{color: 'white', fontFamily: 'Manrope-Bold'}}>Save</Text>
        </ButtonComponent>
      </View>
    </View>
  );
};

export default PersonalInfoScreen;
