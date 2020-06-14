import initialState from '../initialState';
import * as actionTypes from '../actions/types';

const userData = (state = initialState.userData, action) => {
  switch (action.type) {
    case actionTypes.SET_USER_DATA: 
      return action.userData || {};
    default:
      return state;
  }
}

export default userData;
