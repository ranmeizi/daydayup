import * as ActionTypes from './actionTypes'

const initialState = {
  tabs: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SET_TABS:
      return {
        ...state,
        tabs: action.tabs
      };
    default:
      return { ...state }
  }
}

