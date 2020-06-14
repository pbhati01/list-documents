import { combineReducers } from 'redux';
import documentList from './documentList';
import userData from './userData';

export default combineReducers({
    documentList,
    userData,
});
