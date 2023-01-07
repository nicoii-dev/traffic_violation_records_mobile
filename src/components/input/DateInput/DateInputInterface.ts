import {RegisterOptions} from 'react-hook-form';

export interface DateInputInterface {
  mode: 'date' | 'time';
  name: string;
  control: any;
  rules?: RegisterOptions;
  disabled?: boolean;
  styles?: object;
  headerStyles?: object;
  headerTitle?: string;
  errorMessage: string | undefined;
  errorStyle?: object;
  display: 'default' | 'spinner' | 'compact' | 'calendar' | 'clock';
  iconData?: {
    iconName: string,
    iconSize: number,
    iconColor: string,
  }
}
