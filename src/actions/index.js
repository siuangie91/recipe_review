export const SET_USER = 'SET_USER';
export const SET_VIEW = 'SET_VIEW';
export const SET_RECIPE_RATING = 'SET_RECIPE_RATING';
export const SET_RECIPE_FAVE = 'SET_RECIPE_FAVE';

export function setUser(user) {
	return {
		user,
		type: SET_USER
	}
}

export function setView(view) {
	return {
		view,
		type: SET_VIEW
	}
}

export function setRecipeRating(id, rating) {
	return {
		id,
		rating,
		type: SET_RECIPE_RATING
	}
}

export function setRecipeFave(id) {
	return {
		id,
		type: SET_RECIPE_FAVE
	}
}