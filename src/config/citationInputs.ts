export const CitationInputs = [
  {
    title: 'Drivers Personal Info',
    data: [
      {name: 'firstname', placeholder: 'First name'},
      {name: 'middlename', placeholder: 'Middle name'},
      {name: 'lastname', placeholder: 'Last name'},
      {
        name: 'gender',
        placeholder: 'Gender',
        inputType: 'picker',
        pickerOptions: ['Male', 'Female'],
      },
      {name: 'address', placeholder: 'Address'},
      {name: 'nationality', placeholder: 'Nationality'},
      {name: 'phoneNumber', placeholder: 'Phone Number'},
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
      {name: 'licenseNumber', placeholder: 'License number'},
      {
        name: 'licenseType',
        placeholder: 'Type',
        inputType: 'picker',
        pickerOptions: ['Prof', 'Non Prof', 'SP'],
      },
    ],
  },
  {
    title: 'Vehicles Info',
    data: [
      {name: 'vehicleType', placeholder: 'Vehicle type'},
      {name: 'plateNumber', placeholder: 'Plate number'},
      {name: 'color', placeholder: 'Color'},
      {name: 'class', placeholder: 'Class'},
      {name: 'bodyMarkings', placeholder: 'Body markings'},
      {name: 'registeredOwner', placeholder: 'Registered owner'},
      {name: 'address', placeholder: 'Address'},
      {name: 'status', placeholder: 'Status', inputType: 'picker', pickerOptions: ['Unexpired', 'Expired']},
    ],
  },
];
