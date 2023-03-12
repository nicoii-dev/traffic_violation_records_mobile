import {View, Text} from 'react-native';
import React from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HeaderComponent from '../../../components/header/HeaderComponent';
import PersonalInfoComponent from '../../../components/screens/profile/personal-info/PersonalInfoComponent';
import ButtonComponent from '../../../components/input/Buttons/ButtonComponent';
import { changePasswordSchema } from '../../../library/yup-schema/changePasswordSchema';
import SecurityComponent from '../../../components/screens/profile/security/SecurityComponent';

const SecurityScreen = () => {
  const navigation = useNavigation();

  const defaultValues = {
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  };

  const {
    control,
    setValue,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(changePasswordSchema),
    defaultValues: defaultValues,
  });

  const onSubmit = (data) => {
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
            Security
          </Text>
        </View>
      </HeaderComponent>
      <View style={{marginTop: 10, width: '100%'}}>
        <SecurityComponent control={control} errors={errors} />
      </View>

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: 70,
          width: '100%',
          bottom: 50,
          position: 'absolute',
        }}>
        <ButtonComponent
          onPress={handleSubmit(onSubmit)}
          color="#2C74B3"
          size="lg"
          styles={{width: '50%'}}>
          <Text style={{color: 'white', fontFamily: 'Manrope-Bold'}}>Update</Text>
        </ButtonComponent>
      </View>
    </View>
  );
};

export default SecurityScreen;
