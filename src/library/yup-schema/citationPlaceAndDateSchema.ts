import * as yup from 'yup';

export const citationPlaceAndDateSchema = yup
  .object({
    violationDate: yup.string().required('Date is required'),
    violationTime: yup.string().required('Time is required'),
    street: yup.string().required('Street is required'),
    municipality: yup.string().required('Mucipality is required'),
    city: yup.string().required('City is required'),
    zipCode: yup.string().required('Zip code is required'),
  })
  .required();
