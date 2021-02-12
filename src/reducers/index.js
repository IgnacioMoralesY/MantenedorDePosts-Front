import { combineReducers } from 'redux';
import posts from './postReducer';
import inputs from './inputsReducer';

export default combineReducers({
	posts, inputs
});