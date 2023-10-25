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
    municipality: '',
    zipCode: '',
    barangay: '',
    street: '',
    nationality: '',
    phoneNumber: '',
    dob: '',
  },
  licenseInfo: {
    hasLicense: true,
    licenseId: '',
    licenseNumber: '',
    licenseType: '',
    licenseStatus: '',
  },
  vehiclesInfo: {
    hasPlateNumber: true,
    vehiclesId: '',
    make: '',
    model: '',
    plateNumber: '',
    color: '',
    class: '',
    bodyMarkings: '',
    isRegistered: true,
    registeredOwner: '',
    ownerAddress: '',
    vehicleStatus: '',
  },
  citationId: null,
  citationDetails: {
    tct: '',
    violationDate: '',
    violationTime: '',
    municipality: '',
    zipCode: '',
    barangay: '',
    street: '',
  },
  invoice: {
    citation_id: '',
    created_at: '',
    date: '',
    discount: '',
    id: '',
    status: '',
    sub_total: '',
    total_amount: '',
    updated_at: '',
    violations: [],
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
    setInvoice: (state, action) => {
      return {
        ...state,
        invoice: action.payload,
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
          municipality: '',
          zipCode: '',
          barangay: '',
          street: '',
          nationality: '',
          phoneNumber: '',
          dob: '',
        },
        licenseInfo: {
          hasLicense: true,
          licenseId: '',
          licenseNumber: '',
          licenseType: '',
          licenseStatus: '',
        },
        vehiclesInfo: {
          hasPlateNumber: true,
          vehiclesId: '',
          make: '',
          model: '',
          plateNumber: '',
          color: '',
          class: '',
          bodyMarkings: '',
          isRegistered: true,
          registeredOwner: '',
          ownerAddress: '',
          vehicleStatus: '',
        },
        citationId: null,
        citationDetails: {
          tct: '',
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
  setInvoice,
  removeCitationInfo,
} = citationSlice.actions;
export default citationSlice.reducer;
