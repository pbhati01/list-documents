import initialState from '../initialState';
import * as actionTypes from '../actions/types';

const documentList = (state = initialState.documentList, action) => {
  switch (action.type) {
    case actionTypes.SET_DOCUMENT_LIST: 
      return action.documentList || [];
    default:
      return state;
  }
}

export default documentList;
