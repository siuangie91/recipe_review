import { combineReducers } from 'redux';

import user from './user_reducer.js';
import view from './view_reducer.js';
import recipes from './recipes_reducer.js';

const rootReducer = combineReducers({ 
	user, view, recipes
});

export default rootReducer;