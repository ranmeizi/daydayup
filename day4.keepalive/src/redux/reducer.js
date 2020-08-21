import * as ActionTypes from './actionTypes'
import { combineReducers } from 'redux'

const initialState = {
  tabs: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.ADD_TAB:
      return {
        ...state,
        tabs: [...state.tabs, action.tab]
      };
    case ActionTypes.REMOVE_TAB:
      return {
        ...state,
        tabs: state.abs.filter(item => item.key !== action.key)
      };
    default:
      return { ...state }
  }
}
