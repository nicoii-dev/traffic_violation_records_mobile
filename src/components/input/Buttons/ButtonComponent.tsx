/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import {Button} from '@rneui/themed';
import {ButtonComponentInterface} from './ButtonComponentInterface';

const ButtonComponent = ({
  styles,
  disabled,
  children,
  onPress,
  color,
  size,
  type,
  buttonProps,
}: ButtonComponentInterface) => {
  return (
    <Button
      onPress={onPress}
      style={[{borderRadius: 10}, styles]}
      disabled={disabled}
      color={color}
      size={size}
      type={type}
      {...buttonProps}>
      {children}
    </Button>
  );
};

export default ButtonComponent;