/* eslint-disable prettier/prettier */
import * as yup from 'yup';

export const citationPlaceAndDateSchema = yup
  .object({
    violationDate: yup.string().required('Date is required'),
    violationTime: yup.string().required('Time is required'),
    municipality: yup.string().required('Mucipality is required'),
    zipCode: yup.string().required('Zip code is required'),
    barangay: yup.string().required('Barangay is required'),
    street: yup.string().required('Street is required'),
  })
  .required();
