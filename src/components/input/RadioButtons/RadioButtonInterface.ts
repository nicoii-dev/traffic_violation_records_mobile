import {RegisterOptions} from 'react-hook-form';

export interface RadioButtonInterface {
  name: string;
  control: any;
  rules?: RegisterOptions;
  options: Array<object>;
  disabled?: boolean;
  radioButtonTextStyle?: object;
  errorMessage: string | undefined;
  errorStyle?: object;
  headerTitle?: string;
  headerStyles?: object;
}
