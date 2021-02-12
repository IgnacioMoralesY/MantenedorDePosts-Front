import { SET_INPUT_NAME, SET_INPUT_DESCRIPTION, RESET_INPUT, SET_INPUT_NAME_SEARCH} from './types';

export const setInputName = (name) => ({
	type: SET_INPUT_NAME,
	name
});

export const setInputNameSearch = (nameSearch) => ({
	type: SET_INPUT_NAME_SEARCH,
	nameSearch: nameSearch
});

export const setInputDescription = (description) => ({
	type: SET_INPUT_DESCRIPTION,
	description
});

export const resetInputs = () => ({
	type: RESET_INPUT
});