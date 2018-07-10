import React from 'react';
import { Review } from './Review';
import RecipeThumb from '../components/RecipeThumb';

import recipes_json from '../data/recipes.json';

import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

describe('Review page', () => {
	const expectedProps = {
		user: "username@mail.com",
		recipes: recipes_json
	};
	
	let component;
	beforeAll(() => {
		component = mount(<Review {...expectedProps} />);
	});

	it('should load all the recipes from recipes.json', () => {
		const numRecipes = recipes_json.length;

		const recipeThumbs = component.find(RecipeThumb);

		expect(recipeThumbs.length).toEqual(numRecipes);
	});


})