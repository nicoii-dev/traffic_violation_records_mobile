export interface PickerInputInterface {
  name: string;
  control: any;
  defaultValue?: string;
  errorStyle?: object;
  errorMessage?: string;
  label?: string;
  enabled?: boolean;
  styles?: object;
  headerStyles?: object;
  headerTitle?: string;
  setValue?: Function;
  getValues?: Function;
  pickerOptions: Array<string>;
}
