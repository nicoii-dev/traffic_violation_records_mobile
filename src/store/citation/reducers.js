/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  citedViolations: [],
  violatorInfo: {
    firstName: '',
    middleName: '',
    lastName: '',
    gender: '',
    address: '',
    nationality: '',
    phoneNumber: '',
    dob: '',
  },
  licenseInfo: {
    licenseNumber: '',
    licenseType: '',
    licenseStatus: '',
  },
  vehiclesInfo: {
    make: '',
    model: '',
    plateNumber: '',
    color: '',
    class: '',
    bodyMarkings: '',
    registeredOwner: '',
    ownerAddress: '',
    vehicleStatus: '',
  },
  citationDetails: {
    violationDate: '',
    violationTime: '',
    municipality: '',
    zipCode: '',
    barangay: '',
    street: '',
  },
};

const citationSlice = createSlice({
  name: 'citation',
  initialState,
  reducers: {
    addViolation: (state, action) => {
      state.citedViolations.push(action.payload);
    },
    removeViolation: (state, action) => {
      const index = state.citedViolations.indexOf(action.payload);
      if (index > -1) {
        // only splice array when item is found
        state.citedViolations.splice(index, 1); // 2nd parameter means remove one item only
        return;
      }
    },
    setViolatorsInfo: (state, action) => {
      return {
        ...state,
        violatorInfo: action.payload,
      };
    },
    setLicenseInfo: (state, action) => {
      return {
        ...state,
        licenseInfo: action.payload,
      };
    },
    setVehiclesInfo: (state, action) => {
      return {
        ...state,
        vehiclesInfo: action.payload,
      };
    },
    setCitationDetails: (state, action) => {
      return {
        ...state,
        citationDetails: action.payload,
      };
    },
  },
});
export const {
  addViolation,
  removeViolation,
  setViolatorsInfo,
  setLicenseInfo,
  setVehiclesInfo,
  setCitationDetails,
} = citationSlice.actions;
export default citationSlice.reducer;
