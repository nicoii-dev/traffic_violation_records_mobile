/* eslint-disable prettier/prettier */
import nationalyList from '../assets/example-data/nationalityList.json';
export const CitationInputs = [
  {
    title: 'Drivers Personal Info',
    data: [
      {name: 'firstName', header: 'First name', placeholder: 'First name'},
      {name: 'middleName', header: 'Middle name', placeholder: 'Middle name'},
      {name: 'lastName', header: 'Last name', placeholder: 'Last name'},
      {
        name: 'gender',
        header: 'Gender',
        placeholder: 'Gender',
        inputType: 'picker',
        pickerOptions: ['Male', 'Female'],
      },
      {name: 'address', header: 'Address', placeholder: 'Address'},
      {
        name: 'nationality',
        header: 'Nationality',
        placeholder: 'Nationality',
        inputType: 'picker',
        pickerOptions: nationalyList,
      },
      {
        name: 'phoneNumber',
        header: 'Phone Number',
        placeholder: '09XX-XXX-XXXX',
        keyboardType: 'numeric',
        maxLength: 11,
      },
      {
        name: 'dob',
        header: 'Date of birth',
        placeholder: 'Date of birth',
        inputType: 'date',
      },
    ],
  },
  {
    title: 'Drivers License Info',
    data: [
      // {
      //   name: 'hasLicense',
      //   placeholder: 'Has License',
      //   inputType: 'radio',
      //   radioOptions: [
      //     {id: 1, value: 'yes', name: 'Yes', selected: false},
      //     {id: 2, value: 'no', name: 'No', selected: false},
      //   ],
      // },
      {
        name: 'licenseNumber',
        header: 'License number',
        placeholder: 'XXX-XX-XXXXXX',
        inputType: 'license',
        maxLength: 13,
      },
      {
        name: 'licenseType',
        header: 'Type',
        placeholder: 'Type',
        inputType: 'picker',
        pickerOptions: ['Professional', 'Non-professional', 'Student Permit'],
      },
      {
        name: 'licenseStatus',
        header: 'Status',
        placeholder: 'Status',
        inputType: 'picker',
        pickerOptions: ['Unexpired', 'Expired'],
      },
    ],
  },
  {
    title: 'Vehicles Info',
    data: [
      {
        name: 'plateNumber',
        header: 'Plate number',
        placeholder: 'Plate number',
      },
      {name: 'make', header: 'Make', placeholder: 'Make'},
      {name: 'model', header: 'Model', placeholder: 'Model'},
      {name: 'color', header: 'Color', placeholder: 'Color'},
      {name: 'class', header: 'Class', placeholder: 'Class'},
      {
        name: 'bodyMarkings',
        header: 'Body markings',
        placeholder: 'Body markings',
      },
      {
        name: 'registeredOwner',
        header: 'Registered owner',
        placeholder: 'Registered owner',
      },
      {
        name: 'registeredOwnerAddress',
        header: 'Address',
        placeholder: 'Address',
      },
      {
        name: 'vehicleStatus',
        header: 'Status',
        placeholder: 'Status',
        inputType: 'picker',
        pickerOptions: ['Unexpired', 'Expired'],
      },
    ],
  },
];
