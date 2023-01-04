export const CitationInputs = [
  {
    title: 'Drivers Personal Info',
    data: [
      {name: 'firstName', placeholder: 'First name'},
      {name: 'middleName', placeholder: 'Middle name'},
      {name: 'lastName', placeholder: 'Last name'},
      {
        name: 'gender',
        placeholder: 'Gender',
        inputType: 'picker',
        pickerOptions: ['Male', 'Female'],
      },
      {name: 'address', placeholder: 'Address'},
      {name: 'nationality', placeholder: 'Nationality'},
      {name: 'phoneNumber', placeholder: 'Phone Number', keyboardType: 'numeric'},
      {name: 'dob', placeholder: 'Date of birth', inputType: 'date'},
    ],
  },
  {
    title: 'Drivers License Info',
    data: [
      {
        name: 'hasLicense',
        placeholder: 'Has License',
        inputType: 'radio',
        radioOptions: [
          {id: 1, value: 'yes', name: 'Yes', selected: false},
          {id: 2, value: 'no', name: 'No', selected: false},
        ],
      },
      {name: 'licenseNumber', placeholder: 'License number', keyboardType: 'numeric', inputType: 'license'},
      {
        name: 'licenseType',
        placeholder: 'Type',
        inputType: 'picker',
        pickerOptions: ['Professional', 'Non-professional', 'Student Permit'],
      },
    ],
  },
  {
    title: 'Vehicles Info',
    data: [
      {name: 'plateNumber', placeholder: 'Plate number'},
      {name: 'make', placeholder: 'Make'},
      {name: 'model', placeholder: 'Model'},
      {name: 'color', placeholder: 'Color'},
      {name: 'class', placeholder: 'Class'},
      {name: 'bodyMarkings', placeholder: 'Body markings'},
      {name: 'registeredOwner', placeholder: 'Registered owner'},
      {name: 'address', placeholder: 'Address'},
      {name: 'status', placeholder: 'Status', inputType: 'picker', pickerOptions: ['Unexpired', 'Expired']},
    ],
  },
];
