import * as types from './types';

// test action
const main = (test) => {
	return (dispatch) => {
		dispatch({
			type: types.MAIN,
			payload: test
		})
	}
}

