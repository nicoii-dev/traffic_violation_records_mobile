export interface TextInputInterface {
  name: string;
  control: any;
  keyboardType?:
    | string
    | 'default'
    | 'number-pad'
    | 'decimal-pad'
    | 'numeric'
    | 'email-address'
    | 'phone-pad'
    | 'url'
    | 'ascii-capable'
    | 'numbers-and-punctuation'
    | 'name-phone-pad'
    | 'twitter'
    | 'web-search'
    | any;
  defaultValue?: string;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  errorStyle?: object;
  errorMessage: any;
  placeholder?: any;
  editable?: boolean;
  headerStyles?: object;
  maxLength?: number;
  multiline?: boolean;
  numberOfLines?: number;
  headerTitle?: string;
  leftIcon?: string;
  secureTextEntry?: boolean;
  rightIconShow?: 'visibility' | string;
  rightIconHide?: 'visibility-off' | string;
  setValue?: Function | undefined;
  getValues?: Function | undefined;
  show?: boolean;
  setShow?: Function;
  inputStyle?: object;
}
