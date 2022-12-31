export interface ButtonComponentInterface {
  children?: React.ReactNode;
  disabled?: boolean;
  onPress: Function;
  styles?: object;
  color?: 'primary' | 'secondary' | 'warning' | 'error' | any;
  size?: 'sm' | 'md' | 'lg';
  type?: 'solid' | 'outline' | 'clear';
  buttonProps?: any;
}
