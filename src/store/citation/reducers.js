import {createSlice} from '@reduxjs/toolkit';
import {SET_CITED_VIOLATIONS, SET_TRAFFIC_CITATION} from './constants';

const initialState = {
  citedViolations: [],
  citationDetails: {
    firstname: '',
    middlename: '',
    lastname: '',
    gender: '',
    address: '',
    nationality: '',
    phoneNumber: '',
    dob: '',
    licenseNumber: '',
    licenseType: '',
    licenseStatus: '',
    vehicleType: '',
    plateNumber: '',
    color: '',
    class: '',
    bodyMarkings: '',
    registeredOwner: '',
    ownerAddress: '',
    vehicleStatus: '',
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
  },
});
export const {addViolation, removeViolation} = citationSlice.actions;
export default citationSlice.reducer;
