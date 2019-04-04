import { combineReducers } from 'redux'
import auth from './auth';
import films from './films';
import modal from './modal';
import error from './error';
import info from './info'
export default combineReducers({auth,films,modal,error,info
});