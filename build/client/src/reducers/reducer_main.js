import * as types from '../actions/types';

export default function (state = [], action) {
    switch (action.type) {
    	case types.MAIN: 
    		console.log('REDUCER MAIN: ', action.payload);
    		return {
    			...state,
    			main: action.payload
    		}
	    default:
			return {...state};
    }
}