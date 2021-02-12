import { SET_INPUT_NAME, SET_INPUT_DESCRIPTION, RESET_INPUT, SET_INPUT_NAME_SEARCH } from '../actions/types';
import { createReducer, Types as ReduxSauceTypes } from 'reduxsauce';

const INITIAL_STATE = {
	name: '',
	nameSearch: '',
	description: ''
};

const setInputName = (state = INITIAL_STATE, action) => ({
  ...state,
  name: action.name
});

const setInputNameSearch = (state = INITIAL_STATE, action) => ({
  ...state,
  nameSearch: action.nameSearch
});

const setInputDescription = (state = INITIAL_STATE, action) => ({
  ...state,
  description: action.description
});

const setResetInputs = () => ( INITIAL_STATE );


const HANDLERS = {
  [SET_INPUT_NAME]: 		setInputName,
  [SET_INPUT_DESCRIPTION]: 	setInputDescription,
  [RESET_INPUT]: 			setResetInputs,
  [SET_INPUT_NAME_SEARCH]: 	setInputNameSearch,
  [ReduxSauceTypes.DEFAULT]: state => state
}

export default createReducer(INITIAL_STATE, HANDLERS);
