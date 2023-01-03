import {SET_LOADING} from './constants';

const initialState = {
  isLoading: false,
};

export default function reducer(state = initialState, {type, payload}) {
  switch (type) {
    case SET_LOADING: {
      return {
        ...state,
        isLoading: payload,
      };
    }

    default:
      return state;
  }
}
