/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  citedViolations: [],
  violatorInfo: {
    violatorId: '',
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
    licenseId: '',
    licenseNumber: '',
    licenseType: '',
    licenseStatus: '',
  },
  vehiclesInfo: {
    vehiclesId: '',
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
  citationId: null,
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
    setViolations: (state, action) => {
      return {
        ...state,
        citedViolations: action.payload,
      };
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
    setCitationId: (state, action) => {
      return {
        ...state,
        citationId: action.payload,
      };
    },
    setCitationDetails: (state, action) => {
      return {
        ...state,
        citationDetails: action.payload,
      };
    },
    removeCitationInfo: state => {
      return {
        ...state,
        citedViolations: [],
        violatorInfo: {
          violatorId: '',
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
          licenseId: '',
          licenseNumber: '',
          licenseType: '',
          licenseStatus: '',
        },
        vehiclesInfo: {
          vehiclesId: '',
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
          citationId: '',
          violationDate: '',
          violationTime: '',
          municipality: '',
          zipCode: '',
          barangay: '',
          street: '',
        },
      };
    },
  },
});
export const {
  addViolation,
  removeViolation,
  setViolations,
  setViolatorsInfo,
  setLicenseInfo,
  setVehiclesInfo,
  setCitationDetails,
  setCitationId,
} = citationSlice.actions;
export default citationSlice.reducer;
