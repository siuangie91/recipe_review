import recipes_json from '../data/recipes.json';

import { SET_RECIPE_RATING, SET_RECIPE_FAVE } from '../actions';

export default function recipes(state = recipes_json, action) {
	let theRecipe;
	let theRecipeIndex

	switch(action.type) {
		case SET_RECIPE_RATING:
			theRecipe = recipes_json.find(recipe => recipe.id === action.id); // find the recipe by id
			theRecipeIndex = state.indexOf(theRecipe); // get the index of the recipe
			theRecipe.rating = action.rating; // set the rating

			state[theRecipeIndex] = theRecipe; // update the recipe
			return state;
		case SET_RECIPE_FAVE:
			theRecipe = recipes_json.find(recipe => recipe.id === action.id); // find the recipe by id
			theRecipeIndex = state.indexOf(theRecipe); // get the index of the recipe
			theRecipe.favedBool = !theRecipe.favedBool;

			state[theRecipeIndex] = theRecipe; // update the recipe
			return state;
		default: 
			// add a boolean favorited property to each recipe
			const stateWithFavedPropBool = recipes_json.map(recipe => {
				recipe.favedBool = false; 
				return recipe;
			});
			return stateWithFavedPropBool;
	}
}
