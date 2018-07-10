import { SET_VIEW } from '../actions';
import { VIEWS } from '../actions/helpers';

export default function view(state = VIEWS.INIT, action) {
	switch(action.type) {
		case SET_VIEW: 
			state = action.view;
			return state;
		default:
			return state;
	}
}