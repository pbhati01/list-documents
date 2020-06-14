import * as types from './types';
import * as api from '../../api';

export const setDocumentList = documentList => ({
  type: types.SET_DOCUMENT_LIST,
  documentList
});

export const setUserData = userData => ({
  type: types.SET_USER_DATA,
  userData
});

export const fetchDocumentList = () => {
  return (dispatch) => {
    api.fetchDocumentList()
      .then(({ status, data }) => {
        if (status === 200) {
          dispatch(setDocumentList(data.documents));
        }
      })
      .catch((error) => {
        console.log('catch fetchUserList error', error);
      });
  };
};

export const fetchUserData = () => {
  return (dispatch) => {
    api.fetchUserData()
      .then(({ status, data }) => {
        if (status === 200) {
          const { firstName, lastName } = data.body.User.profile;
          dispatch(setUserData({ firstName, lastName }));
        }
      })
      .catch((error) => {
        console.log('catch fetchUserData error', error);
      });
  };
};
