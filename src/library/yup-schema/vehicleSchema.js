/* eslint-disable prettier/prettier */
import * as yup from 'yup';

export const vehicleSchema = yup
  .object({
    plateNumber: yup.string().required('Plate number is required'),
    make: yup.string().required('Make is required'),
    model: yup.string().required('Model is required'),
    color: yup.string().required('Color is required'),
    registeredOwner: yup.string().required('Registered owner is required'),
  })
  .required();
