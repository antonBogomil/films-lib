import { combineReducers } from 'redux'
import auth from './auth';
import films from './films';
import modal from './modal';
export default combineReducers({auth,films,modal});